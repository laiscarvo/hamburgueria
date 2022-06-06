import React from 'react'
import Header from '../../components/Header'


const Dashboard = ({showProducts}) => {
    return (
        <div className='dashboard'>
            <Header showProducts={showProducts}/>
        </div>
    )
}


export default Dashboard