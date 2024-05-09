'use client'


import { ImageContext } from "@/context/ImageContext";
import { useContext, useEffect, useState } from "react";
import Dimensions from "@/utils/TemplateDimensions";
import Template1 from "@/components/CreateGallery/Template1";
import TabsLayout from "@/components/TabsLayout";


export default function CreateGallery() {
    const { images }: any = useContext(ImageContext)
    const [dimensions, setDimensions] = useState<Array<{ height: number, width: number }>>([])
    const [templateWidth, setTemplateWidth] = useState(0);
    const [templateHeight, setTemplateHeight] = useState(0);
    const [selectedTab, setSelectedTab] = useState<any>(0);

    useEffect(() => {
        console.log(images)
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        handleDimensions(templateWidth, templateHeight, selectedTab);
    }, [selectedTab, setSelectedTab])

    function handleResize() {
        const width = window.innerWidth * 0.8; // 20% less than screen width
        const height = window.innerHeight * 0.95; // 20% less than screen height
        setTemplateWidth(width);
        setTemplateHeight(height);
        // console.log(width, height)
        handleDimensions(width, height, selectedTab);

    }

    function handleDimensions(templateWidth: number, templateHeight: number, ind: number) {
        let tempDimensions = [];

        for (let i = 0; i < Dimensions[ind].length; i++) {
            const height = Math.floor(templateHeight * Dimensions[ind][i].height);
            const width = Math.floor(templateWidth * Dimensions[ind][i].width);
            console.log(height, width);
            tempDimensions.push({ height, width });
        }
        console.log(tempDimensions);
        setDimensions(tempDimensions);
    }

    return (
        <div className=" flex flex-col bg-background">
            <div className=" flex justify-center items-center my-2">
                <TabsLayout selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>

            <div className=" flex my-5 justify-center items-center flex-col ">
                {selectedTab == 0 && <Template1 images={images} dimensions={dimensions} templateHeight={templateHeight} templateWidth={templateWidth} />}
                {selectedTab == 1 && <div>world</div>}
            </div>
        </div>
    );
}