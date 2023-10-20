"use client"

import { useState } from "react";
import { ResultForm } from "../../result/form";

const Accordion = (data:any) => {
    const [open, setOpen] = useState(false);
    
    function changeAccordian() {}

    return (
        <div className="w-full">
            <input
                id="expandCollapse"
                onChange={changeAccordian}
                checked={open}
                type="checkbox"
                className="peer sr-only"
            />
            <label
                htmlFor="expandCollapse"
                className="w-full rounded h-10 flex pl-2 items-center mb-4 bg-blue-100 hover:bg-blue-500 transition-colors duration-1000 ease-in-out"

                onClick={() => setOpen(!open)}
            >
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3">{data.count}. {data.formData.name}</div>
                </div>
            </label>
            <div
                className= "overflow-hidden rounded h-0 peer-checked:h-[460px] peer-checked:overflow-scroll transition-[height] duration-1000 ease-in-out"
            >
                <ResultForm redirectBack={false} submitAdmin={data.formData.status == '0' ? true : false} formData={data.formData}/>
            </div>
        </div>
    );
};


export { Accordion };