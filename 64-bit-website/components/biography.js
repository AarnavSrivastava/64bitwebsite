import React from "react"

const Biography = (props) => {
    return (
    <div className="w-[30%] h-[300px] bg-gray-800 m-10">
        <div className="h-[100%] flex flex-row">
            <div className="flex flex-col">
                <img src={props.images} className="h-[60%] w-[100%]" alt={props.name} />
                        <div className="w-[100%] h-[30%] m-3 text-center items-center">
                            <h3 className="text-2xl mt-5">
                             {props.name}
                            </h3>
                        </div>
                </div>
            
            <div className="w-[50%] h-[90%] flex flex-row m-5 ml-10">
                <div>{props.children}</div>
            </div>
        </div>
        
        
    </div>
    )
}

export default Biography;