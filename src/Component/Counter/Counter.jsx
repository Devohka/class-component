import React, { Component } from "react";



export default class Counter extends Component {
    state = {
        data: this.props,
        count: 0,
    };
    addPoins(){
        
    }
    render() {
        const {data, count} = this.state;
        console.log(data);
        let countet = count
        return (
            <>
                
                <p>Час: <span>{countet}</span></p>
                <button type="button" onClick={() => {countet++}}>+1</button>
                <button type="button">-1</button>
            </>
        );
    };
};

