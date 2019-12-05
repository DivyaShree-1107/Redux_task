import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateA,updateB} from '../Actions/Task2Actions';

class Task2 extends Component {
    render() {
        return (
            <div>
                <div>A : <span>{this.props.ageA}</span> B: <span>{this.props.ageB}</span></div>
                <button onClick={()=>this.props.updateA(this.props.ageB)}>UPDATE A</button>
                <button onClick={()=>this.props.updateB(this.props.ageA)}>UPDATE B</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
   
    const { ageA}=state.ReducerA;
    const { ageB}=state.ReducerB;
    return {ageA,ageB};
    };

export default connect(mapStateToProps ,{updateB,updateA}) (Task2);