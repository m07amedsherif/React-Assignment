import React from 'react'
import avatar from '../../../public/avataaars.svg'
import './Home.css'
export default function Home() {
  return (
    <>
      <section className='container-fluid text-center py-5' style={{ backgroundColor: '#1ABC9C' }}>
        <img src={avatar} alt="Avatar logo" width={250} className=' my-3' />
        <p className="navbar-brand text-white p-0 m-0" style={{ fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }} to="/">Start Framework</p>
        <div className='my-3 star'><i className="fa-solid fa-star text-white"></i></div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </section>
    </>
  )
}
