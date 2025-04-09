import React from "react";

function keyValuePir ({ label , value}) {
    if (value === null || typeof value === "undefined"|| value === "") {
        value ="-";
    }

    return(
        <div className="grid grid-cols-[max-content_1fr] gap-x-3 items-baseline" >
            <dt className="text-sm font-medium text-gray-600 whitespace-nowrap" >{label}</dt>
            <dd className="text-sm text-gray-900 break-words">{value}</dd>
        </div>
        

    );
}
export default keyValuePir;