import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2 text-sm', className)}>
            <Link
                href="/"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Ana Sayfa"
            >
                <Home className="w-4 h-4" />
            </Link>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-foreground font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}
