'use client'


import { Button, useDisclosure } from "@nextui-org/react";
import { useContext, useState } from "react";
import ModalLayout from "./Modal";
import { ImageContext } from "@/context/ImageContext";
import { ImageDimensionContext } from "@/context/ImageDimensionContext";
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';


function Template1({ images, dimensions, templateHeight, templateWidth }: any) {
    const { setImages }: any = useContext(ImageContext);
    const { setEditdata } = useContext(ImageDimensionContext)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [ind, setInd] = useState(0);
    const [startInd, setStartind] = useState(-1);

    async function handleDownloadImage() {
        const element: any = document.getElementById('download-png');
        const canvas = await html2canvas(element, {
            allowTaint: true,
            useCORS: true,
        });
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = data;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDragStart = (index: number) => {
        // console.log('drag start', index);
        setStartind(index);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        event.preventDefault(); // Prevent default to allow drop
        // console.log('drag over', index);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        event.preventDefault(); // Prevent default drop behavior
        // console.log('drag end', index);
        if (startInd != index) {
            setImages((previousImages: any) => {
                const newImages = [...previousImages];
                const temp = newImages[startInd];
                newImages[startInd] = newImages[index];
                newImages[index] = temp;
                return newImages;
            });

            setEditdata((previousData: any) => {
                const newData = [...previousData];
                const temp = newData[startInd];
                newData[startInd] = newData[index];
                newData[index] = temp;
                return newData;
            });
        }

    };


    return (
        <>
            {(images.length != 0) && (dimensions.length != 0) &&
                <div
                    id="download-png"
                    className=" flex py-2 px-2 bg-[#000] flex-row mt-3 mb-3 self-center gap-2 justify-evenly"
                    style={{ width: templateWidth, height: templateHeight }}>

                    <div className={` w-[33%] flex gap-2 flex-col`}>
                        <div className=" h-[40%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[0].src}`} alt="Image0"
                                onClick={() => { setInd(0); onOpen(); }}
                                className=" rounded-md "
                                draggable
                                onDragStart={() => { handleDragStart(0) }}
                                onDragOver={(e) => { handleDragOver(e, 0) }}
                                onDrop={(e) => { handleDrop(e, 0) }} />
                        </div>
                        <div className=" h-[60%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[1].src}`} alt="Image1"
                                onClick={() => { setInd(1); onOpen(); }}
                                className=" rounded-md "
                                draggable
                                onDragStart={() => { handleDragStart(1) }}
                                onDragOver={(e) => { handleDragOver(e, 1) }}
                                onDrop={(e) => { handleDrop(e, 1) }} />
                        </div>
                    </div>

                    <div className={` w-[30%] flex gap-2 flex-col`}>
                        <div className=" h-[70%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[2].src}`} alt="Image2"
                                onClick={() => { setInd(2); onOpen(); }}
                                className=" rounded-md "
                                draggable
                                onDragStart={() => { handleDragStart(2) }}
                                onDragOver={(e) => { handleDragOver(e, 2) }}
                                onDrop={(e) => { handleDrop(e, 2) }} />
                        </div>
                        <div className=" h-[30%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[3].src}`} alt="Image3"
                                onClick={() => { setInd(3); onOpen(); }}
                                className=" rounded-md "
                                draggable
                                onDragStart={() => { handleDragStart(3) }}
                                onDragOver={(e) => { handleDragOver(e, 3) }}
                                onDrop={(e) => { handleDrop(e, 3) }} />
                        </div>
                    </div>

                    <div className={` w-[30%] flex gap-2 flex-col`}>
                        <div className=" h-[100%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[4].src}`} alt="Image2"
                                onClick={() => { setInd(4); onOpen(); }}
                                className=" rounded-md "
                                draggable
                                onDragStart={() => { handleDragStart(4) }}
                                onDragOver={(e) => { handleDragOver(e, 4) }}
                                onDrop={(e) => { handleDrop(e, 4) }} />
                        </div>
                    </div>
                </div>}

            <ModalLayout isOpen={isOpen} onOpenChange={onOpenChange} ind={ind} dimensions={dimensions} />

            <Button variant="shadow" size="lg"
                onPress={handleDownloadImage}
                isDisabled={images.length == 0}
                className=" bg-blue-900 shadow-black text-white font-bold tracking-wider border-white border self-end justify-center items-center flex my-10 mx-20">
                Download
            </Button>
        </>
    )
}

export default Template1