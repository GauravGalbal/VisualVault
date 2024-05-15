export default function Loading() {
    return (
        <>
            <div className=" flex flex-row md:mx-20 mx-5 my-20 justify-between items-center">
                <div className=" flex flex-col h-full w-[50%] md:w-[60%] ">
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                    <div className=" flex h-3 my-1 md:my-2 rounded-xl w-full bg-gray-700 animate-pulse " />
                </div>

                <div className=" flex py-16 md:py-28 w-[40%] md:w-[35%] bg-gray-700 animate-pulse rounded-lg" />
            </div>

            <div className=" flex flex-row md:mx-20 mx-5" style={{ justifyContent: "flex-end" }}>
                <div className=" justify-end items-center w-36 md:w-40 h-8 md:h-10 bg-gray-700 animate-pulse rounded-xl" />
            </div>
        </>
    )
}