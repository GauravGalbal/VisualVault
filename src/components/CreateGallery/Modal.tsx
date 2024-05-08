'use client'


import { EditData } from "@/utils/DefaultData";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import SizeInput from "../InputComponents/SelectSize";
import SelectFit from "../InputComponents/SelectFit";
import { ImageContext } from "@/context/ImageContext";
import { ImageDimensionContext } from "@/context/ImageDimensionContext";


interface formData {
    fit: string,
    w: number,
    h: number,
    q: number,
    position: string,
}



function ModalLayout({ isOpen, onOpenChange, ind }: any) {
    const { images, setImages }: any = useContext(ImageContext);
    const { editData, setEditdata } = useContext(ImageDimensionContext);
    const [q, setQ] = useState(75);
    const [w, setW] = useState(100);
    const [h, setH] = useState(100);
    const [fit, setFit] = useState("contain");
    const [position, setPosition] = useState("center");
    const [flag, setFlag] = useState(false);

    function setInitialData() {
        setQ(editData[ind].q);
        setH(editData[ind].h);
        setPosition(editData[ind].position);
        setFit(editData[ind].fit);
        setW(editData[ind].w);
        setFlag(true);

        console.log(editData[ind]);
    }

    useEffect(() => {
        setInitialData();
    }, [ind])

    function handleApply() {
        try {
            setEditdata((previous) => {
                return previous.map((data, key) => {
                    if (key === ind) {
                        return { w, h, q, fit, position };
                    } else {
                        return data; // Return unchanged data for other elements
                    }
                });
            });

            let url = images[ind].src;
            url = `${images[ind].src.match(/^(.*?)(?:&|$)/)[1]}${(q != 75) ? `&q=${q}` : '&q=75'}${(w != 100) ? `&w=${w}` : ''}${(h != 100) ? `&h=${h}` : ''}${(fit != "") ? `&fit=${fit}` : '&fit=contain'}${(fit == "cover" && position != "") ? `&position=${position}` : ''}`
            console.log(`${process.env.NEXT_PUBLIC_CDN_URL}=${url}`);

            setImages((previous: any) => {
                return previous.map((data: any, key: number) => {
                    if (key === ind) {
                        return { ...data, src: url };
                    } else {
                        return data; // Return unchanged data for other elements
                    }
                })
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="opaque"
            size="xl"
            classNames={{
                body: "py-6",
                backdrop: "bg-[#000]/50 backdrop-opacity-70",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#fff]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                            { (flag) &&
                                <div className=" flex flex-col w-full px-10 gap-5 ">
                                    <SizeInput w={w} h={h} q={q} setW={setW} setH={setH} setQ={setQ} />
                                    <SelectFit fit={fit} setFit={setFit} position={position} setPosition={setPosition} />
                                </div> }
                        </ModalBody>

                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={() => { onClose(); }}>
                                Close
                            </Button>
                            <Button color="success" variant="shadow" onPress={() => { handleApply(); onClose(); }}>
                                Apply
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ModalLayout