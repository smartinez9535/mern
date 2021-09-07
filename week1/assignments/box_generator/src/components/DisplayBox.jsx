import React, { useRef } from 'react';
import StyledBox from './StyledBox';

const DisplayBox = (props) => {

    //const {allUsers} = props;

    return (
        
        <fieldset>
            
            <legend>DisplayBox.jsx</legend>
            
            
            {JSON.stringify(props.allBoxes[0].background)}

            <hr/>
            {/* {JSON.stringify(allUsers)}{/* good for debugging the state */} 
            {
                props.allBoxes.map( (box, idx) => {
                    return (
                        <StyledBox key={idx} bgColor={box.color}/>
                    )
                })
            }
        </fieldset>
    )
}

export default DisplayBox;