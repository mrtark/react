import React, { Component } from 'react'
import Register from '../../services/Register';

export default class RegisterDetail extends Component {

  constructor(props){
    super(props);
    this.state={
      id:this.props.match.params.id,
      registerDTO:{

      }
    }
  }

  componentDidMount(){
    Register.findApiRegister(this.state.id).then(
      show =>this.setState({
        registerDTO:show.data
      })
    );
  }

  render() {
    return (
      <>
      <div className="card w-50 mt-4 shadow">
        <div className="card-body">
          <h4 className="card-title text-center">Kullanıcı ID: {this.state.registerDTO.id}</h4>
          <p className="card-text">Kullanıcı Adı: {this.state.registerDTO.username}</p>
          <p className="card-text">Kullanıcı Soyadı: {this.state.registerDTO.surname}</p>
          <p className="card-text">Kullanıcı Email: {this.state.registerDTO.email}</p>
          <p className="card-text">Kullanıcı Telefon No: {this.state.registerDTO.telephoneNumber}</p>
          <p className="card-text">Kullanıcı Şifre: {this.state.registerDTO.passwd}</p>
          <div class="card-footer text-muted text-center">
            Kullanıcı Oluşturulma Tarihi: {this.state.registerDTO.createdDate}
          </div>
        </div>
      </div>
      </>
    )
  }
}
