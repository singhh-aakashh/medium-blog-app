import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

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
  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Medium-blog
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to={"/write"}>
              <button
                type="button"
                className=" bg-gray-50 hover:bg-gray-900 hover:text-gray-50  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 me-2 mb-2 "
              >
                Write
              </button>
            </Link>
            <Avatar authorName={user} />

            <button
              type="button"
              className=" bg-gray-50 hover:bg-gray-900 hover:text-gray-50  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 me-2 mb-2 "
              onClick={logout}
            >
              logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
