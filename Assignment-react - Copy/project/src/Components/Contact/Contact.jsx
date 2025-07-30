import React from 'react'

export default function Contact() {
  return (
    <>
      <section className='conatiner-fluid text-center py-5 w-100'>
        <p className="navbar-brand p-0 m-0 text-uppercase" style={{ fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#2C3E50' }} to="/">portfolio component</p>
        <div className='my-3 star-sec mb-3'><i className="fa-solid fa-star" style={{ color: '#2C3E50' }}></i></div>

        <form className='w-50 m-auto'>
          <input className="form-control m-4" type="text" placeholder="UserName" aria-label="default input example" />
          <input className="form-control m-4" type="number" placeholder="UserAge" aria-label="default input example" />
          <input className="form-control m-4" type="email" placeholder="UserEmail" aria-label="default input example" />
          <input className="form-control m-4" type="password" placeholder="UserPassword" aria-label="default input example" />

          <div className='text-start'>
            <button className="btn m-4 text-white" type="submit" style={{ backgroundColor: '#1ABC9C' }}>Submit</button>
          </div>
          
        </form>

      </section>
    </>
  )
}