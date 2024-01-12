'use client';

import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export function CustomButton({
    title,
    btnType,
    containerStyles,
    textStyles,
    rightIcon,
    isDisabled,
    handleClick
}: CustomButtonProps) {
    return (
        <button
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            disabled={false}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>

            {rightIcon
                && <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="Right Icon"
                        fill
                        className="object-contain"
                    />
                </div>
            }
        </button>
    );
}
