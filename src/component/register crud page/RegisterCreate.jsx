import React, { Component } from 'react'
import Register from '../../services/Register';

export default class RegisterCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      username: "",
      surname: "",
      email: "",
      telephoneNumber: "",
      passwd: ""
    }
    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangeSurname=this.onChangeSurname.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangeTelephone=this.onChangeTelephone(this);
    this.onChangePassword=this.onChangePassword.bind(this);
  }

  dynamicHeader_CreateorUpdate() {
    if (this.state.id === "") {
      return <h1 className='text-center '>Kullanıcı Ekle</h1>
    } else {
      return <h1 className='text-center '>Kullanıcı Güncelle</h1>
    }

  }

  onChangeUserName(event){
    this.setState({
      username : event.target.value
    })
  }

  onChangeSurname(event){
    this.setState({
      surname : event.target.value
    })
  }

  onChangeEmail(event){
    this.setState({
      email : event.target.value
    })
  }

  onChangeTelephone(event){
    // this.setState({
    //   telephoneNumber : event.target.value
    // })
  }

  onChangePassword(event){
    this.setState({
      passwd : event.target.value
    })
  }

  componentDidMount() {
    if (this.state.id === "register-create/:id") {
      return;
    } else {
      Register.findApiRegister(this.state.id).then(
        getData => {
          const registerDTO = getData.data;
          console.log(registerDTO);
          this.setState({
            username: registerDTO.username,
            surname: registerDTO.surname,
            email: registerDTO.email,
            telephoneNumber: registerDTO.telephoneNumber,
            passwd: registerDTO.passwd
          })
        }
      )
    }
  }

  render() {
    return (
      <>
        RegisterCreate Page
        {this.dynamicHeader_CreateorUpdate()}
        <section className="w-50 shadow text-center ileti center">
          <div className="card ileti">
            <div className="card-header">
              Form
            </div>
            <div className="card-body">
              <form className="pt-4 form-floating">

                <div className="row m-2">
                  <div className="col">
                    <div className="input-group mb-3">
                      <span for="username" className="input-group-text" id="basic-addon1">Kullanıcı Adı</span>
                      <input type="text" className="form-control" autofocus="false" id="username" name="username" onChange={this.onChangeUserName} value={this.state.username}/>
                    </div>
                  </div>

                  <div className="col">
                    <div className="input-group mb-3">
                      <span for="surname" className="input-group-text" id="basic-addon1">Kullanıcı Soyadı</span>
                      <input type="text" className="form-control" autofocus="false" id="surname" name="surname" onChange={this.onChangeSurname} value={this.state.surname} />
                    </div>
                  </div>
                </div>

                <div className="row m-2">
                    <div className="col">
                        <div className="input-group mb-3">
                            <span for="email" className="input-group-text" id="basic-addon1">Email</span>
                            <input type="text" className="form-control" autofocus="true"  id="email" name="email" onChange={this.onChangeEmail} value={this.state.email}/>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col">
                        <div className="input-group mb-3">
                            <span for="telephoneNumber" className="input-group-text" id="basic-addon1">Telefon Numarası</span>
                            <input type="text" className="form-control" autofocus="true"  id="telephoneNumber" name="telephoneNumber" onChange={this.onChangeTelephone} value={this.state.telephoneNumber}/>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col">
                        <div className="input-group mb-3">
                            <span for="passwd" className="input-group-text" id="basic-addon1">Şifre</span>
                            <input type="text" className="form-control" autofocus="true"  id="passwd" name="passwd" onChange={this.onChangePassword} value={this.state.passwd}/>
                        </div>
                    </div>
                </div>

              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}
