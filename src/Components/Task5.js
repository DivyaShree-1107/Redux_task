import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateRed,updateGreen,updateBlue,updatePink} from '../Actions/Task5Actions';
// import './Task3.css';

class Task4 extends Component {
    render() {
        return (
            <div>
                
                <div>{this.props.color}</div>                       
                <div>
                <button onClick={()=>this.props.updateRed()}>RED</button>
                <button onClick={()=>this.props.updateGreen()}>GREEN</button>
               <button onClick={()=>this.props.updateBlue()}>BLUE</button>
               <button onClick={()=>this.props.updateBlue()}>BLUE</button>
               </div>              
           </div>
        );
    }
}


const mapStateToProps = (state) => {
   
    const {color}=state.ReducerA5;
        return {color};
    };

export default connect(mapStateToProps ,{updateRed,updateGreen,updateBlue,updatePink}) (Task4);