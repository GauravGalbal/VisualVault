'use client'


import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";
import Desktop1 from '@/assets/images/Desktop1.png'
import Desktop2 from '@/assets/images/Desktop2.png'

interface props {
    selectedTab: string,
    setSelectedTab: any
}


function DesktopTabsLayout({ selectedTab, setSelectedTab }: props) {

    return (
        <Tabs aria-label="Options"
            variant="underlined"
            radius="sm"
            className=" w-[80%] items-center justify-center text-white flex"
            classNames={{
                cursor: "w-full bg-[#22d3ee] ",
                tab: " h-[100%]"
            }}
            selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
            <Tab
                key={0}
                title={<Image src={Desktop1} alt="image" height={45} width={90} className="" />} />
            <Tab
                key={1}
                title={<Image src={Desktop2} alt="image" height={45} width={90} />} />
        </Tabs>
    )
}

export default DesktopTabsLayout