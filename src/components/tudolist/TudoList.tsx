import React, { useState } from "react";

export const TudoList=()=>{
 
    const [inputList,setInputList]=useState("");
    const [items , setItems] = useState<string[]>([]); 

    const itemEvent= (event:any) => {
    setInputList(event.target.value) ;

};

const listOfItem = () => {
setItems  ((oldItems) =>{
    return [...oldItems, inputList];
});
}

    return(
        <div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" placeholder="add a Items" onChange={itemEvent}/>
  <button type="button" className="btn btn-dark" onClick={listOfItem}>Add</button>
<ol>
    {/* <li>{inputList}</li> */}
    {items.map( (itemval)=>{
        return <li>{itemval}</li>
    } )}
</ol>
</div>        
</div>
    )
}