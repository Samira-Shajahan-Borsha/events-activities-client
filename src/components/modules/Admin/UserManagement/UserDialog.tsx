"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

import { IUser, STATUS } from "@/types/user.interface";
import {
    approveHost,
    blockUser,
    unblockUser,
} from "@/services/admin/userManagement";
import { useRouter } from "next/navigation";
import {
    CheckCircle2,
    XCircle,
    AlertCircle,
    Clock,
    Shield,
    Zap,
    Lock,
    Unlock,
} from "lucide-react";

interface UserDialogProps {
    open: boolean;
    onClose: () => void;
    user: IUser | null;
    onSuccess: () => void;
}

type AdminAction = "APPROVE_HOST" | "BLOCK_USER" | "UNBLOCK_USER" | null;

// Status Badge Component
function StatusBadge({ status }: { status: string }) {
    const statusConfig: Record<string, { variant: any; icon: any; label: string }> = {
        [STATUS.ACTIVE]: {
            variant: "default" as const,
            icon: <CheckCircle2 className="w-3 h-3" />,
            label: "Active",
        },
        [STATUS.BLOCKED]: {
            variant: "destructive" as const,
            icon: <XCircle className="w-3 h-3" />,
            label: "Blocked",
        },
        [STATUS.PENDING]: {
            variant: "secondary" as const,
            icon: <Clock className="w-3 h-3" />,
            label: "Pending",
        },
    };

    const config = statusConfig[status] || statusConfig[STATUS.PENDING];

    return (
        <Badge variant={config.variant} className="flex items-center gap-1.5 w-fit">
            {config.icon}
            {config.label}
        </Badge>
    );
}

// Role Badge Component
function RoleBadge({ role }: { role: string }) {
    const roleConfig: Record<string, { variant: any; icon: any; label: string }> = {
        USER: {
            variant: "outline" as const,
            icon: <Shield className="w-3 h-3" />,
            label: "User",
        },
        HOST: {
            variant: "secondary" as const,
            icon: <Zap className="w-3 h-3" />,
            label: "Host",
        },
        ADMIN: {
            variant: "default" as const,
            icon: <Shield className="w-3 h-3" />,
            label: "Admin",
        },
    };

    const config = roleConfig[role] || roleConfig.USER;

    return (
        <Badge variant={config.variant} className="flex items-center gap-1.5 w-fit">
            {config.icon}
            {config.label}
        </Badge>
    );
}

// User Info Card Component
function UserInfoCard({ user }: { user: IUser }) {
    const formatDate = (date: string | Date | undefined) => {
        if (!date) return "N/A";
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="rounded-lg border bg-card p-5 space-y-4">
            {/* User Header */}
            <div className="space-y-1">
                <h3 className="text-base font-semibold tracking-tight">
                    {user.fullName}
                </h3>
                <p className="text-sm text-muted-foreground break-all">{user.email}</p>
            </div>

            <Separator />

            {/* Status & Role Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Status
                    </p>
                    <StatusBadge status={user.status} />
                </div>
                <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Role
                    </p>
                    <RoleBadge role={user.role} />
                </div>
            </div>

            <Separator />

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                        Joined
                    </p>
                    <p className="font-medium text-sm">
                        {formatDate(user.createdAt)}
                    </p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                        Last Active
                    </p>
                    <p className="font-medium text-sm">
                        {formatDate(user.lastActivityAt)}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Action Button Component
interface ActionButtonProps {
    action: AdminAction;
    user: IUser;
    isPending: boolean;
    onAction: (action: AdminAction) => void;
}

function ActionButton({ action, user, isPending, onAction }: ActionButtonProps) {
    const actionConfig: Record<string, { show: boolean; variant: any; icon: any; label: string; warning?: string } | null> = {
        APPROVE_HOST: {
            show: user.role === "USER" && user.status === STATUS.ACTIVE,
            variant: "default" as const,
            icon: <Zap className="w-4 h-4" data-icon="inline-start" />,
            label: "Approve as Host",
            warning: "This user will gain hosting privileges",
        },
        BLOCK_USER: {
            show: user.status !== STATUS.BLOCKED,
            variant: "destructive" as const,
            icon: <Lock className="w-4 h-4" data-icon="inline-start" />,
            label: "Block User",
            warning: "This user will lose access to the platform",
        },
        UNBLOCK_USER: {
            show: user.status === STATUS.BLOCKED,
            variant: "outline" as const,
            icon: <Unlock className="w-4 h-4" data-icon="inline-start" />,
            label: "Unblock User",
        },
    };

    const config = action ? actionConfig[action] : null;

    if (!config || !config.show) return null;

    return (
        <Button
            variant={config.variant}
            disabled={isPending}
            onClick={() => onAction(action)}
            className="gap-2"
        >
            {isPending ? (
                <>
                    <Spinner />
                    Processing...
                </>
            ) : (
                <>
                    {config.icon}
                    {config.label}
                </>
            )}
        </Button>
    );
}

// Confirmation Dialog Component
interface ConfirmationDialogProps {
    open: boolean;
    action: AdminAction;
    user: IUser | null;
    isPending: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmationDialog({
    open,
    action,
    user,
    isPending,
    onConfirm,
    onCancel,
}: ConfirmationDialogProps) {
    if (!user) return null;

    const actionConfig: Record<string, { title: string; description: string; icon: any } | null> = {
        APPROVE_HOST: {
            title: "Approve User as Host?",
            description: `${user.fullName} will be granted host privileges and can create listings. This action can be reversed.`,
            icon: <Zap className="w-5 h-5 text-blue-600" />,
        },
        BLOCK_USER: {
            title: "Block This User?",
            description: `${user.fullName} will be unable to access the platform. Their listings will be hidden. This action can be reversed.`,
            icon: <AlertCircle className="w-5 h-5 text-red-600" />,
        },
        UNBLOCK_USER: {
            title: "Unblock This User?",
            description: `${user.fullName} will regain full platform access and their listings will be visible again.`,
            icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
        },
    };

    const config = action ? actionConfig[action] : null;

    if (!config) return null;

    return (
        <AlertDialog open={open} onOpenChange={onCancel}>
            <AlertDialogContent>
                <AlertDialogHeader className="space-y-3">
                    <div className="flex items-start gap-3">
                        {config.icon}
                        <AlertDialogTitle>{config.title}</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>{config.description}</AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="gap-2 sm:gap-0">
                    <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        disabled={isPending}
                        className={action === "BLOCK_USER" ? "bg-destructive hover:bg-destructive/90" : ""}
                    >
                        {isPending ? (
                            <div className="flex items-center gap-2">
                                <Spinner />
                                Processing...
                            </div>
                        ) : (
                            action === "APPROVE_HOST"
                                ? "Approve as Host"
                                : action === "BLOCK_USER"
                                    ? "Block User"
                                    : "Unblock User"
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

// Main UserDialog Component
export default function UserDialog({
    open,
    onClose,
    user,
    onSuccess,
}: UserDialogProps) {
    const [isPending, startTransition] = useTransition();
    const [action, setAction] = useState<AdminAction>(null);
    const router = useRouter();

    useEffect(() => {
        if (!open) {
            setAction(null);
        }
    }, [open]);

    if (!user) return null;

    const handleConfirm = () => {
        if (!action) return;

        startTransition(async () => {
            try {
                let result;

                if (action === "APPROVE_HOST") {
                    result = await approveHost(user._id);
                } else if (action === "BLOCK_USER") {
                    result = await blockUser(user._id);
                } else if (action === "UNBLOCK_USER") {
                    result = await unblockUser(user._id);
                }

                if (result?.success) {
                    const actionLabels = {
                        APPROVE_HOST: "User approved as host",
                        BLOCK_USER: "User blocked successfully",
                        UNBLOCK_USER: "User unblocked successfully",
                    };

                    toast.success(actionLabels[action] || "User updated successfully");
                    onSuccess();
                    onClose();
                    router.refresh();
                } else {
                    toast.error(result?.message || "Action failed. Please try again.");
                }
            } catch (error: any) {
                toast.error(error?.message || "Something went wrong. Please try again.");
            } finally {
                setAction(null);
            }
        });
    };

    return (
        <>
            {/* Main User Management Dialog */}
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-xl">
                    {/* Dialog Header */}
                    <DialogHeader className="space-y-2">
                        <DialogTitle className="text-2xl font-semibold tracking-tight">
                            User Management
                        </DialogTitle>
                        <DialogDescription className="text-base">
                            Review and manage user status, role, and account access permissions.
                        </DialogDescription>
                    </DialogHeader>

                    {/* User Info Card */}
                    <UserInfoCard user={user} />

                    {/* Actions Section */}
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            Administrative Actions
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <ActionButton
                                action="APPROVE_HOST"
                                user={user}
                                isPending={isPending}
                                onAction={setAction}
                            />
                            <ActionButton
                                action="BLOCK_USER"
                                user={user}
                                isPending={isPending}
                                onAction={setAction}
                            />
                            <ActionButton
                                action="UNBLOCK_USER"
                                user={user}
                                isPending={isPending}
                                onAction={setAction}
                            />
                        </div>
                    </div>

                    {/* Dialog Footer */}
                    <DialogFooter className="pt-2">
                        <Button variant="ghost" onClick={onClose} disabled={isPending}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Confirmation Dialog */}
            <ConfirmationDialog
                open={!!action}
                action={action}
                user={user}
                isPending={isPending}
                onConfirm={handleConfirm}
                onCancel={() => setAction(null)}
            />
        </>
    );
}