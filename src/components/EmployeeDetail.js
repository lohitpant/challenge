import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeDetail() {
    return (
        <div className='employee-detail-container'>
            <Link to='/'>
                <button>Go Back</button>
            </Link>
            <h2>
                This is Employee detail Component
            </h2>
            <div>
                <label>Name: Lohit Pant</label>
            </div>
        </div>
    )
}

export default EmployeeDetail
