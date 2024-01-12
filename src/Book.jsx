import React, { useEffect } from 'react';
import axios from 'axios';
// import { MdClose } from "react-icons/md"
import { useState } from 'react';
import myImage from "../src/Images/flight.png"

axios.defaults.baseURL = "http://localhost:8081/";

function Book() {
  // const [addSection, setAddSection] = useState(false)
   const [formData, setFormData]=useState({
    name: "",
    mobile: "",
    shownumber: "",
   })

   const handleOnChange = (e)=>{
    const {value,name} =e.target
    setFormData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
   }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data =await axios.post("/create",formData)
    console.log(data)
    if(data.success){
      
      setFormData({
        name: "",
        mobile: "",
        shownumber: "",
      });
    }
  }



  return (
    <>
      <div id='head' className="addContainer">
        <div className="row m-0 ">
          <div className="col-10">
            <h3>Hurry Up!! Book your tickets Now..</h3>
            <h1>Book Ticket</h1>
            <button className="btn btn-success" 
             style={{ margin: 'auto', fontfamily: "Georgia, 'Times New Roman', Times, serif"}}>Add</button>
            
          </div>
        </div>

        <div className="sub-container d-flex">
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name='name' onChange={handleOnChange}/>

            <label htmlFor="email">Mobile: </label>
            <input type="number" id="mobile" name='mobile' onChange={handleOnChange} />

            <label htmlFor="email">ShowNumber: </label>
            <input type="number" id="shownumber" name='shownumber' onChange={handleOnChange} />

            <br />
            <br />

            <button type="submit" className="btn">Book Now</button>
            <br />
            <div className='col-sm col-lg image'>
             <img src={myImage} className='img-fluid animated' alt="Flight" />
             </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Book;
