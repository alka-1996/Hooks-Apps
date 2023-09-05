import React, { Component } from 'react'

type PersonProps ={
    message:string
}
type PersonState={
    count:number
}
export class Person extends Component<PersonProps,PersonState>{
 state={
    count:0,
 }

 handleClick=()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
 }
render(){
  return (
    <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}{this.state.count}
    </div>
  )
}
}
