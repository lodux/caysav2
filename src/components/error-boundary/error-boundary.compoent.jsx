import { Component } from 'react'

import './error-boundary.styles.scss'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div className='error-container'>
              <div className='error-img' />
              <span>Ops... Qualcosa non va!</span>
            </div>
        )
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;