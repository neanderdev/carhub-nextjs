"use client";

import { CustomButton } from ".";

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export function ShowMore({ pageNumber, isNext, setLimit }: ShowMoreProps) {
    function handleNavigation() {
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNext && (
                    <CustomButton
                        title="Show More"
                        btnType="button"
                        containerStyles="bg-primary-blue rounded-full text-white"
                        handleClick={handleNavigation}
                    />
                )
            }
        </div>
    );
}
