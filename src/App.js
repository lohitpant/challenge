import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import EmployeeDetail from './components/EmployeeDetail';
import Header from './components/Header';
import Home from './components/Home'


export default function App() {

    const[search, setSearch]=useState('')
    const[sort, setSort]=useState('')


    return (
        <div className='app-container'>
            <Router>
                <Header search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
                <Switch>
                    <Route path='/' exact>
                        <Home search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
                    </Route>
                    <Route path='/detail' >
                        <EmployeeDetail />
                    </Route>
                </Switch>
            </Router>
        </div>

    )
}
