'use client'


import { ImageContext } from "@/context/ImageContext";
import Link from "next/link";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import cloudinary from "@/utils/CloudinaryConfig";
import { Button, Input, Spinner } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";


interface template {
    src: string,
    height: number,
    width: number
}


export default function UploadFiles() {
    const [imagePreviews, setImagePreviews] = useState<Array<template>>([]);
    const { setImages }: any = useContext(ImageContext);
    const [isLoading, setIsloading] = useState(false);
    const [len, setLen] = useState(5);

    function handleFiles(e: ChangeEvent<HTMLInputElement>) {
        if((len-(imagePreviews.length)) < (e.target.files?.length || len+1)){
            toast.error(`You can upload a maximum of ${len} images`);
            setIsloading(false);
            return;
        }

        setIsloading(true)
        const files = e.target.files || [];
        const previews: Array<template> = [];
        let count = 0;

        const promises = new Promise<void>((resolve) => {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = () => {
                    var image = new Image();
                    image.src = reader?.result?.toString() || '';
                    image.onload = async () => {
                        const res: string = await uploadImage(image.src) || "";
                        // console.log("res", res);
                        previews.push({ src: res, width: image.width, height: image.height });
                        count++;
                        if (files.length == count) resolve();
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        Promise.all([promises]).then(() => {
            if (previews.length == files.length) {
                setImagePreviews((previous) => { const temp = [...previous, ...previews]; return temp; });
                setImages((previous:any) => { const temp = [...previous, ...previews]; return temp; });
                // console.log(previews);
                setIsloading(false);

                if((len-(previews.length + imagePreviews.length)) > 0){
                    toast(`Upload ${len-(previews.length + imagePreviews.length)} more images to proceed`)
                }
            }
        })
    };

    async function uploadImage(src: string) {
        try {
            const result = await cloudinary.uploader.upload(src, {
                upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
            });
            return result.secure_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    useEffect(() => {
        const width = window.innerWidth * 0.8;
        if(width < 610) setLen(6);
        else    setLen(5);
    }, [])

    return (
        <div className="flex items-center justify-center flex-col bg-background">

            <div className="flex items-center justify-center w-[80%] md:w-[50%]">
                <label className="flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer bg-gray-800 border-gray-500 hover:border-gray-600 hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center my-5">
                        <svg className="w-8 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className=" text-sm text-gray-400"><span className="font-semibold">Click to upload images</span></p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" multiple accept="image/*" onChange={(e) => { handleFiles(e) }} />
                </label>
            </div>

            {
                (isLoading) && (
                    <Spinner label="Loading..." color="warning" className=" mt-10 " />
                )
            }


            {
                (!isLoading) && (
                    <div className=" md:flex md:flex-wrap mt-4 gap-4 hidden ">
                        {imagePreviews.map((preview, index) => (
                            <img
                                key={index}
                                src={preview.src}
                                alt={`Preview ${index}`}
                                className=" md:max-h-40 md:max-w-72 self-center md:self-auto"
                            />
                        ))}
                    </div>
                )
            }

            {
                (!isLoading) && (
                    <div className=" flex flex-col mt-4 gap-4 items-center justify-center md:hidden">
                        {imagePreviews.map((preview, index) => (
                            <img
                                key={index}
                                src={preview.src}
                                alt={`Preview ${index}`}
                                className=" max-h-[10%] max-w-[65%]"
                            />
                        ))}
                    </div>
                )
            }


            <Button variant="shadow" size="lg"
                isDisabled={isLoading || (imagePreviews.length!=len)}
                className=" bg-blue-900 shadow-black text-white font-bold tracking-wider border-white border justify-center items-center flex my-10 mx-20">
                <Link href={"/CreateGallery"} className={` `}>
                    Click to Continue
                </Link>
            </Button>

            <Toaster />

        </div >
    );
}