import { cn } from '@/lib/utils';
import React from 'react';

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn('text-gray-1 font-bold tracking-wide mt-2', className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                'mt-6 text-gray-1 tracking-wide leading-relaxed text-sm',
                className
            )}
        >
            {children}
        </p>
    );
};

export const AnalyticCard = ({
    className,
    title,
    value,
    icon: Icon, // Assuming you're passing the icon as a prop
}: {
    className?: string;
    title: string;
    value: number;
    icon:any // Icon component type
}) => {
    return (
        <div
            className={cn(
                'relative rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-2 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700',
                className
            )}
        >
            <div className="relative z-50 p-4">
                <CardTitle>{value}</CardTitle>
                <CardDescription>{title}</CardDescription>
            </div>
            <div className="absolute bottom-0 right-0 overflow-hidden w-20 h-20">
                <div className="w-40 h-40 bg-gray-6 rounded-full absolute -bottom-10 -right-10 flex items-center justify-center animate-pulse">
                    {Icon}
                </div>
            </div>
        </div>
    );
};
