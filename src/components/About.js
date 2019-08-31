import React, { Component } from 'react'
import './Tour.scss';
import { Modal,Button } from 'react-bootstrap';
export class About extends Component {
  state ={
    show:false
}
handleInfo =()=>{
    this.setState({
        show:!this.state.show
    })
}
handleClose =()=> {
    this.setState({ show: false });
  }
  render() {
    return (
                <div>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-success">
                    About this page </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <strong>C'est un exemple pour mettre en pratique mes compétences sur ReactJS</strong>
                     <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                     </Modal.Footer>
                  </Modal.Body>
                 </Modal>
               </div>
    )
  }
}
export default About; 