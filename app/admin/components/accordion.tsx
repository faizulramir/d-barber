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
                <div className="grid grid-cols-2 gap-4">
                    <div>{data.count}. Faizul ({data.phone})</div>
                    <div className={`text-end ${data.status == '0' ? 'text-red-700' : 'text-green-700'}`}>{data.status == '0' ? 'Pending' : 'Done'}</div>
                </div>
            </label>
            <div
                className= "overflow-hidden rounded h-0 peer-checked:h-[460px] peer-checked:overflow-scroll transition-[height] duration-1000 ease-in-out"
            >
                <ResultForm redirectBack={false}  submitAdmin={data.status == '0' ? true : false}/>
            </div>
        </div>
    );
};


export { Accordion };