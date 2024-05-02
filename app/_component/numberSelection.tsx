'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

type NumberSelectionProps = {
    value: number
    min?: number
    max?: number
    onChange: (value: number) => void
}

export default function NumberSelection(props: NumberSelectionProps) {
    const { value, onChange, min = 0, max = 10 } = props

    const onMinusClick = () => {
        if (value > min) {
            onChange(value - 1)
        }
    }

    const onPlusClick = () => {
        if (value < max) {
            onChange(value + 1)
        }
    }

    return (
        <div>
            <Button onClick={onMinusClick}>-</Button>
            {value}
            <Button onClick={onPlusClick}>+</Button>
        </div>
    )
}


