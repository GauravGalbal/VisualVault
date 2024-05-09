'use client'


import { ImageContext } from "@/context/ImageContext";
import Link from "next/link";
import { ChangeEvent, useContext, useState } from "react";
import cloudinary from "@/utils/CloudinaryConfig";


interface template {
    src: string,
    height: number,
    width: number
}


export default function UploadFiles() {
    const [imagePreviews, setImagePreviews] = useState<Array<template>>([]);
    const { setImages }: any = useContext(ImageContext);

    function handleFiles(e: ChangeEvent<HTMLInputElement>) {
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
                        console.log("res", res);
                        previews.push({ src: res, width: image.width, height: image.height });
                        count++;
                        if(files.length == count)   resolve();
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        Promise.all([promises]).then(() => {
            if (previews.length == files.length) {
                setImagePreviews(previews);
                setImages(previews);
                console.log(previews);
            }
        })
    }

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

    return (
        <div className="flex items-center justify-center flex-col bg-background">
            <input
                type="file"
                multiple
                max={5}
                accept="image/*"
                onChange={(e) => handleFiles(e)}
            />
            <div className="flex flex-wrap mt-4 gap-4">
                {imagePreviews.map((preview, index) => (
                    <img
                        key={index}
                        src={preview.src}
                        alt={`Preview ${index}`}
                        className="max-h-40 max-w-40"
                    />
                ))}
            </div>

            <Link href={'/CreateGallery'} >
                <button>next</button>
            </Link>
        </div>
    );
}