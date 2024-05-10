'use client'


import { Button, Input, Select, SelectItem, useDisclosure } from "@nextui-org/react";



function SizeInput({ w, h, q, setW, setH, setQ, defaultH, defaultW }: any) {

    return (
        <div className=" flex flex-col w-full">
            <div className=" flex felx-row justify-between w-full my-5">
                <div className=" flex flex-col md:max-w-[40%] max-w-[45%]">
                    <Input
                        key="width"
                        type="number"
                        color="secondary"
                        label="Width"
                        size="md"
                        className=" w-full "
                        labelPlacement="outside"
                        value={w}
                        onValueChange={(e) => {setW(e); setQ(75)}}
                        classNames={{
                            label: ["text-[#fff]", "font-medium", "tracking-wider"],
                            inputWrapper: ["text-[#fff]", "bg-[#17525F]"],
                            input: ["text-[#fff]", "bg-[#17525F]"],
                        }}
                    />

                    <Button size="sm" variant="bordered"
                        className=" text-white self-center mt-3 text-xs"
                        onPress={() => { setW(defaultW) }}>
                        use default width
                    </Button>
                </div>

                <div className=" flex flex-col md:max-w-[40%] max-w-[45%]">
                    <Input
                        key="Height"
                        type="number"
                        color="secondary"
                        label="Height"
                        size="md"
                        className=" w-full "
                        labelPlacement="outside"
                        value={h}
                        onValueChange={(e) => {setH(e); setQ(75)}}
                        classNames={{
                            label: ["text-[#fff]", "font-medium", "tracking-wider"],
                            inputWrapper: ["text-[#fff]", "bg-[#17525F]"],
                            input: ["text-[#fff]", "bg-[#17525F]"],
                        }}
                    />

                    <Button size="sm" variant="bordered"
                        className=" text-white self-center mt-3 text-xs"
                        onPress={() => { setH(defaultH) }}>
                        use default height
                    </Button>
                </div>
            </div>

            <Input
                key="Quality"
                type="number"
                color="secondary"
                label="Quality"
                size="md"
                className=" mt-5 "
                labelPlacement="outside"
                value={q}
                onValueChange={setQ}
                classNames={{
                    label: ["text-[#fff]", "font-medium", "tracking-wider"],
                    input: ["text-[#fff]", "bg-[#17525F]"],
                    inputWrapper: ["text-[#fff]", "bg-[#17525F]"],
                }}
            />

        </div>
    )
}

export default SizeInput