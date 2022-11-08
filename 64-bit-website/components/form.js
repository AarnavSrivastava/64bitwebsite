import React, { useState, useRef } from "react";
import { sendContactForm } from "../firebase/cloudFirestore/Write.js";

export default function Form() {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const sendData = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            fname: e.target[0].value,
            lname: e.target[1].value,
            email: e.target[2].value,
            amt: e.target[3].value,
            charity: e.target[4].value,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            formRef.current.reset();
        } else {
            setMessage("Something went wrong! Please try again");
        }
    };

    return (
        <form ref={formRef} className="flex flex-col justify-center items-center gap-[7vw] md:gap-[5vw] py-[5vw]" id="donationForm" onSubmit={sendData}>
            <div className="flex flex-row items-center font-Inter font-bold lg:text-[1.5vw] text-xl px-[3vw]">
                **
                <h1 className="underline flex text-center px-[1vw] leading-relaxed tracking-normal">
                    If you are considering donating or already have donated to one of the charities below,
                    PLEASE fill out this form. It would mean a lot to the members of the 64 Bit Jazz Combo.
                </h1>
                **
            </div>
            <div className="flex flex-col md:flex-row gap-[7vw] md:gap-[1vw] px-[1vw] items-center">
                <div className="relative flex flex-col justify-center group">
                    <input 
                        className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black focus:border-black md:w-[25vw] w-[300px] focus:outline-none peer"
                        type="text" id="fname" name="fname" placeholder=" " required />
                    <label htmlFor="fname" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[17%] peer-focus:-translate-x-[17%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0">
                        First Name
                    </label>
                </div>
                <div className="flex flex-col justify-center group">
                    <input 
                        className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black md:w-[25vw] w-[300px] focus:outline-none peer"
                        type="text" id="fname" name="lname" placeholder=" " required />
                    <label htmlFor="lname" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[17%] peer-focus:-translate-x-[17%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0">
                        Last Name
                    </label>
                </div>
            </div>
            <div className="flex flex-col justify-center group">
                <input 
                    className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black md:w-[51vw] w-[300px] focus:outline-none peer"
                    type="email" id="email" name="email" placeholder=" " required />
                <label htmlFor="email" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[16%] peer-focus:-translate-x-[16%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0">
                    Email Address
                </label>
            </div>
            <div className="flex flex-col md:flex-row gap-[7vw] md:gap-[1vw] px-[1vw] items-center">
                <div className="flex flex-col justify-center group">
                    <input 
                        className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black md:w-[19vw] w-[300px] focus:outline-none peer"
                        type="number" id="money" name="money" placeholder=" " required />
                    <label htmlFor="money" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[15%] peer-focus:-translate-x-[15%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0">
                        Donated Amount
                    </label>
                    <label htmlFor="money" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC lg:-ml-[1%] -ml-[2%] lg:text-[2em] text-[1.25em] text-black duration-300 ease-in-out transition opacity-100 peer-focus:opacity-100 peer-placeholder-shown:opacity-0">
                        $
                    </label>
                </div>
                <div className="flex flex-col justify-center group">
                    <input 
                        className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black focus:border-black md:w-[31vw] w-[300px] focus:outline-none peer"
                        type="text" id="charity" name="charity" placeholder=" " required />
                    <label htmlFor="charity" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[15%] peer-focus:-translate-x-[15%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0">
                        Charity You Donated To
                    </label>
                </div>
            </div>
            <button type="submit" className="uppercase active:ring-4 bg-white ease-in-out transition w-[250px] border-2 border-black p-[1vw] font-Poppins font-bold text-black text-[1em] hover:scale-125 hover:bg-black hover:text-amber-300">
                submit
            </button>
        </form>
    )
}