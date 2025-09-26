import React from "react";

export const PrimaryButton = ({
    href,
    children,
}: {
    href?: string;
    children: React.ReactNode;
}) => {
    return (
        <a
            href={href ?? "#"}
            className="rounded-md bg-tacte-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-tacte-primary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {children}
        </a>
    );
};

export const PrimaryButtonLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a
            href={href}
            className="text-sm/6 font-semibold text-gray-900 hover:text-tacte-primary-300"
        >
            {children}
            <span aria-hidden="true">→</span>
        </a>
    );
};

export const GlassButton = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a
            href={href}
            className="rounded-md bg-white/15 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
            {children}
        </a>
    );
};
