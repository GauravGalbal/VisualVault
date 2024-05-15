'use client'


import Logo from '@/assets/images/logo.png'
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function RootHeader() {

    return (
        <div className=" flex flex-row justify-between md:mx-20 mx-10 my-5 items-center h-28">
            <div className=" md:min-w-24 md:max-w-24 min-w-16 max-w-16">
                <Image src={Logo} alt="Logo" />
            </div>

            <div className=' flex flex-row gap-4 md:gap-10 justify-end items-center'>
                <Link href={"/"} className=" hidden md:block">
                    <Button variant="bordered" size="lg"
                        className=" hover:bg-amber-400 text-white hover:border-black hover:text-blue-800 hover:font-extrabold">
                        Login
                    </Button>
                </Link>
                <Link href={"/"} className=" hidden md:block">
                    <Button variant="bordered" size="lg"
                        className=" hover:bg-amber-400 text-white hover:border-black hover:text-blue-800 hover:font-extrabold">
                        Home
                    </Button>
                </Link>

                <Link href={"/"} className=" md:hidden">
                    <Button variant="bordered" size="sm"
                        className=" hover:bg-amber-400 text-white hover:border-black hover:text-blue-800 hover:font-extrabold">
                        Login
                    </Button>
                </Link>
                <Link href={"/"} className=" md:hidden">
                    <Button variant="bordered" size="sm"
                        className=" hover:bg-amber-400 text-white hover:border-black hover:text-blue-800 hover:font-extrabold">
                        Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}