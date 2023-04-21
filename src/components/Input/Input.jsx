import React from 'react'

export default function Input({ ...props }) {
    let Component = 'input'

    if (props.type == 'textarea') {
        Component = 'textarea'
    }

    if (props.type == 'select') {
        Component = 'select'
    }
    if (props.type == 'div') {
        Component = 'div'
    }

    if (props.type == 'switch') {
        Component = InputSwitch
    }
    if (props.type == 'tags') {
        Component = InputTags
    }
    const selectClass = Component == 'select' ? 'select' : ''
    props.id = props.id || props.name
    props.className = 'form-control ' + (props.className || '') + selectClass

    return (<>
        
        <div className="mt-5">
       {props.label && (<label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          {props.label}
        </label>)} 
        <Component
          {...props}
        />
      </div></>
    )
}