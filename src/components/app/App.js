import React from "react";
import './app.css'
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import Spinner from "../spinner/Spinner";
import {BookStoreServiceProvider} from '../bookstore-service-context/BookStoreServiceContext'
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import withService from "../hoc/withService";

export default function () {

    return <ErrorBoundry>
        <BookStoreServiceProvider value={'From App'}>
            <div className='application'>
                App
                <ErrorIndicator/>
                {withService(Spinner)}
            </div>
        </BookStoreServiceProvider>
    </ErrorBoundry>
}
