import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks/useBlogs"

export const Blogs =() =>{
    const {blogs,loading} = useBlogs();
    // console.log(blogs);
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
    // blogs.map(blog=>console.log(blog.id))
    return(
        <div>
            <Appbar/>
            {blogs.map(blog => <BlogCard title={blog.title} 
                        key={blog.id}
                        id={blog.id}
                        content={blog.content}
                        authorName={blog.author.name  || "Anonymous"}
                        publishedDate={blog.publishedDate || ""}
                        />)

            }
            
        </div>
    )
}