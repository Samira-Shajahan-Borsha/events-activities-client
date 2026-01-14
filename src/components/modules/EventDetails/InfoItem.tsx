import React from 'react'

const InfoItem = ({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <div className="flex items-center gap-3">
        <div className="rounded-lg bg-muted/60 p-2.5 text-primary">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-semibold uppercase text-muted-foreground">
                {label}
            </p>
            <p className="text-sm font-medium">{value}</p>
        </div>
    </div>
);

export default InfoItem