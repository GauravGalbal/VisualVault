'use client'

import Link from "next/link";

export default function Home() {
    return (
        <div className="items-center justify-center flex mt-10 max-h-screen flex-col">
            <text className=" text-5xl">WELCOME</text>

            <div className=" mt-10 flex">
                <Link href={'/UploadFiles'}>
                    <text>click here...</text>
                </Link>
            </div>
            
        </div>
    );
}
