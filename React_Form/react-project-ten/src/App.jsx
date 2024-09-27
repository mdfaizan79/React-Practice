import { useState } from 'react'
import { useForm } from "react-hook-form"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();
  async function onSubmit(data){
    //API call ko simulate krne k liye
    //Lekin ye jitni baar submit karege ye run hote rahega 
    //but hamlog ko ek baar chahate hai ek baar submit ho raha hai toh dubara sumbit render na ho
    await new Promise((resolve) =>setTimeout(resolve,5000));
    console.log("Summiting the form ",data);
  }

  // function onSubmit(data){
  //   console.log("Submitting Form",data)
  // }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='container'>
          <label >
           First Name :
          </label>
          {/* required jab laga hai toh uss kr fill krna jaruri hai */}
          <input  {...register('firstName', {
              required: "First name is required",
              minLength: { value: 3, message: 'Min length 3' },
              maxLength: { value: 6, message: 'Max length 6' },
            })} />
           {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
<br />
        <div className='container'>
          <label >
           Middle Name : 
          </label>
          <input  {...register("middlename")} />  
          
        </div>
<br />
<div className='container'>
  <label>
    Last Name:
  </label>
  <input
    {...register('lastName', {
      pattern: {
        value: /^[A-Za-z]+$/i, // Accepts only alphabets (case-insensitive)
        message: 'Last Name is not as per the rules',
      },
    })}
  />
  {errors.lastName && <p>{errors.lastName.message}</p>}
</div>
        <input type="submit"   
        value={isSubmitting ? "Submitting..." : "Submit"}  />
      </form>
    </>
  )
}

export default App
