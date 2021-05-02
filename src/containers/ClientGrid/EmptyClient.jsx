import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import '../Clients/Client.css'

const EmptyClient = ( {addToGridCallback} ) => {

    const onClickHandle = () => {
        addToGridCallback()
    }

    return (
        <div onClick={onClickHandle} className="client-container empty-container">
            <AiOutlinePlusCircle className="center-icon" size={100} />
        </div>
    )
}

export default EmptyClient;