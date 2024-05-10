'use client'


import { EditData } from "@/utils/DefaultData";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import SizeInput from "../InputComponents/SelectSize";
import SelectFit from "../InputComponents/SelectFit";
import { ImageContext } from "@/context/ImageContext";
import { ImageDimensionContext } from "@/context/ImageDimensionContext";




function ModalLayout({ isOpen, onOpenChange, ind, dimensions }: any) {
    const { images, setImages }: any = useContext(ImageContext);
    const { editData, setEditdata } = useContext(ImageDimensionContext);
    const [q, setQ] = useState(75);
    const [w, setW] = useState(100);
    const [h, setH] = useState(100);
    const [fit, setFit] = useState("contain");
    const [position, setPosition] = useState("center");
    const [fm, setFm] = useState("");
    const [flag, setFlag] = useState(false);

    function setInitialData() {
        setQ(editData[ind].q);
        setH(editData[ind].h);
        setPosition(editData[ind].position);
        setFit(editData[ind].fit);
        setW(editData[ind].w);
        setFm(editData[ind].fm);
        setFlag(true);

        // console.log(editData[ind]);
    }

    useEffect(() => {
        setInitialData();
        // console.log(dimensions);
        // console.log(images);
    }, [ind])

    function handleApply() {
        try {
            setEditdata((previous) => {
                return previous.map((data, key) => {
                    if (key === ind) {
                        return { w, h, q, fit, position, fm };
                    } else {
                        return data; // Return unchanged data for other elements
                    }
                });
            });

            let url = images[ind].src;
            if (q == 75)
                url = `${images[ind].src.match(/^(.*?)(?:&|$)/)[1]}${(w != 0) ? `&w=${w}` : ''}${(h != 0) ? `&h=${h}` : ''}${(fit!="" && w!=0 && h!=0) ? `&fit=${fit}` : '&fit=contain'}${(fit == "cover" && position != "") ? `&position=${position}` : ''}${(fm != "") ? `&fm=${fm}` : ''}`
            else
                url = `${images[ind].src.match(/^(.*?)(?:&|$)/)[1]}${(fm != "") ? `&fm=${fm}` : ''}${(true) ? `&q=${q}` : ''}`

            // console.log(`${process.env.NEXT_PUBLIC_CDN_URL}=${url}`);

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
                            {(flag) &&
                                <div className=" flex flex-col w-full px-5 md:px-10 gap-5 ">
                                    <SizeInput w={w} h={h} q={q} setW={setW} setH={setH} setQ={setQ}
                                        defaultH={dimensions[ind].height} defaultW={dimensions[ind].width} />
                                    <SelectFit fit={fit} setFit={setFit} position={position} setPosition={setPosition} fm={fm} setFm={setFm} />
                                </div>}
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