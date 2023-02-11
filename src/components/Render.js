import React from "react";
import object from "./object";
import { useState } from "react";
import "./Render.css";
import { useNavigate } from "react-router-dom";
const Render = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const handleChange = (e) => {

    setError("")
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const validateInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    // Perform input validation using regex
    // Example: only allow alphabets
    
    if (inputName === "firstName") {
      const nameRegex =  /^[A-Za-z]+$/;

      if (!nameRegex.test(inputValue)) {
        setError("Name value should contain only letters");
      }else{
        setError("")
      }
    }
    if (inputName === "password") {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(inputValue)) {
        setError(
          "Password must contain atleast one letter,one number and one special character"
        );
      }else{
        setError("")
      }
    }
    if (inputName ==="email"){
      const emailRegex = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/
      if(!emailRegex.test(inputValue)){
        setError(
          "Enter a Valid Email ID"
        );
      }else{
        setError("")
      }
    }
  };

  const onSubmitHandler = (e) => {
      e.preventDefault(); 
      if(values.firstName && values.email && values.password ){
        navigate("/submission") 
        console.log(values)

      }else{
        setError("Please Enter the Required Fields")
      }

    
  };

  console.log(values);
  return (
    <div className="main-form-container">
      <form onSubmit={onSubmitHandler}>
        <h1>Registration</h1>

        {object.formfields.map((data, index) => {
          switch (data.fieldtype) {
            case "label":
              return (
                <label
                  key={index}
                  className={data.attributes.class}
                  htmlFor={data.attributes.for}
                >
                  {data.attributes.labelText}
                </label>
              );
            case "input":
              return (
                <input
                  key={index}
                  type={data.attributes.type}
                  className={data.attributes.class}
                  id={data.attributes.id}
                  name={data.attributes.name}
                  placeholder={data.attributes.placeholder}
                  onChange={handleChange}
                  onBlur={validateInput}
                  required={data.attributes.required ? 1: 0}
                  autoComplete={data.attributes.auto_complete}
                />
              );
            case "button":
              return (
                <button
                  key={index}
                  type={data.attributes.type}
                  className={data.attributes.class}
                  id={data.attributes.type}
                  onClick={onSubmitHandler}
                >
                  {data.attributes.buttonText}
                </button>
              );

            default:
              return null;
          }
        })}
        {error && <p style={{color:"red"} }>{error}</p>}
      </form>
    </div>
  );
};

export default Render;
