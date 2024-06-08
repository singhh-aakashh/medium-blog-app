import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

const Signin = () => {
  return (
    <div className="grid md:grid-cols-2">
        <div>
          <Auth type="signin"/>
        </div>
        <div className="hidden md:block">
         <Quote/>
        </div>
         </div>
  )
}

export {Signin}