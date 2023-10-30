import React from 'react'
import { useState } from 'react';
// import {  useSelector } from 'react-redux';


const Contact = () => {
    
    // const { token } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        
        email:"", Name: "", query:""
    });

    function changeHandler(event) {
        const { name, value, checked, type } = event.target
        setFormData((prevData) => ({
            ...prevData,
            //   [event.target.name]: event.target.value,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
    
    }



    

    return (
       
            <div className="flex flex-col w-[100%] h-[100%]  items-center  mb-10 gap-10 mt-10">
                <div className='text-5xl'>
                    <p>Have Query ? Contact Us</p>
                </div>
                
                <div className=" bg-[#FFFFFF] box-shadow flex flex-col w-[90%] mt-4 justify-center items-start p-10">
                    <p className="text-3xl font-semibold">Change user information here</p>

                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col w-[100%] gap-y-4 mt-6 items-start justify-center "
                    >


                        <div className="flex flex-row gap-10 w-[100%] mt-3">
                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Name<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="text"
                                    value={formData.Name}
                                    onChange={changeHandler}
                                    placeholder="Enter Name"
                                    name="Name"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Email<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={changeHandler}
                                    placeholder="Enter lastname"
                                    name="email"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>


                        <label className="w-[100%] mt-[2em]">
                            <p className="text-primary-blue text-3xl font-semibold">
                                Query<sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                type="textarea"
                                value={formData.query}
                                onChange={changeHandler}
                                placeholder="Enter address"
                                name="query"
                                className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                            />
                        </label>



                        <div className="mt-[2em] mx-auto flex flex-row text-[2em] text-white bg-primary-blue w-[50%] h-[2em] rounded-xl font-semibold ">
                            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
                                <p>Submit</p>
                            </button>
                        </div>


                    </form>
                </div>
            </div>
       

    );
}

export default Contact
