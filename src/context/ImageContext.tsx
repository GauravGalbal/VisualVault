'use client'

import { createContext, useState } from "react"

interface template{
    src: string,
    height: number,
    width: number
}


export const ImageContext = createContext({});

export default function ImageContextProvider({ children }: any) {
    const [images, setImages] = useState([]);

    return (
        <ImageContext.Provider value={{images, setImages}}>
            {children}
        </ImageContext.Provider>
    )
}