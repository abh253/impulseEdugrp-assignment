import React from 'react';
import { useState,useEffect } from 'react';
import Filters from './components/Filters';
import transactionData from './data/transactionData';
const AppContext=React.createContext();


const AppProvider = ({children}) => {
    
    const [page ,setPage]=useState('home');
    const [sidebarOpen,setSidebarOpen]=useState(true);
    
    const handleResize=()=>{
        if(window.innerWidth<=765){
            setSidebarOpen(false);
        }
        else{
            setSidebarOpen(true);
        }
    }
    useEffect(()=>{handleResize()},[])
    const defaultFilterState={email:'',history:0,paymentId:'',status:'all'};
    const [filterState,setFilterState]=useState(defaultFilterState);
    const [transactions,setTransactions]=useState(transactionData);

    const changeHandler=(e)=>{
        const target=e.target;
        const value=target.value;
        const name=target.name;
        setFilterState({...filterState,[name]:value})
        
    }

    useEffect(()=>{
        let newTransactions=transactionData;
        if(filterState.email.length!==0){
            let len=filterState.email.length;
            newTransactions=newTransactions.filter((singleData)=>{
                return singleData.email.slice(0,len)===filterState.email;
            })
        }
        if(filterState.paymentId.length!==0){
            let len=filterState.paymentId.length;
            newTransactions=newTransactions.filter((singleData)=>{
                return singleData.paymentId.slice(0,len)===filterState.paymentId;
            })
        }
        if(filterState.status!=='all'){
            newTransactions=newTransactions.filter((singleData)=>{
                return singleData.status===filterState.status;
            })
        }

        if(filterState.history> 0){
            const timediff=filterState.history*24*60*60*1000;
            const currtime=new Date();
            newTransactions=newTransactions.filter((singleData)=>{
                return ((currtime-singleData.time)<=timediff);
            })
        }

        setTransactions(newTransactions);


    },[filterState])



    window.addEventListener('resize',handleResize);
    return (
        <AppContext.Provider value={{...filterState,sidebarOpen, setSidebarOpen,changeHandler,transactions,page,setPage}}>
        {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext}
