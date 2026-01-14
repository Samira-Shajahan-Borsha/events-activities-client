const ProgressBar = ({
    current,
    max,
}: {
    current: number;
    max: number;
}) => {
    const percentage = Math.min((current / max) * 100, 100);

    return (
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-primary">{max - current} slots left</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar