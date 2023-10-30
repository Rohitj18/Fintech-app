import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profilephoto from "../../assets/profilephoto.jpg"
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createAdditonalDetails } from "../../services/operations/authApi"

const MyProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    // let iconStyles = { color: "white", fontSize: '2.3rem' };
    const [formData, setFormData] = useState({
        //firstName,lastName,gender,aadharnumber,pannumber,dob,city,zipcode,state,address,annualincome,personalexpense,phoneno,country,image
        firstName: "", lastName: "", gender: "", aadharnumber: "", pannumber: "", dob: "", city: "", zipcode: "", state: "", address: "", annualincome: "", personalexpense: "", phoneno: "", country: "", image: ""
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
        if (formData.image === "") {
            formData.image = `https://api.dicebear.com/5.x/initials/svg?seed=${formData.firstName}%20${formData.lastName}`
        }
        dispatch(createAdditonalDetails(token, formData, navigate));
    }


    const [image, setImage] = useState(profilephoto);

    function convertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
            setFormData((prevData) => ({
                ...prevData,
                image: image
            }));
        };
        reader.onerror = error => {
            return;
        }
    }

    return (
       
            <div className="flex flex-col w-[100%] h-[100%]  items-center  mb-10">
                <div className="flex flex-row justify-between items-center w-[90%] h-[16%] mt-6 bg-[#FFFFFF] box-shadow">
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[12rem] flex justify-center items-center gap-2 ">
                            <img src={image} alt="" className="className='w-[100%] h-[2em]'" />
                        </div>

                        <div className="text-2xl font-semibold">Upload a profile photo</div>
                    </div>

                    <div className=" flex flex-row text-[2em] text-white  w-[7em] h-[2em] rounded-lg justify-center item-center  mr-3">
                        {/* <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 "> */}
                        <input
                            accept="image/*"
                            type="file"
                            name="file"
                            onChange={convertToBase64}
                            className="outline-none w-[100%] h-[100%] "
                        />

                        {/* </button> */}
                    </div>
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
                                    First Name<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="text"
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    placeholder="Enter firstname"
                                    name="firstName"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Last Name<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="text"
                                    value={formData.lastName}
                                    onChange={changeHandler}
                                    placeholder="Enter lastname"
                                    name="lastName"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>

                        <div className="flex flex-row gap-10 w-[100%] mt-10">

                            <fieldset>
                                <legend className="text-primary-blue text-3xl font-semibold">Gender <sup className="text-pink-200">*</sup> </legend>
                                <div className="flex flex-row gap-10 w-[100%] mt-3 ml-5">

                                    <label className="flex flex-row justify-center items-center gap-5" >
                                        <p className="text-primary-blue text-3xl font-semibold">
                                            Male
                                        </p>
                                        <input
                                            type="radio"
                                            onChange={changeHandler}
                                            name="gender"
                                            value="Male"
                                            id="Male"
                                            checked={formData.gender === "Male"}
                                            className="border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                        />
                                    </label>


                                    <label className="flex flex-row justify-center items-center gap-5" >
                                        <p className="text-primary-blue text-3xl font-semibold">
                                            Female
                                        </p>
                                        <input
                                            type="radio"
                                            onChange={changeHandler}
                                            name="gender"
                                            value="Female"
                                            id="Female"
                                            checked={formData.gender === "Female"}
                                        />
                                    </label>

                                    <label className="flex flex-row justify-center items-center gap-5" >
                                        <p className="text-primary-blue text-3xl font-semibold">
                                            Other
                                        </p>
                                        <input
                                            type="radio"
                                            onChange={changeHandler}
                                            name="gender"
                                            value="other"
                                            id="other"
                                            checked={formData.gender === "other"}
                                            className="border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                        />
                                    </label>

                                </div>





                            </fieldset>

                        </div>

                        <label className="w-[100%] mt-[2em]">
                            <p className="text-primary-blue text-3xl font-semibold">
                                Address<sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                type="textarea"
                                value={formData.address}
                                onChange={changeHandler}
                                placeholder="Enter address"
                                name="address"
                                className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                            />
                        </label>


                        <div className="flex flex-row gap-10 w-[100%] mt-[2em]">
                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    City<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="text"
                                    value={formData.city}
                                    onChange={changeHandler}
                                    placeholder="Enter city"
                                    name="city"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%] ">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    State/Province<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="text"
                                    value={formData.state}
                                    onChange={changeHandler}
                                    placeholder="Enter province"
                                    name="state"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>


                        <div className="flex flex-row gap-10 w-[100%] mt-[2em]">
                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Zip Code<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="number"
                                    value={formData.zipcode}
                                    onChange={changeHandler}
                                    placeholder="Enter code"
                                    name="zipcode"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Country<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="text"
                                    value={formData.country}
                                    onChange={changeHandler}
                                    placeholder="Enter country"
                                    name="country"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>


                        <div className="flex flex-row gap-10 w-[100%] mt-[2em]">
                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Adhaar Card<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="number"
                                    value={formData.aadharnumber}
                                    onChange={changeHandler}
                                    placeholder="Enter adhaar"
                                    name="aadharnumber"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Pan Card<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="number"
                                    value={formData.pannumber}
                                    onChange={changeHandler}
                                    placeholder="Enter pan"
                                    name="pannumber"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>

                        {/*  */}

                        <div className="flex flex-row gap-10 w-[100%] mt-[2em]">
                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Annual Income<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="number"
                                    value={formData.annualincome}
                                    onChange={changeHandler}
                                    placeholder="Enter amount"
                                    name="annualincome"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Personal Expense<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="number"
                                    value={formData.personalexpense}
                                    onChange={changeHandler}
                                    placeholder="Enter amount"
                                    name="personalexpense"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>



                        <div className="flex flex-row gap-10 w-[100%] mt-[2em]">
                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    DOB<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="date"
                                    value={formData.dob}
                                    onChange={changeHandler}
                                    name="dob"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>

                            <label className="w-[100%]">
                                <p className="text-primary-blue text-3xl font-semibold">
                                    Contact Number<sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type="number"
                                    value={formData.phoneno}
                                    onChange={changeHandler}
                                    placeholder="Enter contact number"
                                    name="phoneno"
                                    className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                                />
                            </label>
                        </div>


 

                        {/*  */}

                        <div className="mt-[2em]  flex flex-row text-[2em] text-white bg-primary-blue w-[100%] h-[2em] rounded-xl font-semibold ">
                            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
                                <p>Submit</p>
                            </button>
                        </div>


                    </form>
                </div>
            </div>
       

    );
};

export default MyProfile;
