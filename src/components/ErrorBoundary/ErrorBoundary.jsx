import { Component } from 'react';

import './ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        // process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <div className='error-img-overlay'>
                    <div className='error-img-container'/>
                    <h2 className='error-img-text'>This Page is Buried in the Sand. Check your connection and refresh the page.</h2>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;