import React, { Component } from 'react'
import Register from '../../services/Register';

export default class RegisterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registerList: [],
    }
  }

  componentDidMount() {
    Register.listApiRegister().then(
      (reply) => {
        this.setState(
          {
            registerList:reply.data
          }
        )
      }
    )
  }

  render() {
    return (
      <>RegisterList</>
    )
  }
}
