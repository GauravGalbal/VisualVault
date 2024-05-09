'use client'


import { Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import ModalLayout from "./Modal";
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';


function MobileTemplate1({ images, dimensions, templateHeight, templateWidth }: any) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [ind, setInd] = useState(0);

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


    return (
        <>
            {(images.length != 0) && (dimensions.length != 0) &&
                <div
                    id="download-png"
                    className=" flex py-2 px-2 bg-[#000] flex-row mt-3 mb-3 justify-center self-center gap-2 w-[80%] h-56" >

                    <div className={` w-[33%] flex gap-2 flex-col`}>
                        <div className=" h-[40%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[0].src}`} alt="Image0"
                                onClick={() => { setInd(0); onOpen(); }}
                                className=" rounded-md " />
                        </div>
                        <div className=" h-[60%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[1].src}`} alt="Image1"
                                onClick={() => { setInd(1); onOpen(); }}
                                className=" rounded-md " />
                        </div>
                    </div>

                    <div className={` w-[30%] flex gap-2 flex-col`}>
                        <div className=" h-[70%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[2].src}`} alt="Image2"
                                onClick={() => { setInd(2); onOpen(); }}
                                className=" rounded-md " />
                        </div>
                        <div className=" h-[30%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[3].src}`} alt="Image3"
                                onClick={() => { setInd(3); onOpen(); }}
                                className=" rounded-md " />
                        </div>
                    </div>

                    <div className={` w-[30%] flex gap-2 flex-col`}>
                        <div className=" h-[50%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[4].src}`} alt="Image2"
                                onClick={() => { setInd(4); onOpen(); }}
                                className=" rounded-md " />
                        </div>

                        <div className=" h-[50%] items-center justify-center flex rounded-md bg-gray-700
                            overflow-hidden transition ease-in-out duration-300 hover:scale-95 ">
                            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}=${images[5].src}`} alt="Image2"
                                onClick={() => { setInd(5); onOpen(); }}
                                className=" rounded-md " />
                        </div>
                    </div>
                </div>}

            <ModalLayout isOpen={isOpen} onOpenChange={onOpenChange} ind={ind} dimensions={dimensions} />

            <Button variant="shadow" size="md"
                onPress={handleDownloadImage}
                isDisabled={images.length == 0}
                className=" bg-blue-900 shadow-black text-white font-bold tracking-wider border-white border justify-center items-center flex my-10 mx-20">
                Download
            </Button>
        </>
    )
}

export default MobileTemplate1