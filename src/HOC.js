import React, { useEffect, useState } from 'react';


function withLoading (Component){
    return function WithLoadingComponent({isLoading, ...props}){
        if(isLoading)
            return <p>Loading....</p>
        return <Component {...props}/>
    }
}


const ListCompo = () =>{
    return (
        <>
        Here is the list 
        </>
    )
}

const Wrapper = withLoading(ListCompo)

const HOCCompo =  () =>{
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    },[])
    return(
        <>
            <Wrapper isLoading={isLoading}/>
        </>
    )
}

export default HOCCompo;