import { useState } from 'react'
import './App.css'
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="container">
      <div className=" flex justify-center">
        <img src={img1} alt="" classname=" mx-auto"/>
      </div>
      <span className="flex justify-center text-2xl font bold">Free Follower's Offer ...</span>
      <div className="w-2/3 md:2/4">
        <img src={img2} alt="" className="w-100 mx-auto" />
      </div>
      <div className="">
        {/* <span className=""> */}
        <input type="text" placeholder='Enter Your Username' className="mx-auto flex p-2 rounded-md custom-placeholder placeholder:font-bold" />
        <br />
        <button type="submit" className="px-4 py-2 mb-2 flex justify-center items-center mx-auto bg-blue-300">SUBMIT</button>
        {/* </span> */}
        <p className="flex justify-center text-2xl font-bold ">How to avail this offer 🤔</p>
        <ul className=" text-xxl flex flex-col items-center">
          <li className="">Enter your Username and submit.</li>
          <li className="">You will be redirected to merchant page.</li>
          <li className="">Register and done.</li>
        </ul>
        <div className="flex flex-col items-center">
          <span className="block text-xl">✌️✌️Congratulation✌️✌️</span>
          <span className="block">😍😍😍</span>
          <span className="">You will receive your followers</span>
        </div>
      </div>
    </section>
  )
}

export default App
