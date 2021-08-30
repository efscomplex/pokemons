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
        const { errorMsg } = this.props

        if (hasError) {
            if (errorMsg) {
                notify(errorMsg)
                return null
            }
            return <ErrorComponent />
        }

        return this.props.children
    }
}

export function notify(text: string) {
    if (!('Notification' in window)) {
        alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
        showNotification(text)
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            permission === 'granted' && showNotification(text)
        })
    }
}
const showNotification = (text: string) => {
    var notification = new Notification(text)
    const timeout = setTimeout(() => {
        notification.close()
        clearTimeout(timeout)
    }, 3000)
}
