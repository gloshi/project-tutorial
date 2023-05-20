import React, { Suspense } from "react";
import { ErrorInfo, ReactNode } from "react";
import { PageError } from "widgets/PageError";


interface ErrorProviderProps {
    children: ReactNode
}

interface ErrorProviderState {
    hasError: boolean
}


class ErrorBoundary extends React.Component<ErrorProviderProps, ErrorProviderState> {
    constructor(props:ErrorProviderProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:Error) {
      return { hasError: true };
    }
  
    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
      
      console.log(error, errorInfo);
    }
  
    render() {

        const {hasError} = this.state
        const {children} = this.props

      if (hasError) {
        return <Suspense fallback=''><PageError/></Suspense> 
      }
  
      return children; 
    }
}

export default ErrorBoundary