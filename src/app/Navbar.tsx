import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='container '>
      <div className='flex justify-between item-center'>
        <div className='text-xl font-medium'>
        AI.SHAYAN</div>
          {/* <div className='sm:hidden'>HOME</div> */}
        <div className=' flex justify-end  '> 
            <Link href={"/"} className='pr-5 hover:text-xl'> HOME</Link>
            <Link href={"/about"} className='pr-5 hover:text-xl'> ABOUT US</Link>
            <Link href={"/cont"} className='pr-5 hover:text-xl'> CONTACT US</Link>
            <Link href={"/project"} className='pr-5 hover:text-xl'> MY PROJECTS</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
