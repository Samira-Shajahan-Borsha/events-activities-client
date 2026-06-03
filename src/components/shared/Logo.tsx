import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-primary">
                EventHub
            </span>
        </Link>
    )
}

export default Logo