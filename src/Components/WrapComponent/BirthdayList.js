import React from "react";
import FormComponent from "../BaseComponents/FormComponent";
import TableComponent from "../BaseComponents/TableComponent";

const BirthdayList = () => {
    return(
        <div className="birthday">
            <h1 className="AppTitle">Birthday Records</h1>
            <FormComponent/>
            <TableComponent/>
        </div>
    )
    
}

export default BirthdayList