import React from "react";
import HeaderWithFlyoutMenu from "../(components)/Headers/HeaderWithFlyoutMenu";
import FooterSimpleCentered from "../(components)/Footers/FooterSimpleCentered";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white">
            <HeaderWithFlyoutMenu />
            {children}
            <FooterSimpleCentered />
        </div>
    );
};

export default layout;
