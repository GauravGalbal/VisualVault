'use client'

import Link from "next/link";

export default function Home() {
    return (
        <div className="items-center justify-center flex min-h-screen flex-col bg-background">
            <text className=" text-5xl">WELCOME</text>

            <div className=" mt-10 flex">
                <Link href={'/UploadFiles'}>
                    click here...
                </Link>
            </div>
            
        </div>
    );
}
