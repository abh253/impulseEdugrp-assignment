import React from 'react'
import {useState} from 'react'
import {IoMdCheckmarkCircle} from 'react-icons/io'
import {VscCircleLargeFilled} from 'react-icons/vsc'
const HomeCom1 = () => {
    const [contactDetails,setContactDetails]=useState(true);
    const [kyc,setKyc]=useState(false);
    const [accountAct,setAccountAct]=useState(false);

    return (
        <section className='profile-comp'>
            <div className='profile-comp-center'>
                <h4 style={{marginBottom:'1rem'}}>You are just steps away from enabling live payments</h4>
                <p>Submit a few KYC details and start accepting payments from your customers</p>
                <article className='flex space-between process'>
                </article>
                <article className='flex space-between process'>
                    <div>
                         {contactDetails?<IoMdCheckmarkCircle className='color-green font-3'/>:<VscCircleLargeFilled className='font-3 color-grey'/>}   
                        <header>Conatact Details</header>
                    </div>
                    <div>
                        {kyc?<IoMdCheckmarkCircle className='color-green font-3'/>:<VscCircleLargeFilled className='font-3 color-grey'/>}
                        <header>Live payments and Settlements</header>
                        <p>Submit a few KYC details to start accepting payments and receive settlement in your account</p>
                        <button type='button'>Submit KYC</button>
                    </div>
                    <div>
                        {accountAct?<IoMdCheckmarkCircle className='color-green font-3'/>:<VscCircleLargeFilled className='font-3 color-grey'/>}
                        <header>Account Activation</header>
                        <p>Get all the KYC details approved to complete the account activation</p>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default HomeCom1
