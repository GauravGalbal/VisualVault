'use client'


import { ImageContext } from "@/context/ImageContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";


export default function CreateGallery() {
    const { images }: any = useContext(ImageContext)
    const height = [0.6, 30, 100];
    const [templateWidth, setTemplateWidth] = useState(0);
    const [templateHeight, setTemplateHeight] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(true);

    useEffect(() => {
        console.log(images)
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    function handleResize() {
        const width = window.innerWidth * 0.8; // 20% less than screen width
        const height = window.innerHeight * 0.95; // 20% less than screen height
        setTemplateWidth(width);
        setTemplateHeight(height);
        console.log(width, height);
    }

    return (
        <main className=" flex justify-center items-center ">
            {images.length && <div
                className=" flex h-5 self-center py-2 px-2
                bg-slate-300 mt-5 "
                style={{ width: templateWidth, height: templateHeight }}>

                <div className=" flex-row h-[100%] w-[100%] flex gap-2">
                    <div className=" h-[100%] w-[33%] flex flex-col gap-2">
                        <img src={`https://netlifygallerycdn.netlify.app/.netlify/images?url=${images[0].src}&h=${500}`} alt="Image1"
                            className={` w-[100%] h-[${height[0]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />

                        <img src={`https://netlifygallerycdn.netlify.app/.netlify/images?url=${images[1].src}&h=${500}`} alt="Image1"
                            className={` w-[100%] h-[${100 - height[0]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />
                    </div>

                    <div className=" h-[100%] w-[30%] flex flex-col gap-2">
                        <img src={`https://netlifygallerycdn.netlify.app/.netlify/images?url=${images[2].src}&h=${500}`} alt="Image1"
                            className={` w-[100%] h-[${height[1]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />

                        <img src={`https://netlifygallerycdn.netlify.app/.netlify/images?url=${images[3].src}&h=${500}`} alt="Image1"
                            className={` w-[100%] h-[${100 - height[1]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />
                    </div>

                    <div className=" h-[100%] w-[37%] flex flex-col ">
                        <img src={`https://netlifygallerycdn.netlify.app/.netlify/images?url=${images[4].src}&h=${500}`} alt="Image1"
                            className={` w-[100%] h-[${height[2]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />
                    </div>
                </div>

            </div>
            }
        </main>
    );
}