import React, { Component } from 'react';
import './Tour.scss';
export default class Tour extends Component {
    state ={
        show:false
    }
    handleInfo = ()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        const {id,city,img,name,info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
              <div className="img-container">
                  <img src={img} alt=""/>
                  <span className="close-btn" onClick={()=>{removeTour(id)}}>
                      <i className="fas fa-window-close"/>
                  </span>
              </div>
              <div className="tour-info">
                  <h3>{city}</h3>
                  <h4>{name}</h4>
                  <h5>info{""}
                    <span onClick={this.handleInfo}>
                        <i className="fas fa-caret-square-down"/>
                    </span>
                  </h5>
                   {this.state.show && <p>{info}</p>}
              </div>  
            </article>
        )
    }
}
