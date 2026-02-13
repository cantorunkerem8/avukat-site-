import { cn } from '@/lib/utils';

export function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-xl bg-muted',
                className
            )}
        />
    );
}

export function CardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6">
            <Skeleton className="w-12 h-12 rounded-xl mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
        </div>
    );
}

export function TeamCardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
            <Skeleton className="h-5 w-32 mx-auto mb-2" />
            <Skeleton className="h-4 w-24 mx-auto mb-3" />
            <Skeleton className="h-3 w-full mb-1" />
            <Skeleton className="h-3 w-3/4 mx-auto" />
        </div>
    );
}

export function BlogCardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6">
            <Skeleton className="h-5 w-20 rounded-full mb-3" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <div className="flex justify-between">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
            </div>
        </div>
    );
}
