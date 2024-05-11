import React, { useState } from 'react'
import "./form.css"
import Stars from '../stars/Stars'
import { Link, useNavigate } from 'react-router-dom'

const Form = () => {
    const [rating, setRating] = useState (0)
    const  navigate=useNavigate();
  return (
    <div>
    <div className='form'>
   <form>
        <input placeholder='your name' className='input' type='text'></input>
       <input className='input' placeholder='subject' type='text'></input>
       <input placeholder='university' className='input' type='text'></input>
       <input type="date" className='input' ></input>
   </form>
    </div>
    <div>
        <h2 className='h2'>Your Rates</h2>
        <Stars rating={rating} setRating={setRating}/>
        <div className='btn'>
            <Link to={"/table"}>
        <button className='submit'>Submit</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Form