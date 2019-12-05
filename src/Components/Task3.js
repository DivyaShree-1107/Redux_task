import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateA3,updateB3,updateC3,updateD3} from '../Actions/Task3Actions';
import './Task3.css';

class Task3 extends Component {
    render() {
        return (
            <div className="main">
                
                <div>{this.props.ageA}</div> 
                <div> {this.props.ageB}</div> 
                <div> {this.props.ageC}</div> 
                <div> {this.props.ageD}</div>                               
                <div><button className="button" onClick={()=>this.props.updateA3(this.props.ageC)}>UPDATE A</button></div>
                <div><button className="button" onClick={()=>this.props.updateB3(this.props.ageD)}>UPDATE B</button></div>
                <div><button className="button" onClick={()=>this.props.updateC3(this.props.ageA)}>UPDATE C</button></div>
                <div> <button className="button" onClick={()=>this.props.updateD3(this.props.ageB)}>UPDATE D</button></div>
                
           </div>
        );
    }
}


const mapStateToProps = (state) => {
   
    const {ageA}=state.ReducerA3;
    const {ageB}=state.ReducerB3;
    const {ageC}=state.ReducerC3;
    const {ageD}=state.ReducerD3;
    return {ageA,ageB,ageC,ageD};
    };

export default connect(mapStateToProps ,{updateB3,updateA3,updateC3,updateD3}) (Task3);