import React, { Component } from 'react'
import Register from '../../services/Register';

export default class RegisterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registerList: [],
    }
    this.createRegister=this.createRegister.bind(this);
    this.updateRegister=this.updateRegister.bind(this);
    this.detailRegister=this.detailRegister.bind(this);
    this.deleteRegister=this.deleteRegister.bind(this);
  }

  componentDidMount() {
    Register.listApiRegister().then(
      (reply) => {
        this.setState(
          {
            registerList: reply.data
          }
        )
      }
    )
  }

  createRegister() {
    this.props.history.push("/register-create/");
  }

  updateRegister(id) {
    this.props.history.push("/register-create/" + id);
  }

  detailRegister(id){
    this.props.history.push(`/register-detail/ + ${id}`)
  }

  deleteRegister(id){
    this.props.history.push(`/register-detail/ + ${id}`)
  }

  render() {
    return (
      <>
        <main className="text-end ekle">
          <section className="ms-5 mt-4 d-inline-block">
            <a style={{ "textDecoration": "none" }}>
              <button type="button" className="button-56" data-bs-toggle="modal" data-bs-target="#modalId" role="button">
                <i className="fa-solid fa-bolt me-1"></i>
                Hızlı Ürün Ekle
              </button>
            </a>
          </section>
          <section className="ms-5 mt-4 d-inline-block">
            <a style={{ "textDecoration": "none" }} onClick={this.createRegister}>
              <button type="button" className="button-57" data-bs-toggle="modal" data-bs-target="#modalId" role="button">
                <i className="fa-solid fa-plus me-2"></i>
                Manuel Ürün Ekle
              </button>
            </a>
          </section>

        </main>

        <section className="ms-1 me-1 tabless mt-4">
          <div className="card girilenİslemList shadow">
            <div className="card-header text-center bg-baslık">
              <h3>Kullanıcı Listesi</h3>
            </div>
            <table className="table table-hover table-striped table-sm text-center" id="datalistregisterTable">
              <thead>
                <tr className="text-center text-white bg-dark">
                  <th>ID</th>
                  <th>ADI</th>
                  <th>SOYADI</th>
                  <th>EMAİL</th>
                  <th>ŞİFRE</th>
                  <th>TELEFON</th>
                  <th>Tarih ve Saat</th>
                  <th>Güncelle</th>
                  <th>Detay</th>
                  <th>Sil</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.registerList.map(temp =>
                    <tr key={temp}>
                      <td>{temp.id}</td>
                      <td>{temp.username}</td>
                      <td>{temp.surname}</td>
                      <td>{temp.email}</td>
                      <td>{temp.passwd}</td>
                      <td>{temp.telephoneNumber}</td>
                      <td>{temp.createdDate}</td>
                      <td><i class="fa-solid fa-file-pen text-dark fs-4"></i></td>
                      <td><i class="fa-solid fa-circle-info text-dark fs-4"></i></td>
                      <td><i class="fa-solid fa-trash-can text-dark fs-4"></i></td>

                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </section>
      </>
    )
  }
}
