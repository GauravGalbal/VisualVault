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
                    popoverContent: " bg-[#000] "
                }}
                defaultSelectedKeys={[`${fit}`]}
                onChange={(e) => { console.log(e.target.value); setFit(e.target.value); }}
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
                    label="Fit"
                    className="max-w-full"
                    color="secondary"
                    classNames={{
                        popoverContent: " bg-[#000] "
                    }}
                    defaultSelectedKeys={[`${position}`]}
                    onChange={(e) => { console.log(e.target.value); setPosition(e.target.value); }}
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