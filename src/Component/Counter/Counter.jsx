import React, { Component } from "react";
import  MinBtn  from "../Btns/minBtn";
import  MaxBtn  from "../Btns/maxBtn";

export default class Counter extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         data: this.props,
    //         count: 0,
    //     }
    // };

static defaultValues = {
    countStart: 0,

};


    state = {
        data: this.props,
        // count: this.props.countStart,
        count: 0,
    };
    addPoins = () => {
        this.setState(
            // {
            //     count: this.state.count + 1
            // },
            (prevCount) => {
                return {
                    count: prevCount.count + 1,
                };
            }, () => {
                console.log("Це колбек після оновлення state )");
            });
    };

    minPoins = () => {
        this.setState(
            // {
            //     count: this.state.count - 1
            // }
            (prevCount) => {
                return { 
                 count: prevCount.count - 1,
             };
             }, () => {
                console.log("Це колбек після оновлення state )");
            });
    };
    // newState = {...{
    //     data: this.props,
    //     count: 0,
    // }, ...{
    //     count: 1,
    // }};

    // newState = {
    //     data: this.props,
    //     count: 1,
    // };


    render() {
        // const { data, count } = this.state;
        // let countet = count

        // function minPoins() {
        //     console.log(12);
        //     return countet = countet - 1;
        // }

        // console.log(data);

        return (
            <>

                <p>Час: <span>{this.state.count}</span></p>
                <MaxBtn addPoints={this.addPoins} />
                <MinBtn minPoints={this.minPoins} />
            </>
        );
    };
};

