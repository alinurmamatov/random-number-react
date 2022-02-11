import React from "react";
import Header from "./Header";
import Result from "./Result";
import Input from "./Input";


class RandomNumber extends React.Component{
    constructor(){
        super()
        this.state = ({
            lower: 0,
            higher: 0,
            result: 0
        })
    }

    onChangeLower(e){
        let num = isNaN(e.target.value) ? 0 : e.target.value;
        this.setState({lower: num});
    }

    onChangeHigher(e){
        let num2 = isNaN(e.target.value) ? 0 : e.target.value;
        this.setState({higher: num2});
    }

    generate(e){
        e.preventDefault();
        let sum = Math.floor((Math.random() * (this.state.higher - this.state.lower) + 1) + this.state.lower);
        this.setState({result: sum});
        let visibleResult = document.getElementById("result");
        visibleResult.style.visibility = "visible";
    }

    reset(){
        this.setState({lower: 0, higher: 0, result: 0});
    }

    render(){
        return(
            <div id="container">
                <div id="wrapper">
                    <Header />
                    <form>
                        <div className="input-div">Lower Number: <Input type="number" min="1" value={this.state.lower} onChange={(e) => this.onChangeLower(e)} /></div>
                        <div className="input-div">Higher Number: <Input type="number" value={this.state.higher} onChange={(e) => this.onChangeHigher(e)} /></div>
                        <button onClick={(e) => this.generate(e)} type="submit">Generate</button>
                        <button type="reset" onClick={() => this.reset()}>Clear</button>
                    </form>
                    <Result final={this.state.result}/>
                </div>
            </div>
        )
    }
}

export default RandomNumber;