
import { useState } from 'react';

function ExpenseModal() {


  const [formData, setFormData] = useState(  {item: "", 
  price: "" } );

  // console.log(formData)

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
 
    console.log("Finally printing the entireform ka data ........")
    console.log(formData)
  }

  return (
    <div className="ExpenseModal">
      <form onSubmit={submitHandler}>
      
        <input
          type="text"
          placeholder='Enter item'
          onChange={changeHandler}  
          name="item"
          value={formData.item}
        />

        <input
          type="number"
          placeholder='Price'
          onChange={changeHandler} 
          name="price" 
          value={formData.price}
        />

  
         <button>Submit</button>

      </form>
    </div>
  );
}

export default ExpenseModal;
