import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { AppContext } from '../Context'
const Filters = () => {

    const {changeHandler,email,status,paymentId,history}=useContext(AppContext);


    return (
        <section className='filter-container'>
            <form  className='filter-form flex space-between' onSubmit={(e)=>{e.preventDefault()}}>

               
                <div className='form-group'>
                    <label htmlFor='paymentId'>Payment Id:</label>
                    <input id='paymentId' name='paymentId' value={paymentId} onChange={(e)=>changeHandler(e)}></input>
                </div>
              

                <div className='form-group'>
                    <label htmlFor='duration'>Duration:</label>
                    <select name='history' id='duration' value={history} onChange={(e)=>changeHandler(e)}>
                        <option value={0}>All</option>
                        <option value={7}>last 7 days</option>
                        <option value={28}>last 28 days</option>
                        <option value={365}>last 1 year</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='status'>Status:</label>
                    <select name='status' value={status} onChange={(e)=>changeHandler(e)} id='status'>
                        <option value='all'>All</option>
                        <option value='captured'>captured</option>
                        <option value='failed'>failed</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' value={email} onChange={(e)=>changeHandler(e)}></input>
                </div>
            </form>
        </section>
    )
}

export default Filters
