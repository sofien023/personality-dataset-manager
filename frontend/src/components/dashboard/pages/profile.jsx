import React from 'react'
import Image from '../../../../public/assets/image.jpg'

function profile() {
  return (
    <div>
      <div className="p-[3rem] h-full overflow-auto bg-white">
        <div className="flex items-center mb-[1rem]">
          <img
            src={Image}
            alt="Profile"
            className="rounded-full w-[9rem] h-[9rem] mr-[2rem] object-cover"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[2rem] font-bold mb-[0.5rem]">John Doe</h1>
            <p className="text-[1.2rem] text-[#888]">Lorem ipsum dolor amet sit</p>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default profile