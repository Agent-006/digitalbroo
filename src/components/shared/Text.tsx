import { cn } from '@/lib/utils';
import React from 'react';

interface TextProps {
    className?: string;
    text: string;
}

const Text: React.FC<TextProps> = ({className, text }) => {
    return (
        <div
            className={cn("text-[#6C3227]",className)}
        >
            <h1>{text}</h1>
        </div>
    );
};

export default Text;
