import React, { Component, CSSProperties } from 'react';

interface listItem {
    id:string,
    text:string,
    date:string

}
interface Props {
    theItemsToDisplay:listItem[],
    myRemovFunc:(id:string)=>void
    
}

export default class ListItem extends Component<Props>{
    constructor(props:Props){
        super(props)
    }


    private get displayFromListItem(){
        const items = this.props.theItemsToDisplay.map((item)=>{
            if(item.text == ''){
                return;
            }else {

                return(
                    
                    <li key={item.id}>{item.text} <span>{item.date}</span><button onClick={()=>this.props.myRemovFunc(item.id)}>Remove Item</button></li>
                )
            }
        })
        return items
    }
    render(){
        return(
            <ul style={ulListStyle}>
            <span>Add your item:</span>
                {this.displayFromListItem}
            </ul>
        )
    }
    
}

const ulListStyle:CSSProperties = {
    display:"flex",
    flexDirection: "column",
    width:"50%",
    paddingTop:"3em",
    margin:"auto"

}
