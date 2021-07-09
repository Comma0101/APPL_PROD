import React from 'react'

export default function break_out(props) {
    return (
        <div className="d-flex justify-content-center">
            <p className="h1">
            {props.children}
            </p>
            
        </div>
    )
}
