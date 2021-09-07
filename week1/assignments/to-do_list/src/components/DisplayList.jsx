import React from 'react';

const DisplayList = (props) => {

    const itemClasses = ["bold", "italic"];

    if (props.item.complete === true) {
        itemClasses.push("line-through");
    }

    return (
        <div>
            <hr/>
            {/* {JSON.stringify(allUsers)}{/* good for debugging the state */} 
            <input onChange={(event) => {props.crossOut(props.i)}} checked={props.item.complete} type="checkbox"/>
            <span className={itemClasses.join(" ")}>{ props.item.description }</span>
            <button onClick={(event) => {
                props.remove(props.i);
            }}
            style={{ marginLeft: "10px" }}
            >
                Delete</button>
        </div>
    )
}

export default DisplayList;