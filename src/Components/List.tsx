import React, { Component, CSSProperties } from 'react';
import ListItem from './ListItem'
interface listItem {
    id:string,
    text:string,
    date:string

}
interface Props {
    myAddedItems:listItem[]
    myRemoveFunc:(id:string)=>void
}
export default class List extends Component<Props>{

    constructor(props: Props){
        super(props)
    }


    render(){
        return (<ListItem  theItemsToDisplay={this.props.myAddedItems} myRemovFunc={this.props.myRemoveFunc} />)    
    }
}