import React, { Component } from 'react';
import Adder from './Adder';
interface listItem {
    id:string,
    text:string,
    date:string
}

interface Props {}
interface State {
    items:listItem[]
}
export default class Container extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state = {
            items:[
                {id:"",
                text:"",
                date:""}
                ]
            
        }
    }
    private addItem = (item:string ) => {
        const dateOfTodo = new Date();
        const n = Math.floor(Math.random() * 11);
        const k = Math.floor(Math.random() * 1000000);
        const m = String.fromCharCode(n) + k;
        let theNewList = this.state.items

        theNewList.push({id:m.toString(), text:item, date:dateOfTodo.toLocaleTimeString()})

        //Here we renew the list we had with the new list
        this.setState({
            items:theNewList
        })
    }
    private removeFromListItem = (id:string) => {
        const myUpdatedList = this.state.items
        for(let i=0; i<myUpdatedList.length; i++){
            if(id == myUpdatedList[i].id) {

                myUpdatedList.splice(i, 1);
                break
            }
        }
        
        this.setState({
            items:myUpdatedList
        })
    }
    
    render(){
        return (<Adder addFunc={this.addItem} myAddedItems={this.state.items} removeFunc={this.removeFromListItem}/>)
            
    }
}
