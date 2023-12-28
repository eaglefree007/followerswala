// import { useState } from 'react'
import './App.css'
import Username from './components/Username'
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"

function App()
{
  
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
          <p className="flex justify-center text-xl font-bold ">🫡How to avail this offer🤔</p>
          <br />
        🫶How to avail this offer:
        2.Weat 5-10 Seconds

3.You will be redirected to merchant website 

4.ReGister & Done.
        <ul className=" text-md flex flex-col text-center">
          <li className="">🥇Enter Your IG Username and click on submit button</li>
          <li className="">Wait 5-10 Seconds.
              {/* <a href="https://teleGram.me/onlineluterr" className='text-blue-500 hover:text-blue-600 hover:cursor-pointer'>this Telegram</a> */}
          </li>
          <li className="">ReGister & Done</li>
        </ul>
        <div className="flex flex-col items-center">
          <span className="block text-xl">🥳❤️‍🔥ConGratulation✌️🎉</span>
          {/* <span className="block">😍😍😍</span> */}
          <span className="">You will receive Your followers</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
