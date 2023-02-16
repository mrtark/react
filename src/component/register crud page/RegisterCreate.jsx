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
  }

  dynamicHeader_CreateorUpdate(){
    if(this.state.id === ""){
      return <h1 className='text-center mt-3'>Kullanıcı Ekle</h1>
    }else{
      return <h1 className='text-center mt-3'>Kullanıcı Güncelle</h1>
    }

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
      </>
    )
  }
}
