import React from 'react'

const HomeCom2 = () => {
    return (
        <section className='home-com-2 flex space-between'>
            <div className='flex align-center'>
                <select name="duration" id="">
                    <option value={0}>All</option>
                    <option value={7}>Past 7 days</option>
                    <option value={30}>Past 30 days</option>
                </select>
                <p className='date'>2 Nov 2021 to 2 Dec 2021</p>
            </div>
            <div className='flex align-center'>
                <p>Current Balance:Rs. 2.2L</p>
                <button>View Statement</button>
            </div>
        </section>
    )
}

export default HomeCom2
