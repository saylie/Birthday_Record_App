import React from "react";
import { Col, Row, Table} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ButtonComponent from "./ButtonComponent";
import { deleteBirthday, sortBirthday } from '../../actions/BirthdayActions';

const TableComponent = () => {
    const birthdays = useSelector((state) => state.birthday.birthdays);
    const sortBy = useSelector((state) => state.birthday.sortBy);
    const sortOrder = useSelector((state) => state.birthday.sortOrder);
    
    const dispatch = useDispatch();
    const handleDelete = (name, id) =>{
        if(name === 'delete'){
            dispatch(deleteBirthday(id));
        }
    }

    const handleSort = (sortByValue) => {
        let sortOrderValue = 'asc';
        if (sortBy === sortByValue && sortOrder === 'asc') {
            sortOrderValue = 'desc';
        }
        dispatch(sortBirthday(sortByValue, sortOrderValue));
    }
    const sortedBirthdays = [...birthdays].sort((a, b) => {
        let comparison = 0;
        if (a[sortBy] > b[sortBy]) {
          comparison = 1;
        } else if (a[sortBy] < b[sortBy]) {
          comparison = -1;
        }
        return comparison;
      });

   
    return(
        <div>
            <Row lg={12} className="TitleRow">
                <Col lg={6}>
                    <Table striped bordered hover >
                        <thead>
                            <tr >
                                <th style={{padding :'10px 80px 10px 80px'}} onClick={() => handleSort('name')}>Name</th>
                                <th style={{padding :'10px 80px 10px 80px'}} onClick={() => handleSort('date')}>Date</th>
                                <th style={{padding :'10px 80px 10px 80px'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedBirthdays.map((birthday) => (
                                    <tr key={birthday.id}>
                                        <td>{birthday.name}</td>
                                        <td>{birthday.date}</td>
                                        <td>
                                            <ButtonComponent buttonName='delete' buttonText='Delete' variant='danger' id={birthday.id} btnClick={handleDelete}/>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            
        </div>
    )
}

export default TableComponent