import React, { useState } from 'react'
import './Portfolio.css'
import image1 from '../../../public/10001.png'
import image2 from '../../../public/10002.png'
import image3 from '../../../public/10003.png'

export default function Portfolio() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const images = [image1, image2, image3, image1, image2, image3];

  return (
    <>
      <section className='container-fluid text-center py-5 w-100'>
        <p className="navbar-brand p-0 m-0 text-uppercase" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2C3E50' }}>
          portfolio component
        </p>
        <div className='my-3 star-sec'>
          <i className="fa-solid fa-star" style={{ color: '#2C3E50' }}></i>
        </div>

        <div className="container">
          <div className="row g-4">
            {images.map((img, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="portfolio-item position-relative" onClick={() => openModal(img)} style={{ cursor: 'pointer' }}>
                  <img src={img} alt={`Portfolio Item ${idx}`} className="img-fluid rounded-3" />
                  <div className='position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center cover'
                    style={{ backgroundColor: 'rgba(26, 188, 156, 0.8)', borderRadius: '10px' }}>
                    <i className="fa-solid fa-plus text-white" style={{ fontSize: '5rem' }}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {modalImage && (
        <div className="modal d-flex justify-content-center align-items-center"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999
          }}>
          <img src={modalImage} alt="Enlarged" style={{ maxHeight: '90%', maxWidth: '90%', borderRadius: '10px' }} />
        </div>
      )}
    </>
  )
}
