import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useUserBlogs } from "../hooks/useUserBlogs"

export const UserBlog = () =>{
    const {blogs,loading} =useUserBlogs();
    // console.log(blogs.posts)
    if(loading ){
        return <div>
            <Appbar/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    }
    return(
        <div>
            <Appbar/>
            <div className="w-full text-4xl my-4 p-2 text-gray-800 font-bold text-center">My blogs</div>
            {blogs.posts.map(blog => <BlogCard title={blog.title} 
                        key={blog.id}
                        id={blog.id}
                        content={blog.content}
                        withoutavatar={true}
                        publishedDate={blog.publishedDate || ""}
                        />)

            }
            
        </div>
    )
}