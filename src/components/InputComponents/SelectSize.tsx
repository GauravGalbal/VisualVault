'use client'


import { Button, Input, Select, SelectItem, useDisclosure } from "@nextui-org/react";



function SizeInput({ w, h, q, setW, setH, setQ }: any) {

    return (
        <div className=" flex felx-row justify-between w-full">
            <Input
                key="width"
                type="number"
                color="secondary"
                label="Width"
                size="md"
                className=" max-w-[30%]"
                labelPlacement="outside"
                value={w}
                onValueChange={setW}
            />

            <Input
                key="Height"
                type="number"
                color="secondary"
                label="Height"
                size="md"
                className=" max-w-[30%]"
                labelPlacement="outside"
                value={h}
                onValueChange={setH}
            />

            <Input
                key="Quality"
                type="number"
                color="secondary"
                label="Quality"
                size="md"
                className=" max-w-[30%]"
                labelPlacement="outside"
                value={q}
                onValueChange={setQ}
            />

        </div>
    )
}

export default SizeInput