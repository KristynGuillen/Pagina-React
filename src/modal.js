import React, { Component } from 'react'
import {Modal,Button,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';


export default class Billetera extends Component {

    state={
        abierto: false,
      }
    
      abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
      }
    
      render(){

        const botonStyles={

            width: '160px',
            height: '40px',
        }
    
        const modalStyles={
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          
        }

        return(
          <>
          <div className="principal">
            <div className="secundario">
          <Button color="btn btn-dark" onClick={this.abrirModal} style={botonStyles}>Comprar servicio</Button>
    
          </div></div>
    
          <Modal isOpen={this.state.abierto} style={modalStyles}>
            <ModalHeader>
              Bienvenido
            </ModalHeader>
            <ModalBody>
              <p>...</p>
            </ModalBody>
    
            <ModalFooter>
                <Button color="primary">Iniciar</Button>
                <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
            </ModalFooter>
          </Modal>
          </>
        )
      }
    }
    