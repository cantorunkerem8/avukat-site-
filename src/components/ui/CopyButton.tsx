'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './Button';

interface CopyButtonProps {
    textToCopy: string;
    className?: string;
}

export function CopyButton({ textToCopy, className = '' }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`p-2 rounded-full hover:bg-accent/10 transition-colors ${className}`}
            title="Numarayı Kopyala"
            aria-label="Numarayı Kopyala"
        >
            {isCopied ? (
                <Check className="w-4 h-4 text-emerald-500" />
            ) : (
                <Copy className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
            )}
        </button>
    );
}
