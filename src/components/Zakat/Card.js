import React from 'react'

export default function Card({ children }) {
  return (
    <div className="w-full">
      <div
        className="grid items-center max-w-md grid-cols-1 gap-4 p-6 px-6 shadow-md rounded-2xl"
        style={{
          boxShadow: 'rgba(0,0,0,0.06) 0px 1px 16px',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Icon({ children }) {
  return <div className="self-center ">{children}</div>
}
function Title({ children }) {
  return (
    <div className="font-semibold text-large text-peduly-dark">{children}</div>
  )
}
function Description({ children }) {
  return <div className="font-medium text-gray-500 text-basic">{children}</div>
}

Card.Icon = Icon
Card.Title = Title
Card.Description = Description
