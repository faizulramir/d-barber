"use client"

import { useState } from "react";

const SimpleAccordion = (data:any) => {
    const [open, setOpen] = useState(false);
    function changeAccordian() {

    }
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
                className="w-full h-10 flex pl-2 items-center mb-4 bg-blue-100 hover:bg-blue-500 transition-colors duration-1000 ease-in-out"

                onClick={() => setOpen(!open)}
            >
                {data.count}. Faizul
            </label>
            <div
                className= "overflow-hidden h-0 bg-slate-300 peer-checked:h-[200px] peer-checked:overflow-scroll transition-[height] duration-1000 ease-in-out "
            >
                <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
                </p>
            </div>
        </div>
    );
};


export { SimpleAccordion };