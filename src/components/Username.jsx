import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Username = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  // const navigate = useNavigate();


  // Yaha is link ko eidt karna 
  // const link = "https://www.dikapp.com/#/pages/register/register?id=378810"
  // const link = "https://www.earth-delivery.com/#/pages/register/register?id=374728"
const link = 
// const link = 
// const link = 
// const link = 
  // iske niche nahi karna

  const handleClick = async (e) =>
  {
    e.preventDefault()
    let datacheck;
    try
    {
      if (!name || !username) {datacheck = false}
      // Make a POST request to your Node.js backend API
      if(datacheck == false) return;
      const response = await axios.post(`https://fsapi-production.up.railway.app/user`, {
        name: name,
        username: username,
      });
      if(response.data.status == 2) {
          window.location.href = `${link}`; // Replace with your desired URL
        // console.log(response);
      }
    } catch (error) {
      // Handle errors
      console.error('Error sending username:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto w-80 '>
      <input type="text"
        placeholder='Enter Name'
        className='w-[80%] mx-auto flex p-2 rounded-md custom-placeholder placeholder:font-bold  border-black border-2'
        value={name}
        onChange={e => setName(e.target.value)} required={true} />
      <input
        type="text"
        className='w-[80%] mt-1 mx-auto flex p-2 rounded-md custom-placeholder placeholder:font-bold  border-black border-2'
        placeholder="IG UsernamE"
        value={username}
        onChange={(e) => setUsername(e.target.value)} required={true}
      />
      {/* <a > */}
        <a onClick={e => handleClick(e)} className='px-4 py-2 bg-pink-300 hover:bg-pink-400 rounded-lg mt-1 cursor-pointer'>SubmiT</a>
      {/* </a> */}
    </div>
  );
};

export default Username;
