import React from 'react';
import SubCompUno from './subcompuno';
import axios from 'axios';

class CompUno extends React.Component{
  constructor(){
    super()
    this.state = {
      nombres : []

    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {




      this.setState(() => {
        return {
          nombres : res.data
        }
      })

    }).catch((err) => {

    })
  }



  render(){



    let nombres = this.state.nombres.map((nombre) =>{
      return   <SubCompUno title={nombre.name} correo={nombre.email}/>
    })

    return nombres;



  }
}


export default CompUno;
