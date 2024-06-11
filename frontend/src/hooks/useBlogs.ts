import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const[blogs,setBlogs]=useState<any[]>([]);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then(res => {
        setBlogs(res.data.blogs)
        setLoading(false);
    })
  },[])
return{
    loading,
    blogs
}
}