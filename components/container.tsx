import React from 'react'

type Props = React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode

}

const Container = ({ children, className }: Props) => {

    return (
        <div className={`px-10 mx-auto py-2 ${className}`}>{children}</div>
    )
}

export default Container
