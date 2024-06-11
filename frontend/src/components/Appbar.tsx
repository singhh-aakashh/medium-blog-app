import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

// export const Appbar = () => {
//   let user = localStorage.getItem("name")
//   if(!user){
//     user="Anonymous"
//   }
//     const navigate = useNavigate()
//     const logout = () =>{
//         localStorage.removeItem("token")
//         localStorage.removeItem("name")
//         navigate("/signin")
//     }
//   return (
//     // <div>
//     //   <nav className="bg-white border-gray-200 ">
//     //     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//     //       <span className="self-center text-2xl font-semibold whitespace-nowrap">
//     //         Medium-blog
//     //       </span>
//     //       <div className="flex items-center space-x-6 rtl:space-x-reverse">
//     //         <Link to={"/write"}>
//     //           <button
//     //             type="button"
//     //             className=" bg-gray-50 hover:bg-gray-900 hover:text-gray-50  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 me-2 mb-2 "
//     //           >
//     //             Write
//     //           </button>
//     //         </Link>
//     //         <Avatar authorName={user} />

//     //         <button
//     //           type="button"
//     //           className=" bg-gray-50 hover:bg-gray-900 hover:text-gray-50  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 me-2 mb-2 "
//     //           onClick={logout}
//     //         >
//     //           logout
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </nav>
//     // </div>
//     <div className="navbar px-4 border-b  md:px-16 py-4 bg-gray-300">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-2xl">Medium Blog</a>
//   </div>
//   <div className="flex-none">
    
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//        <Avatar authorName={user}/>
//       </div>
//       <div>

//       </div>
//       <div className="block md:hidden">
//       <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><Link to={"/user/blogs"}>My blogs</Link></li>
//         <li><Link to={"/write"}>Write</Link></li>
//         <li><button onClick={logout}>Logout</button></li>
//       </ul>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };


export const Appbar = () => {
  let user = localStorage.getItem("name")
  if(!user){
    user="Anonymous"
  }
  const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        navigate("/signin")
    }
  return(
    <div className="navbar md:px-8 bg-gray-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="text-xl font-medium"><Link to={"/user/blogs"}>My blogs</Link></li>
        <li className="text-xl font-medium"><Link to={"/write"}>Write</Link></li>
        <li className="text-xl font-medium"><Link to={"/blogs"}>Blogs</Link></li>
        <li className="text-xl font-medium"><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
    <div className="flex">
      <img src="/icons8-blog.svg" alt="" />
    <div className="btn btn-ghost text-xl">Medium-blog</div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  gap-6 menu-horizontal px-1">
    <li className="text-xl  font-medium"><Link  to={"/user/blogs"}>My blogs</Link></li>
        <li className="text-xl font-medium"><Link to={"/write"}>Write</Link></li>
        <li className="text-xl font-medium"><button onClick={logout}>Logout</button></li>
    </ul>
  </div>
  <div className="navbar-end">
  <Avatar authorName={user}/>
    
  </div>
</div>
  )}
