import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateNumAdd,updateNumSub,updateInc} from '../Actions/Task4Actions';
import './Task4.css';

class Task4 extends Component {
    render() {
        return (
            <div>
                <div className="title">Number:</div>
                <div className="number">{this.props.num}</div>                       
                <div >
                <button className="button" onClick={()=>this.props.updateNumAdd()}>+</button>
                <button className="button" onClick={()=>this.props.updateNumSub()}>-</button>
               <button className="button1" onClick={()=>this.props.updateInc(this.props.num)}>IF NUM IS EVEN ,INCREMENT</button></div>              
           </div>
        );
    }
}


const mapStateToProps = (state) => {
   
    const {num}=state.ReducerA4;
        return {num};
    };

export default connect(mapStateToProps ,{updateNumAdd,updateNumSub,updateInc}) (Task4);