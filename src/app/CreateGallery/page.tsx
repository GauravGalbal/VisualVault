'use client'


import { ImageContext } from "@/context/ImageContext";
import SortImages from "@/utils/sortImages";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";


export default function CreateGallery() {
    const { images }: any = useContext(ImageContext)
    const height = [60, 30, 100];
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

    async function netlify() {
        const res = await axios.get(`https://netlifygallerycdn.netlify.app/.netlify/images?url=${images[0].src}`);
        console.log(res);
    }

    return (
        <main className=" flex justify-center items-center ">
            { images.length && <div
                className=" flex h-5 self-center py-2 px-2
                bg-slate-300 mt-5 "
                style={{ width: templateWidth, height: templateHeight }}>

                <div className=" flex-row h-[100%] w-[100%] flex gap-2">
                    <div className=" h-[100%] w-[33%] flex flex-col gap-2">
                        <Image src={images[0].src} alt="Image1" width={10} height={10}
                            className={` w-[100%] h-[${height[0]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />

                        <Image src={images[1].src} alt="Image1" width={10} height={10}
                            className={` w-[100%] h-[${100 - height[0]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />
                    </div>

                    <div className=" h-[100%] w-[30%] flex flex-col gap-2">
                        <Image src={images[2].src} alt="Image1" width={10} height={10}
                            className={` w-[100%] h-[${height[1]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />

                        <Image src={images[3].src} alt="Image1" width={10} height={10}
                            className={` w-[100%] h-[${100 - height[1]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />
                    </div>

                    <div className=" h-[100%] w-[37%] flex flex-col ">
                        <Image src={images[4].src} alt="Image1" width={10} height={10}
                            className={` w-[100%] h-[${height[2]}%] bg-template overflow-hidden
                        transition ease-in-out duration-300 hover:scale-95 ${imagesLoaded ? 'animate-none' : 'animate-pulse'} `} />
                    </div>
                </div>

            </div>}
            <div onClick={() => {netlify()}}>Hello</div>
        </main>
    );
}