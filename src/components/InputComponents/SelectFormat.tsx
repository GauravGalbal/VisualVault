// 'use client'


// import { Button, Input, Select, SelectItem, useDisclosure } from "@nextui-org/react";



// function SelectFormat({  }: any) {

//     return (
//         <div className=" flex flex-col justify-evenly w-full gap-5">

//             <Select
//                 labelPlacement={"outside"}
//                 label="Format"
//                 className="max-w-full"
//                 color="secondary"
//                 classNames={{
//                     popoverContent: " bg-[#000] "
//                 }}
//                 defaultSelectedKeys={[`${fit}`]}
//                 onChange={(e) => { console.log(e.target.value); setFit(e.target.value); }}
//             >
//                 {["contain", "fill", "cover"].map((fit) => (
//                     <SelectItem key={fit} value={fit}>
//                         {fit}
//                     </SelectItem>
//                 ))}
//             </Select>

//         </div>
//     )
// }

// export default SelectFormat