import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import data from '../data/data'
import EmployeeCard from './EmployeeCard';
import './Home.css'


function Home({search, setSearch}) {

    const [employeeData, setEmployeeData] = useState([])
    const [loading, setLoading] = useState(true)

    function getEmployeeData() {
        setTimeout(() => {            

            if(search){
                setEmployeeData(data.filter(item=>{
                    console.log(item.profession);
                    console.log(search);
                    
                    return item.profession.toLowerCase().includes(search.toLowerCase())
                }))
            } else{
                setEmployeeData(data)
            }
            setLoading(false)
        }, 1200)
    }

    useEffect(() => {
        getEmployeeData()
    }, [search])

    // console.log(data);

    return (
        <div className='home-container'>
            <h2>Employee Data</h2>
            <div className='home-data-container'>
                {loading ? <h4>Loading Employee Data...</h4> : <>
                    {employeeData && employeeData.map(item => (
                        <EmployeeCard key={item.id} item={item} />
                    ))}</>
                }
            </div>
        </div>
    )
}

export default Home
