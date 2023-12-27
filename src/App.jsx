// import { useState } from 'react'
import './App.css'
import Username from './components/Username'
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"

function App()
{
  const link = "https://www.cargoconsoltd.com/#/pages/login/login?id=JupJpJ"
  return (
    <>
      <section className="container">
      <div className=" flex justify-center w-[25%] mx-auto">
        <img src={img1} alt="" className=" cover h-[80%] mx-auto"/>
      </div>
      <span className="flex justify-center text-xl font bold">🫰Free Follower's Offer🫰</span>
      <div className="flex justify-center mx-auto w-auto h-52 md:w-[50%] lg:w-[25%]">
        <img src={img2} alt="" className="w-96 mx-auto" />
      </div>
      <div className="my-1">
        <Username/>
          <p className="flex justify-center text-xl font-bold ">How to avail this offer 🤔</p>
          <br />
        <ul className=" text-md flex flex-col items-center">
          <li className="">Enter your <strong>Username</strong> and Hit link button.</li>
          <li className="">You will be redirected to merchant page.</li>
          <li className="">Register and done.</li>
        </ul>
        <div className="flex flex-col items-center">
          <span className="block text-xl">✌️😍✌️Congratulation✌️😍✌️</span>
          {/* <span className="block">😍</span> */}
          <span className="">You will receive your followers</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
