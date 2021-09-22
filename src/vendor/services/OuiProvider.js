import React from 'react'
import ClientDBProvider from './ClientDBProvider'
import DialogProvider from './DialogProvider'
import FontProvider from './FontProvider'
import NoActivityProvider from './NoActivityProvider'

function OuiProvider({ children }) {
    return (
        <FontProvider>
            <NoActivityProvider>
                <DialogProvider>
                    <ClientDBProvider>
                        {children}
                    </ClientDBProvider>
                </DialogProvider>
            </NoActivityProvider>
        </FontProvider>
    )
}

export default OuiProvider
