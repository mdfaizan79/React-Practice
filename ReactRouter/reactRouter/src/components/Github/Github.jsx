import React, { useState,useEffect } from 'react'

function Github() {

  const [data,setData] = useState([])
useEffect(() => {
  fetch('https://api.github.com/users/mdfaizan79')
  .then(response => response.json())
  .then(data => setData(data))
}, [])


  return (
    <div className='text-center m-4 bg-slate-500 text-white p-4 text-3xl'>
     Github Followers : {data.followers} 
     <div className='text-center'>
     {data.bio}
      </div>
     <div>
      <img src={data.avatar_url} alt="Gitpics"  width={300} />
     </div>
     
     
    </div>
  )
}

export default Github
