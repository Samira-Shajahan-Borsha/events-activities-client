import { CalendarDays } from 'lucide-react'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <CalendarDays className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold text-primary">
                EventHub
            </span>
        </Link>
    )
}

export default Logo