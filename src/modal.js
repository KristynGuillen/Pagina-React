import React, { Component } from 'react'
import {Modal,Button,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import Web3 from 'web3';
import Portis from '@portis/web3';
const web3 = new Web3();


export default class Billetera extends Component {

  /* -------------Modal------------- */
    state={
        abierto: false,
      }
    
      abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
      }
    
      render(){

  /*------Conexión y transacción con Metamask-----*/    
  const transaction = () =>{
    
    let accounts = [];
    let web3_provider;

    if (window.ethereum){

      web3_provider = window.ethereum.enable();
      console.log(window.ethereum);
    
      window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: "0x5493980a73C44644224742563e13Db3c193859C4",
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: '0x29a2241af62c0000',
              gasPrice: '0x09184e72a000',
              gas: '0x2710',
            },
          ],
        }).then(r=>console.log(r)).catch(e=>console.log(e))

      }
    }

    /*--------Conexión a Portis-----*/

    const connect = () =>{
          
      const portis = new Portis('fba6a4ae-066c-417b-b039-4b094e92fc5b', 'mainnet', { gasRelay: true });
     const web3 = new Web3(portis.provider);
   
 
     web3.eth.getAccounts((error, accounts) => {
       alert(accounts);
     });
 
     const to = "0xb1690C08E213a35Ed9bAb7B318D114420FB57d8C";
     const amountInEther = 12;
     const gasLimit = "0x0";
     const gasPrice = "0x0";
 
     (async () => {
       const accounts = await portis.provider.enable();
       const response = await web3.currentProvider.send("eth_sendTransaction", [
         {
           from: accounts[0],
           to: to,
           value: etherToHexWei(amountInEther),
           gas: gasLimit,
           gasPrice: gasPrice
         }
       ]);
       console.log(response);
     })();

     
function etherToHexWei(value) {
  const wei = value * 10 ** 18;
  const hexWei = wei.toString(16);
  return `0x${hexWei}`;
}

}
 
          
        const botonStyles={

            width: '160px',
            height: '40px',
        }
    
        const modalStyles={
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          
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
              <section className=" row justify-content-around text-center">
              <article className="col-20 col-md-20 col-lg-4 bg-white rounded shadow p-3 fw-light">
               
                <h3 className="text">
                    Diseño <br/>
                    Económico
                </h3>
                <p className="text2">
                <i class="fas fa-check"></i>Inicio/Home <br/>
                <i class="fas fa-check"></i>Servicios <br/>
                <i class="fas fa-check"></i>Nosotros <br/>
                <i class="fas fa-check"></i>Imagenes<br/>
                <i class="fas fa-check"></i>Contacto <br/>
                </p>
                <p>$10.000</p>
                <Button onClick= {transaction}> Pagar con Metamask</Button> <br/>  <br/>
                <Button onClick= {connect}> Pagar con Portis</Button>
               
              </article>

              <article className="col-20 col-md-20 col-lg-4 bg-white rounded shadow p-3 fw-light">
               
                <h3 className="text">
                    Diseño <br/>
                    Estandar
                </h3>
                <p className="text2">
                <i class="fas fa-check"></i>Menú <br/>
                <i class="fas fa-check"></i>4 botones <br/>
                <i class="fas fa-check"></i>Videos<br/>
                <i class="fas fa-check"></i>formulario de <br/>
                contacto <br/>
                <i class="fas fa-check"></i>SEO <br/>
                <i class="fas fa-check"></i>Enlace a redes <br/>
                </p>
                <p> $13.000 </p>
                <Button onClick= {transaction}> Pagar con Metamask</Button>  <br/>  <br/>
                <Button onClick= {connect}> Pagar con Portis</Button>
               
              </article>

              <article className="col-20 col-md-20 col-lg-4 bg-white rounded shadow p-3 fw-light">
               
                <h3 className="text">
                    Diseño <br/>
                    Pro
                </h3>
                <p className="text2">
                <i class="fas fa-check"></i>Menú <br/>
                <i class="fas fa-check"></i>6 botones <br/>
                <i class="fas fa-check"></i>Páginas <br/>
                <i class="fas fa-check"></i>40 fotos <br/>
                <i class="fas fa-check"></i>Galeria <br/>
                <i class="fas fa-check"></i>formulario de <br/>  
                Contacto <br/>
                <i class="fas fa-check"></i>Enlace a <br/>
                Redes <br/>  
                <i class="fas fa-check"></i>SEO <br/>
                <i class="fas fa-check"></i>Email Marketing<br/>
                <i class="fas fa-check"></i>Soporte técnico <br/></p>
                <p> $19.000</p>
                <Button onClick= {transaction}> Pagar con Metamask</Button> <br/>  <br/>
                <Button onClick= {connect}> Pagar con Portis</Button>
              </article>
              </section>
            </ModalBody>
    
            <ModalFooter>
                
                <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
            </ModalFooter>
          </Modal>
          </>
        )
      }
    }
    