import React from 'react'
import './Header.css'

function Header({search, setSearch, sort, setSort}) {



    const handleSearch=(e)=>{
        setSearch(e.target.value)
        // console.log(e.target.value);
    }

    return (
        <div className='header-container'>
            <input type='text' placeholder='Search..' className='header-input' value={search} onChange={(e)=>handleSearch(e)} />
            <button>Search</button>
            <ul >
                <li className='header-list' onClick={()=>setSort("ascending")}>Ascending</li>
                <li className='header-list' onClick={()=>setSort("descending")} >Descending</li>
                <li className='header-list' onClick={()=>setSort("")}>Cancel</li>
            </ul>
        </div>
    )
}

export default Header
