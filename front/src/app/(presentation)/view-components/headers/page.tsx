import HeaderWithFlyoutMenu from "@/app/(components)/Headers/HeaderWithFlyoutMenu";
import HeaderWithFullWidthFlyoutMenu from "@/app/(components)/Headers/HeaderWithFullWidthFlyoutMenu";
import HeaderWithIconsMobileMenu from "@/app/(components)/Headers/HeaderWithIconsMobileMenu";
import React from "react";

const page = () => {
    return (
        <div>
            <div style={{ minHeight: "90vh" }}>
                <HeaderWithFlyoutMenu />
            </div>
            <div style={{ minHeight: "90vh" }}>
                <HeaderWithFullWidthFlyoutMenu />
            </div>
            <div style={{ minHeight: "90vh" }}>
                <HeaderWithIconsMobileMenu />
            </div>
        </div>
    );
};

export default page;
