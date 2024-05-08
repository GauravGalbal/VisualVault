'use client'


import { Tabs, Tab } from "@nextui-org/tabs";

interface props {
    selectedTab: string,
    setSelectedTab: any
}


function TabsLayout({ selectedTab, setSelectedTab }: props) {

    return (
        <Tabs aria-label="Options"
            color="default"
            variant="light"
            size="lg"
            radius="sm"
            selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
            <Tab
                key={0}
                title="Template 1" />
            <Tab
                key={1}
                title="Template 2" />
        </Tabs>
    )
}

export default TabsLayout