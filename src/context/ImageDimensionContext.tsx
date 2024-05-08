'use client'

import { EditData } from "@/utils/DefaultData";
import { createContext, useState } from "react";

interface FormData {
    fit: string,
    w: number,
    h: number,
    q: number,
    position: string,
}

type ContextType = {
    editData: FormData[];
    setEditdata: React.Dispatch<React.SetStateAction<FormData[]>>;
};

export const ImageDimensionContext = createContext<ContextType>({
    editData: EditData,
    setEditdata: () => { },
});

export default function ImageDimensionContextProvider({ children }: any) {
    const [editData, setEditdata] = useState<FormData[]>(EditData);

    return (
        <ImageDimensionContext.Provider value={{ editData, setEditdata }}>
            {children}
        </ImageDimensionContext.Provider>
    );
}
