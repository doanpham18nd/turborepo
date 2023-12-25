"use client";

import {useServerInsertedHTML} from "next/navigation";
import {CommonLayout} from "@repo/ui/commonLayout";
import React from "react";

export function Test({children}: React.PropsWithChildren) {
    return (
        <CommonLayout useServerInsertedHTML={useServerInsertedHTML}>
            {children}
        </CommonLayout>
    )
}