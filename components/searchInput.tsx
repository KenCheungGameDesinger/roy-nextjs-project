import React from 'react'

type Props = React.HTMLProps<HTMLInputElement> & {}

const SearchInput = (props: Props) => {
    return (
        <div className={props.className}>SearchInput</div>
    )
}

export default SearchInput