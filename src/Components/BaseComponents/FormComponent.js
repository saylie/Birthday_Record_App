import React, { useState } from "react";
import { Form , Alert} from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {useDispatch } from "react-redux";
import { addBirthday } from '../../actions/BirthdayActions';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('')
    const dispatch = useDispatch();

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleDateChange = (event) =>{
        setDate(event.target.value)
    }
    const validateDate = (date) => {
        const ddmmyyyyRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const mmddyyyyRegex = /^(\d{2}) (\d{2}) (\d{4})$/;

        let day, month, year;

        if (ddmmyyyyRegex.test(date)) {
            [day, month, year] = date.split('/').map(Number);
        } else if (mmddyyyyRegex.test(date)) {
            [month, day, year] = date.split(' ').map(Number);
        } else {

            return false;
        }
        const parsedDate = new Date(year, month - 1, day);

        return parsedDate.getFullYear() === year &&
               parsedDate.getMonth() === month - 1 &&
               parsedDate.getDate() === day;
    };

    const handleSubmit = (btnName) =>{
        if(btnName === 'add'){
            if (!name || !date) {
                setError("Both fields are required.");
                return;
            }
            if (!validateDate(date)) {
                setError("Invalid date format. Please use DD/MM/YYYY or MM/DD/YYYY.");
                return;
            }
            const birthday = {
            id: Date.now(),
            name,
            date,
          };
          dispatch(addBirthday(birthday));
          setName('');
          setDate('');
          setError('')
        }
    }
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="formClass">Name:
                        <Form.Control type="text" value={name} onChange={handleNameChange}></Form.Control>
                    </Form.Label>
                    <Form.Label className="formClass">Date:
                        <Form.Control type="text" value={date} onChange={handleDateChange}></Form.Control>
                    </Form.Label>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <ButtonComponent variant="primary" buttonText='Add' buttonName='add' btnClick={handleSubmit}></ButtonComponent>
                </Form.Group>
            </Form>
        </div>
    )
}

export default FormComponent