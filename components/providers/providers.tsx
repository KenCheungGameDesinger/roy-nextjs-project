import React from 'react'
import { ThemeProvider } from './theme-provider'

type ProvidersProps = {
    children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme='system' enableSystem >
                {children}
            </ThemeProvider>
        </div>
    )
}

export default Providers
