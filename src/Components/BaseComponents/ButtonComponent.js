import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) =>{
    const handleClick  = () => {
        props.btnClick(props.buttonName, props.id);
    }

    return(
        <div>
            <Button variant={props.variant} name={props.buttonName} onClick={handleClick}>{props.buttonText}</Button>
        </div>
    )
}

export default ButtonComponent