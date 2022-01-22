import React from 'react'
import { Link } from 'react-router-dom';
import './EmployeeCard.css'

function EmployeeCard({ item }) {

    // console.log(item);

    return (
        <div className='employee-card-container'>
            <Link to='/detail' className='employee-link'>
                {/* <img  /> */}
                <div className='employee-card-first'>
                    <label>NAME: </label>
                    <label>
                        <span className='emp-firstName'>{`${item.profession} : ${item.firstName} `}</span>
                        <span className='emp-lastName'>{item.lastName}</span>
                    </label>
                </div>
                <div className='employee-card-second'>
                    <label>{`${item.age} | ${item.country}`}</label>
                </div>
            </Link>

        </div>
    )
}

export default EmployeeCard
