import React from "react";
import {BookStoreServiceConsumer} from '../bookstore-service-context/BookStoreServiceContext'

export default function () {
    return (Wrapped)=>{
        return (
            <BookStoreServiceConsumer >
                {({service})=>{
                    return <Wrapped service={service}/>
                }}
            </BookStoreServiceConsumer>

        )
    }
}
