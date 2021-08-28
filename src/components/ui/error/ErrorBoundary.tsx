import ErrorComponent from '@/components/ui/error/ErrorComponent'
import React from 'react'

export class ErrorBoundary extends React.Component<
    { errorMsg?: any },
    { hasError: boolean }
> {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        const { hasError } = this.state

        return hasError
            ? this.props.errorMsg || <ErrorComponent />
            : this.props.children
    }
}
