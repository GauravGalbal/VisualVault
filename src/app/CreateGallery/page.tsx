'use client'


import { ImageContext } from "@/context/ImageContext";
import { useContext, useEffect, useState } from "react";
import { DesktopDimensions, MobileDimensions } from "@/utils/TemplateDimensions";
import Template1 from "@/components/CreateGallery/Template1";
import DesktopTabsLayout from "@/components/DesktopTabsLayout";
import { Spinner } from "@nextui-org/react";
import MobileTemplate1 from "@/components/CreateGallery/MobileTemplate1";
import MobileTabsLayout from "@/components/MobileTabsLayout";
import Template2 from "@/components/CreateGallery/Template2";
import MobileTemplate2 from "@/components/CreateGallery/MobileTemplate2";


export default function CreateGallery() {
    const { images }: any = useContext(ImageContext)
    const [dimensions, setDimensions] = useState<Array<{ height: number, width: number }>>([])
    const [templateWidth, setTemplateWidth] = useState(0);
    const [templateHeight, setTemplateHeight] = useState(0);
    const [selectedTab, setSelectedTab] = useState<any>(0);
    const [isLoading, setIsloading] = useState(false);
    const [isMobile, setIsmobile] = useState(false);

    useEffect(() => {
        // setIsloading(true);
        handleResize();
        window.addEventListener('resize', handleResize);

        // setTimeout(() => {
        //     setIsloading(false);
        // }, 5000);

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
        if (width < 610) setIsmobile(true);
        else setIsmobile(false);

    }

    function handleDimensions(templateWidth: number, templateHeight: number, ind: number) {
        let tempDimensions = [];
        let Dimensions: any = []
        if (isMobile) Dimensions = MobileDimensions;
        else Dimensions = DesktopDimensions;

        for (let i = 0; i < Dimensions[ind].length; i++) {
            const height = Math.floor(templateHeight * Dimensions[ind][i].height);
            const width = Math.floor(templateWidth * Dimensions[ind][i].width);
            // console.log(height, width);
            tempDimensions.push({ height, width });
        }
        // console.log(tempDimensions);
        setDimensions(tempDimensions);
    }

    return (
        <div className=" flex flex-col bg-background">
            <div className=" flex justify-center items-center mb-2">
                {(isMobile) && (<MobileTabsLayout selectedTab={selectedTab} setSelectedTab={setSelectedTab} />)}
                {(!isMobile) && (<DesktopTabsLayout selectedTab={selectedTab} setSelectedTab={setSelectedTab} />)}
            </div>

            {
                (!isMobile) && (!isLoading) && (
                    <div className=" flex my-5 justify-center items-center flex-col ">
                        {selectedTab == 0 && <Template1 images={images} dimensions={dimensions} templateHeight={templateHeight} templateWidth={templateWidth} />}
                        {selectedTab == 1 && <Template2 images={images} dimensions={dimensions} templateHeight={templateHeight} templateWidth={templateWidth} />}
                    </div>
                )
            }

            {
                (isMobile) && (!isLoading) && (
                    <div className=" flex my-5 justify-center items-center flex-col ">
                        {selectedTab == 0 && <MobileTemplate1 images={images} dimensions={dimensions} templateHeight={templateHeight} templateWidth={templateWidth} />}
                        {selectedTab == 1 && <MobileTemplate2 images={images} dimensions={dimensions} templateHeight={templateHeight} templateWidth={templateWidth} />}
                    </div>
                )
            }

            {
                (isLoading) && (
                    <Spinner label="Loading..." color="warning" className=" mt-10 " />
                )
            }

        </div>
    );
}