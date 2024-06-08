// import { SignupInput } from "@singhh-aakashh/medium-common";
import axios from "axios";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate()

  async function sendRequest(){
    try {
        const response =await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,userInput)
        const res = response.data;
        // console.log(jwt)
        localStorage.setItem("token",res.token);
        if(!res.name){
          res.name="Anonymous"
        }
        localStorage.setItem("name",res.name)
        navigate("/blogs");
    } catch (error) {
        console.log(error)
       alert("error while sign in")
        
    }
  }
//   console.log(userInput);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-10">
      <h1 className="text-3xl font-bold">{type ==="signup"? "Create an account":"Login account"}</h1>
      <p>{type === "signup"? "Already have an account ?" :"Didn't have an account ? "}
       
        <Link className="text-gray-400 p-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
          {type==="signin"?"signup":"signin"}
        </Link>
      </p>
      <div className="items-start">
        {type ==="signup"? <LabelledInput
          label="Name"
          placeholder="Aakash Singh"
          onChange={(e) => {
            setUserInput({ ...userInput, name: e.target.value });
          }}
        /> : "" }
        <LabelledInput
          label="Email"
          placeholder="aakash@gmail.com"
          onChange={(e) => {
            setUserInput({ ...userInput, email: e.target.value });
          }}
        />
        <LabelledInput
          label="Password"
          placeholder="*********"
          onChange={(e) => {
            setUserInput({ ...userInput, password: e.target.value });
          }}
          type={"password"}
        />
        <button type="button" className="text-white w-80 m-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
        onClick={sendRequest}>{type === "signin"?"Sign In":"Sign Up"}</button>

      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="m-6 w-80">
      <label className="block mb-2 text-xl font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

const Alert =() =>{
  return(
    <div role="alert" className="alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>12 unread messages. Tap to see.</span>
</div>
  )
}