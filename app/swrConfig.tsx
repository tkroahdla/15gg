"use client"

import React from "react";
import { SWRConfig } from "swr";

function swrConfig({ children }: any) {
    return (
        <SWRConfig
            value={{
                fetcher: (url: string) =>
                    fetch(url).then((response) => response.json()),
                revalidateOnFocus: false,
            }}
        >
            {children}
        </SWRConfig>
    )
}

export default React.memo(swrConfig)