'use client';
import { usePathname, useRouter } from "next/navigation";
import { AnimatePageOut } from "../../utils/animations.js";
import React from "react";

interface Props {
    href: string;
    label: string;
}

const TransitionLink = ({ href, label }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            AnimatePageOut(href, router);
        }
    };

    return (
        <button
            className="text-xl text-neutral-900 hover:text-neutral-700"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default TransitionLink;