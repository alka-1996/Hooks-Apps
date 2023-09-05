import React from 'react'

interface IPROPS{
    userid:number,
    username:string
    width:number
}

export default class Users extends React.Component<IPROPS>{
       constructor(props:IPROPS){
        super(props);
       }
render(){
    let {userid ,username,width}=this.props;
  return (
    <div>
      <h2>Welcome to class component</h2>
      {/* <h3>UserId:{this.props.userid}</h3>
      <h3>UserName:{this.props.username}</h3> */}

      <h3>UserId:{userid}</h3>
      <h3>UserName:{username}</h3>
      <h3>Width:{width}</h3>
    </div>
  )
}
}
