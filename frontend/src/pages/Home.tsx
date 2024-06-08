import { useNavigate } from "react-router-dom"

export const Home =() =>{
    const navigate =useNavigate()
    return(
        <>
        {/* <HomeAppbar/> */}
        <div className="hero min-h-screen" style={{backgroundImage: 'url(../../public/bgimg.avif)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-gray-900">Medium blog</h1>
      <p className="mb-5 text-3xl font-medium text-gray-800">"WRITE WHAT SHOULD NOT BE FORGOTTEN"</p>
      <button className="btn btn-active btn-neutral font-medium text-xl" onClick={()=>{navigate("/signup")}}>Sign Up</button>
    </div>
  </div>
</div>

        </>
    )
}

