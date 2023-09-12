import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import profilephoto from "../assets/profilephoto.jpg"
import { AiOutlineArrowLeft } from "react-icons/ai";

const Profile = () => {

    let iconStyles = { color: "white", fontSize: '2.3rem' };
  const [formData, setFormData] = useState({
    firstName: "", lastName:"",address:"",city:"",province:"",code:"",country:"",adhaar:"",pan:"",
  });

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData((prevData) => ({
      ...prevData,
    //   [event.target.name]: event.target.value,
    [name]: type ==="checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Printing the formData ");
    console.log(formData);
  }


    const [image,setImage] = useState(profilephoto);

    function convertToBase64(e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
            setImage(reader.result);
        };
        reader.onerror = error =>{
            return;
        }
    }
  

  return (
    <div className=" w-[100vw]  bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20% ">
      <div className="  w-[100vw] h-[4.5em]   pt-4 flex flex-row justify-between items-center ">
        <div className="w-[5%] h-[100%] bg-primary-blue rounded-xl flex flex-col justify-center items-center ml-[2em] ">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <AiOutlineArrowLeft  style={iconStyles} />
          </NavLink>
        </div>

        <div className="text-white text-4xl font-semibold ">
           <p>Fill your Details</p>
        </div>

        <div className='nav-link text-white text-3xl mr-[4em]'>
       <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/dashboard" >Skip for later</NavLink>
       </div>

      </div>

      <div className="flex flex-col justify-center items-center w-[100vw] h-[94%] ">
    <div className="flex flex-col w-[90%] h-[100%]  items-center  mb-10">
          <div className="flex flex-row justify-between items-center w-[50%] h-[16%] mt-6 bg-[#FFFFFF] box-shadow">
            <div className="flex flex-row justify-center items-center">
                <div className="w-[8rem] flex justify-center items-center gap-2 ">
                <img src={image} alt="" className="className='w-[100%] h-[2em]'"/>
                </div>
             
              <div className="text-2xl font-semibold">Upload a profile photo</div>
            </div>

            <div className=" flex flex-row text-[2em] text-white  w-[7em] h-[2em] rounded-lg justify-center item-center  mr-3">
              {/* <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 "> */}
                <input
                 accept="image/*"
                 type="file" 
                 onChange={convertToBase64}
                 className="outline-none w-[100%] h-[100%] "

                 
/>

              {/* </button> */}
            </div>
          </div>

          <div  className=" bg-[#FFFFFF] box-shadow flex flex-col w-[50%] mt-4 justify-center items-start p-10">
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
            name="mode"
            value="Male"
            id="Male"
            checked={formData.mode === "Male"}
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
            name="mode"
            value="Female"
            id="Female"
            checked={formData.mode === "Female"}
          />
          </label>

          <label className="flex flex-row justify-center items-center gap-5" >
          <p className="text-primary-blue text-3xl font-semibold">
                 Other
                </p>
            <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="other"
            id="other"
            checked={formData.mode === "other"}
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
                  value={formData.province}
                  onChange={changeHandler}
                  placeholder="Enter province"
                  name="province"
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
                  value={formData.code}
                  onChange={changeHandler}
                  placeholder="Enter code"
                  name="code"
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
                  value={formData.adhaar}
                  onChange={changeHandler}
                  placeholder="Enter adhaar"
                  name="adhaar"
                  className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                />
              </label>

              <label className="w-[100%]">
                <p className="text-primary-blue text-3xl font-semibold">
                  Pan Card<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="pan"
                  value={formData.pan}
                  onChange={changeHandler}
                  placeholder="Enter pan"
                  name="pan"
                  className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                />
              </label>
              </div>

                
              
              

              <div className="mt-[2em]  flex flex-row text-[2em] text-white bg-primary-blue w-[100%] h-[2em] rounded-xl font-semibold ">
                <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
                  <p>Submit</p>
                </button>
              </div>

   
            </form>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default Profile;
