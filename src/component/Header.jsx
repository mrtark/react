import React from 'react'

export default function Header(props) {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light shadow">
        <div class="container">
          <a class="navbar-brand text-dark" ><i className={props.icon}></i></a>
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-dark rounded-3"
                  aria-current="page">Anasayfa <span class="visually-hidden">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " >Blog</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" id="dropdownId" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Kategoriler</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item " >Teknoloji</a>
                  <a class="dropdown-item" >Sanat</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " >İletişim</a>
              </li>
            </ul>
            <ul class="navbar-nav mt-2">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" id="dropdownId" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Kullanıcı İşlemleri</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" >Admin Panel</a>
                  <a class="dropdown-item" >User Panel</a>
                  <a class="dropdown-item" >Ürün Listesi</a>
                </div>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">

              <button class="btn my-2 my-sm-0 btn-arama" type="submit"><i
                class="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
        </div>
      </nav>
      
    </>
  )
}
