import React from 'react'
import './About.css'


export default function About() {
  return (
    <section className='container-fluid text-center py-5' style={{ backgroundColor: '#1ABC9C' }}>
      <p className="navbar-brand text-white p-0 m-0" style={{ fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }} to="/">About Component</p>
      <div className='my-3 star'><i className="fa-solid fa-star text-white"></i></div>

      <div className="container py-5">
        <div className="row">

          <div className="col-lg-6">
            <div>
              <p className='text-white'>This is a simple about component that provides information about the project. It is designed to be responsive and visually appealing, with a focus on clarity and ease of understanding.</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div>
              <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
