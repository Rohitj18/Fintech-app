import React from "react";
import Navbar from "./Navbar";
import Cards from "./Crads";
import Filter from "./Filter";
import { filterData } from "./data";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import {toast} from "react-toastify";
import { useDispatch } from "react-redux";
import {createExpense,getDateExpenes} from '../../../services/operations/expenseApi'
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

const Main = ({mainDate,setMainDate}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth);
  // const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [modal, setModal] = useState(false);
  const [expensesArr, setExpensesArr] = useState([]);
  const [formData, setFormData] = useState({ amount: "", name: "" ,category:"",desc:""});

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    let timeStamp = mainDate;
    dispatch(createExpense(token,formData.category,formData.amount,formData.name,formData.desc,timeStamp));
    setExpensesArr([...expensesArr, formData]);
    setFormData({ amount: "", name: "",category:"",desc:"" });
    setModal(false);
  }

  async function fetchData() {
    setLoading(true);
    try {
      let date = mainDate;
      let currDateExpense = await dispatch(getDateExpenes(token,date));
      setExpensesArr([]);
      setExpensesArr(currDateExpense.data?.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [mainDate]);

  return (
    <div className=" flex flex-col bg-bgDark2 w-[100%] h-[100%] relative  ">
      <div className="flex flex-col bg-bgDark2 w-[100%] h-[100%] px-5">
        <div className="w-[100%] h-[15%] ">
          <Navbar />
        </div>

        <div className="bg-bgDark2 w-[100%] h-[90%]  ">
          <div className="w-[100%] h-[20%] ">
            <Filter
              filterData={filterData}
              category={category}
              setCategory={setCategory}
              setModal={setModal}
            />
          </div>

          <div className="  w-[100%] h-[80%] mx-auto flex flex-col flex-wrap justify-center amounts-center">
           
            {loading ? (
              <Spinner />
            ) : (
              // courses={courses} category={category}
              (expensesArr.length<= 0 ?(<div className="flex justify-center item-center text-black text-5xl">No Expenses Today</div>):(<Cards
                expensesArr={expensesArr}
                setExpensesArr={setExpensesArr}
              />))
              
            )}
          </div>
        </div>
      </div>

      <div
        className={` ${
          modal ? "visible" : "invisible"
        } absolute w-[100%] h-[100%] `}
      >
        <div className="w-[100%] h-[100%] flex justify-center amounts-center glass-effect ">
          <div className="w-[50%]   bg-white top-[50%] right-[50%] justify-center amounts-center rounded-xl box-shadow  mt-5 overflow-y-scroll">

            <button className="bg-red-500 text-2xl w-[4%] text-white flex justify-center items-center relative top-0 right-0 m-2" onClick={(modal) => setModal(!modal)}>
              X
            </button>

            <form onSubmit={submitHandler} className="flex flex-col gap-[4em] justify-center items-center p-[2em]" >


              <label className="w-[100%]">
                <p className="text-primary-blue text-3xl font-semibold">
                  Item<sup className="text-pink-200">*</sup>
                </p>

                <input
                  type="text"
                  placeholder="Enter item"
                  onChange={changeHandler}
                  name="name"
                  value={formData.name}
                  className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                  required
                />
              </label>

              <label className="w-[100%]">
                <p className="text-primary-blue text-3xl font-semibold">
                  Price<sup className="text-pink-200">*</sup>
                </p>
                <input
                  type="number"
                  placeholder="Enter price"
                  onChange={changeHandler}
                  name="amount"
                  value={formData.amount}
                  className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                  required
                />
              </label>

              <label className="w-[100%]">
                <p className="text-primary-blue text-3xl font-semibold">
                  Select Category<sup className="text-pink-200">*</sup>
                </p>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={changeHandler}
            className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
            required
          >
          <option value="Other">Other</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Health">Health</option>
          <option value="Grocery">Grocery</option>
          <option value="Electronics">Electronics</option>
          

          </select>
          </label>


          
          <label className="w-[100%]">
                <p className="text-primary-blue text-3xl font-semibold">
                  Description<sup className="text-pink-200">*</sup>
                </p>

                <input
                  type="text"
                  placeholder="Enter description"
                  onChange={changeHandler}
                  name="desc"
                  value={formData.desc}
                  className="outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl"
                  required
                />
          </label>

              <div className=" flex flex-row text-[2em] text-white bg-primary-blue w-[30%] h-[1.8em] rounded-xl font-semibold justify-center items-center">
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

export default Main;
