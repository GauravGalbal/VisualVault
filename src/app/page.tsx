'use client'

import Link from "next/link";
import Template from '@/assets/images/template.png'
import Image from "next/image";
import { Button } from "@nextui-org/react";


export default function Home() {
    return (
        <>
            <div className=" mx-10 mt-3 mb-5 md:mb-14">
                <div className=" text-center text-blue-500 text-2xl md:text-3xl items-center justify-center ">
                    Welcome to <span className=" font-bold text-amber-300 text-center text-5xl md:text-5xl tracking-wider ">VisualVault</span>
                </div>
            </div>

            <div className=" flex md:flex-row flex-col bg-background mx-10 md:mx-20 md:justify-evenly gap-5 justify-center items-center">

                <div className="md:hidden w-[75%] bg-white overflow-hidden mt-3">
                    <Image src={Template} alt="Template" />
                </div>

                <div className=" w-full md:w-[50%] gap-5 flex flex-col">
                    <p className=" text-md text-center md:text-justify md:text-xl tracking-wide">
                        <span className=" text-purple-500 font-bold ">VisualVault</span> is your gateway to immortalizing memories in stunning digital galleries! With our cutting-edge platform, crafting your personal gallery is a breeze.
                    </p>
                    <p className=" hidden md:block md:text-md md:text-justify md:text-xl md:tracking-wide">
                        From captivating landscapes to heartwarming family moments, effortlessly curate and showcase your cherished images. Start building your album today and unlock the power to preserve your most precious memories with just a click. Embrace the journey of a lifetime with VisualVault – where every click etches a story for eternity. Join us and embark on your visual odyssey now!
                    </p>
                </div>

                <div className="hidden md:block md:w-[35%] bg-gray-600 md:overflow-hidden">
                    <Image src={Template} alt="Template" />
                </div>
            </div>

            <Link href={"/UploadFiles"} className=" justify-center items-center md:justify-end flex mt-10 mx-20">
                <Button variant="shadow" size="lg" className=" bg-blue-900 shadow-black text-white font-bold tracking-wider border-white border">Click to Continue</Button>
            </Link>
        </>
    );
}
