// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useDate } from "../hooks/useDate";

export const Write = () => {
   
    const navigate = useNavigate();
    const[blog,setBlog]=useState({
        title:"",
        content:"",
        publishedDate:useDate()
    })
     console.log(blog)
    const publishBlog = async () =>{
        try {
            // console.log(localStorage.getItem("token"))
            await axios.post(`${BACKEND_URL}/api/v1/blog/write`,blog,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
                
               })
                navigate("/blogs")
        } catch (error) {
            console.log(error)
            alert("something went wrong while publishing")
        }
       
    }
//   const toolbody = {
//     toolbar: [
//       ["bold", "italic", "underline", "strike"], // toggled buttons

//       [{ header: 1 }, { header: 2 }], // custom button values
//       [{ list: "ordered" }, { list: "bullet" }],
//       // text direction

//       [{ header: [1, 2, 3, 4, 5, 6, false] }],

//       // dropdown with defaults from theme
//       [{ font: [] }],
//       [{ align: [] }],

//     //   ["clean"], // remove formatting button
//     ],
//   };
//   console.log(title,content)
  return (
    <>
    <Appbar />
    <div className= " relative w-full md:w-2/3  mx-auto">
        <div className="text-3xl font-medium text-center">Write your blogs here.</div>
    <div className="my-4">
    <textarea id="message" rows={4} className="block text-2xl p-2.5 w-full  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            value={blog.title} onChange={(e)=>{setBlog({...blog,title:e.target.value})}} placeholder="Write your title here..."></textarea>
        </div>
        <div className="my-4">
            <textarea id="message" rows={15} className="block p-2.5 w-full text-xl bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            value={blog.content} onChange={(e)=>{setBlog({...blog,content:e.target.value})}} placeholder="Write your blog here..."></textarea>
        </div>
        {/* //@ts-ignore */}
      {/* <ReactQuill className="h-80 my-2" modules={toolbody} value={content} onChange={(e)=>{setContent(e.target.value)}} theme="snow" /> */}
      <button type="button" className="absolute right-0 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2" 
      onClick={publishBlog}>
Publish
</button>
    </div>
    </>
  );
};
