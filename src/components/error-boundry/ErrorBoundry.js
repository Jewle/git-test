import {Component} from "react";
import  React from "react";

export default class extends Component{
    state={
        hasError:false,
        error:''
    }

    componentDidCatch(error): void {
        this.setState({error})
        this.setState({hasError:true})
    }
    render(){
        if (this.state.hasError){
            return (<div>
                <h1>Error</h1>

            </div>)
        }
        return this.props.children
    }
}
