import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog"
import { Avatar } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { Skeleton } from "../components/Skeleton";

const Blog = () => {
    const {id} = useParams()
    console.log(id)
    if(!id){
      return <div>
        404 not found
      </div>
    }
    const {loading , blog} = useBlog(id);
    console.log(blog)
    if(loading){
        return <div>
          <Appbar/>
           <Skeleton/>
        </div>
    }
  return (
    <div>
      <Appbar/>
       <div className="flex w-full h-[80vh] justify-center md:mx-auto md:justify-center">
      <div className="w-full md:w-2/3 p-6  bg-white  ">
        <div className="flex mb-2 gap-4 font-medium items-center">
          <Avatar authorName="Aakash singh" />
          {/* <p>{blog.authorName? blog.authorName || "Anonynous"}</p> */}
          <p>Aakash singh</p>
          {/* <p className="text-gray-400">{blog.publishedDate}</p> */}
        </div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
          {blog.title}
        </h5>
        <p className="mb-3 font-normal text-gray-500 ">{blog.content} </p>
        <div className="mt-3">
          <p>{`${blog.content.length / 100} mins read`}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog