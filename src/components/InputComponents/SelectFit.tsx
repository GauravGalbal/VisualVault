'use client'


import { Button, Input, Select, SelectItem, useDisclosure } from "@nextui-org/react";



function SelectFit({ position, fit, setFit, setPosition }: any) {

    return (
        <div className=" flex flex-col justify-evenly w-full gap-5">
            <Select
                labelPlacement={"outside"}
                label="Fit"
                className="max-w-full"
                color="secondary"
                classNames={{
                    label: ["text-[#fff]", "font-medium", "tracking-wider"],
                    popoverContent: ["bg-[#000]"],
                    trigger: ["bg-[#17525F]", "text-[#fff]"],
                    value: ["text-[#fff]"],
                }}
                defaultSelectedKeys={[`${fit}`]}
                onChange={(e) => { setFit(e.target.value); }}
            >
                {["contain", "fill", "cover"].map((fit) => (
                    <SelectItem key={fit} value={fit}>
                        {fit}
                    </SelectItem>
                ))}
            </Select>

            {(fit == "cover") && (
                <Select
                    labelPlacement={"outside"}
                    label="Position"
                    className="max-w-full"
                    color="secondary"
                    classNames={{
                        label: ["text-[#fff]", "font-medium", "tracking-wider"],
                        popoverContent: ["bg-[#000]"],
                        trigger: ["bg-[#17525F]", "text-[#fff]"],
                        value: ["text-[#fff]"]
                    }}
                    defaultSelectedKeys={[`${position}`]}
                    onChange={(e) => { setPosition(e.target.value); }}
                >
                    {["top", "bottom", "left", "right", "center"].map((position) => (
                        <SelectItem key={position} value={position}>
                            {position}
                        </SelectItem>
                    ))}
                </Select>
            )}

        </div>
    )
}

export default SelectFit