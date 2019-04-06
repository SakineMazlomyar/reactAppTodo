import React, { Component, CSSProperties } from 'react';
import List from './List'
interface listItem {
    id:string,
    text:string,
    date:string

}
interface Props {
    addFunc:(item:string) => void,
    myAddedItems:listItem[],
    removeFunc:(id:string)=>void
}

interface State {
    inputValue:string
  
}
export default class Adder extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            inputValue:'',
        }
        
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            inputValue:event.currentTarget.value
        })
    }

    handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(!this.state.inputValue.length){
            alert("Tomt!")
            return 
        }

        this.props.addFunc(this.state.inputValue)      
    }
    render(){
        
        return ( 
            <div style={divStyle}>
            <List  myAddedItems={this.props.myAddedItems} myRemoveFunc={this.props.removeFunc}/>
            <form style={formStyle} onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Write your item" value={this.state.inputValue} onChange={this.handleChange}/>
                <input type="submit" placeholder="submit"/>
               </form>
            </div>
            )
            
    }
}

const formStyle:CSSProperties = {
    display:"flex",
    flexDirection: "column",
    width:"50%",
    paddingTop:"3em",
    margin:"auto"

}
const divStyle:CSSProperties={
    border:"ridge",
    borderWidth:"tick",
    backgroundColor:"silver",
    marginTop:"5em"
  }