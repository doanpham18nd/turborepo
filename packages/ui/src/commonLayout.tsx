"use client";

import React, {ReactNode} from "react";
// import StyledComponentsRegistry from "./AntdRegistry";
import Entity from "@ant-design/cssinjs/es/Cache";
import {createCache, extractStyle, StyleProvider} from "@ant-design/cssinjs";

const StyledComponentsRegistry = ({ children, useServerInsertedHTML }: {
    children: ReactNode;
    // eslint-disable-next-line no-unused-vars
    useServerInsertedHTML: (callback: () => React.ReactNode) => void;
}) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    const isServerInserted = React.useRef<boolean>(false);
    useServerInsertedHTML(() => {
        // avoid duplicate css insert
        if (isServerInserted.current) {
            return;
        }
        isServerInserted.current = true;
        return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />;
    });
    return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export const CommonLayout = ({children, useServerInsertedHTML}: {
    children: ReactNode;
    // eslint-disable-next-line no-unused-vars
    useServerInsertedHTML: (callback: () => React.ReactNode) => void;
}) => {

    return (
        <StyledComponentsRegistry useServerInsertedHTML={useServerInsertedHTML}>
            <div>
                xin cao
                {children}
            </div>
        </StyledComponentsRegistry>
    )
}