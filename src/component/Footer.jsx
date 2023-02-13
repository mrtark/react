import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='bg-dark fixed-bottom'>

        <section className="ftr">
          <div className="text-center text-dark mt-4 pt-4">
            <ul>
              <a href="#">Anasayfa</a>
              <a href="#">Blog</a>
              <a href="#">Kategori</a>
              <a href="#">İletişim</a>
            </ul>

          </div>
          <div className="text-center">
            <ul className="ftr-social">
              <a href="#"><i className="fa-brands fa-github"></i> Github</a>
              <a href="#"><i className="fa-brands fa-linkedin"></i> Linkedın</a>
              <a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
              <a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a>
            </ul>
          </div>
        </section>
        <div className="text-center text-white  bg-dark fw-light" id="copy_right">
          2021 - <span id="copy_date"></span> <br />
          &copy; Tüm Hakları Saklıdır. <br />
        </div>
      </footer>
    </>
  )
}
