import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export const useBlog = (blog_id:string) =>{
    const[loading,setLoading] = useState(true);
    const[blog,setBlog]= useState({})
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/get/${blog_id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(res =>{
            setBlog(res.data.blog)
            setLoading(false)
        } )
        console.log(blog)
    },[blog_id])

    return {loading,blog}
}