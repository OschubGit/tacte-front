import React from "react";

const SvgCercleDegradation = ({
    innerColor = "#7775D6",
    color = "#E935C1",
    className = "absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]",
}: {
    innerColor?: string;
    color?: string;
    className?: string;
}) => {
    return (
        <svg viewBox="0 0 1024 1024" aria-hidden="true" className={className}>
            <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
                fillOpacity="0.7"
            />
            <defs>
                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                    <stop stopColor={innerColor} />
                    <stop offset={1} stopColor={color} />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default SvgCercleDegradation;
