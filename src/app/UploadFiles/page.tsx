'use client'


import { ImageContext } from "@/context/ImageContext";
import Link from "next/link";
import { ChangeEvent, useContext, useState } from "react";


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

        const promises = new Promise<void>((resolve) => {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = () => {
                    var image = new Image();
                    image.src = reader?.result?.toString() || '';
                    image.onload = () => {
                        previews.push({ src: image.src, width: image.width, height: image.height });
                        resolve();
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        Promise.all([promises]).then(() => {
            console.log(previews);
            setImages(previews);
            setImagePreviews(previews);
        })
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <input
                type="file"
                multiple
                max={5}
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