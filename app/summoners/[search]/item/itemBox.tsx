"use client"

import React from "react"
import ItemIcon from "./itemIcon"

interface ItemBoxProps {
    itemIds: number[]
}

function ItemBox(props: ItemBoxProps) {
    return (
        <div className="flex space-x-0.5">
            {props?.itemIds?.map((itemId) => (
                <ItemIcon key={itemId} itemNumber={itemId} />
            ))}
        </div>
    )
}

export default React.memo(ItemBox)