"use client";

import { useState } from "react";
import Drawer from "@/app/(components)/Drawer/Drawer";

export default function ReserveButton() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button
                className="text-sm/6 font-semibold text-gray-900 hover:text-tacte-primary-300"
                onClick={handleClick}
            >
                Reservar
            </button>
        </>
    );
}
