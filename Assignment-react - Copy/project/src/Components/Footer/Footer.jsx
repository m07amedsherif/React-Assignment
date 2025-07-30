import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center text-white position-relative bottom-0 w-100">
      <div className="container-fluid py-5 " style={{ backgroundColor: '#2C3E50' }}>
        <div className="row px-3 gy-4">
          
          <div className="col-md-4 mb-4">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <div className="d-flex justify-content-center">
              <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fa-brands fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fa-solid fa-globe"></i></a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="mb-0 text-center">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-3" style={{ backgroundColor: '#1A252F' }}>
        <small>Copyright © Your Website 2021</small>
      </div>
    </footer>
  );
}
