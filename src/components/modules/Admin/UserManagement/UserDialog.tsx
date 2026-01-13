"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
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
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

import { IUser, STATUS } from "@/types/user.interface";
import {
    approveHost,
    blockUser,
    unblockUser,
} from "@/services/admin/userManagement";

interface UserDialogProps {
    open: boolean;
    onClose: () => void;
    user: IUser | null;
    onSuccess: () => void;
}

type AdminAction = "APPROVE_HOST" | "BLOCK_USER" | "UNBLOCK_USER" | null;

export default function UserDialog({
    open,
    onClose,
    user,
    onSuccess,
}: UserDialogProps) {
    const [isPending, startTransition] = useTransition();
    const [action, setAction] = useState<AdminAction>(null);

    useEffect(() => {
        if (!open) setAction(null);
    }, [open]);

    if (!user) return null;

    const handleConfirm = () => {
        if (!action) return;

        startTransition(async () => {
            try {
                let result;

                if (action === "APPROVE_HOST") result = await approveHost(user._id);
                if (action === "BLOCK_USER") result = await blockUser(user._id);
                if (action === "UNBLOCK_USER") result = await unblockUser(user._id);

                if (result?.success) {
                    toast.success("User updated successfully");
                    onSuccess();
                    onClose();
                } else {
                    toast.error(result?.message || "Action failed");
                }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                toast.error(error?.message || "Something went wrong");
            } finally {
                setAction(null);
            }
        });
    };

    return (
        <>
            {/* MAIN DIALOG */}
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-xl">
                    {/* HEADER */}
                    <DialogHeader className="space-y-1">
                        <DialogTitle className="text-xl font-semibold tracking-tight">
                            User Management
                        </DialogTitle>
                        <p className="text-sm text-muted-foreground">
                            Manage user role and account access
                        </p>
                    </DialogHeader>

                    {/* USER INFO */}
                    <div className="rounded-xl border bg-card p-5 space-y-4">
                        {/* Identity */}
                        <div className="space-y-1">
                            <p className="text-base font-medium">
                                {user.fullName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        </div>

                        {/* Meta */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                    Role
                                </p>
                                <p className="font-medium text-sm">
                                    {user.role}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                    Status
                                </p>
                                <p className="font-medium text-sm">
                                    {user.status}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <DialogFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between pt-6">
                        <div className="flex flex-wrap gap-2">
                            {user.role === "USER" && user.status === STATUS.ACTIVE && (
                                <Button onClick={() => setAction("APPROVE_HOST")}>
                                    Approve as Host
                                </Button>
                            )}

                            {user.status !== STATUS.BLOCKED && (
                                <Button
                                    variant="destructive"
                                    onClick={() => setAction("BLOCK_USER")}
                                >
                                    Block User
                                </Button>
                            )}

                            {user.status === STATUS.BLOCKED && (
                                <Button
                                    variant="outline"
                                    onClick={() => setAction("UNBLOCK_USER")}
                                >
                                    Unblock User
                                </Button>
                            )}
                        </div>

                        <Button variant="ghost" onClick={onClose}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* CONFIRMATION */}
            <AlertDialog open={!!action} onOpenChange={() => setAction(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm action</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will immediately update the user account and permissions.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm} disabled={isPending}>
                            {isPending ? "Processing..." : "Confirm"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
