import React  from "react";
// import { useNavigate } from "react-router-dom";
// import ExpenseModal from "./Modal/ExpenseModal";


const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  let setModal = props.setModal;
  
//   let navigate = useNavigate();

  function filterHandler(title) {
    setCategory(title);
    
  }

  return (
    <div className="w-[100%] flex flex-wrap  space-x-6 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          className={`text-3xl px-2 py-1 rounded-md font-semibold box-shadow
            text-secondary-blue bg-white hover:bg-opacity-50 border-2 transition-all duration-300
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }
            `}
          key={data.id}
          onClick={() => filterHandler(data.title)}
         
        >
          {data.title}
        </button>
      ))}


      <button className="text-2xl px-2 py-1 rounded-md font-semibold box-shadow
            text-secondary-blue bg-white hover:bg-opacity-50 border-2 transition-all duration-300"
            onClick={()=>{setModal(true)}}
            >
        Add Expenses
      </button>
    </div>
  );
};

export default Filter;
