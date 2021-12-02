import React from 'react'
import { useContext } from 'react/cjs/react.development'
import Filters from './components/Filters'
import { AppContext } from './Context'

const Transactions = () => {
    const { transactions } = useContext(AppContext);
    return (

        <section className='transactions'>
            <div className='flex transaction-button-container space-between'>
                <button>Payments</button>
                <button>Refunds</button>
                <button>Orders</button>
            </div>
            <Filters />
            <div className='transactions-box'>
                <div className='flex space-between hide-635 background-f9'>
                <p>Payment Id</p>
                <p>Amount</p>
                    <p className=''>Email</p>
                    <p>Created At</p>
                    <p className='hide-1024'>Contact</p>
                    <p>Status</p>
                </div>
                {
                    transactions.map((single, index) => {
                        return (<div className={`${index%2===1?'background-f9 flex space-between single-transaction':'flex space-between single-transaction'}`} key={index}>
                            <p className='color-blue'>{single.paymentId}</p>
                            <p>Rs.{single.amount}</p>
                            <p className='hide-635'>{single.email}</p>
                            <p>{single.time.getDate()}-{single.time.getMonth()}-{single.time.getFullYear()}</p>
                            <p className='hide-1024'>{single.contact}</p>
                            <p className={`${single.status==='captured'?'captured':'failed'}`}>{single.status}</p>
                        </div>)
                    })
                }
            </div>

        </section>
    )
}

export default Transactions
