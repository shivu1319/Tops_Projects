import React, {useContext} from 'react'
import { AppContext } from '../Appcontext'
import './Style.css'

const Main = () => {

    const { theme, toggleTheme } = useContext(AppContext);

  return (
   <div>



    {/* <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <i onClick={toggleTheme} class="fa-solid fa-sun"></i>
    </div> */}


    

  <div className="container" style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
  <i onClick={toggleTheme} class="fa-solid fa-sun"></i>
    <form action="#">
      <div className="title">Login</div>
      <div className="input-box underline">
        <input type="text" placeholder="Enter Your Email" required />
        <div className="underline" />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Enter Your Password" required />
        <div className="underline" />
      </div>
      <div className="input-box button">
        <input type="submit" name defaultValue="Continue" />
      </div>
    </form>
    <div className="option">or Connect With Social Media</div>
    <div className="twitter">
      <a href="#"><i className="fab fa-twitter" />Sign in With Twitter</a>
    </div>
    <div className="facebook">
      <a href="#"><i className="fab fa-facebook-f" />Sign in With Facebook</a>
    </div>
  </div>
</div>

  )
}

export default Main