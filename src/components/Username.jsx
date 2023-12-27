import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Username = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  // const navigate = useNavigate();

  const handleClick = async () =>
  {
    let datacheck;
    try
    {
      if (!name || !username) {datacheck = false}
      // Make a POST request to your Node.js backend API
      if(datacheck == false) return;
      const response = await axios.post(`/api/user`, {
        name: name,
        username: username,
      });
      console.log(response, 17);
      // Handle the response if needed
      // const { message, currentUrl } = response.data
      // console.log('Backend response:', message, currentUrl);

      // Navigate to the next link
      // navigate(`${currentLink}`); // Replace '/next-page' with your desired link
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
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} required={true}
      />
      <button onClick={handleClick} className='px-4 py-2 bg-pink-300 rounded-lg mt-1'>Send Username</button>
    </div>
  );
};

export default Username;
