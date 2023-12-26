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
      <span className="flex justify-center text-2xl font bold">🫰Free Follower's Offer🫰</span>
      <div className="flex justify-center mx-auto w-[100%] md:w-[50%] lg:w-[25%]">
        <img src={img2} alt="" className="w-96 mx-auto" />
      </div>
      <div className="">
        <input type="text" placeholder='Enter Your Username' className="mx-auto flex p-2 rounded-md custom-placeholder placeholder:font-bold  border-black border-2" />
        <a href="https://www.dikapp.com/#/pages/register/register?id=378810">
          <button type="submit" className="px-4 py-2 rounded-lg mb-2 flex justify-center items-center mx-auto my-2 bg-blue-300 hover:bg-blue-400">Link 1</button>
        </a>
        <a href="https://www.cargoconsoltd.com/#/pages/login/login?id=JupJpJ">
          <button type="submit" className="px-4 py-2 rounded-lg mb-2 flex justify-center items-center mx-auto my-2 bg-blue-300 hover:bg-blue-400">Link 2</button>
        </a>
        <p className="flex justify-center text-2xl font-bold ">How to avail this offer 🤔</p>
        <ul className=" text-xxl flex flex-col items-center">
          <li className="">Enter your Username and Hit link button.</li>
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
