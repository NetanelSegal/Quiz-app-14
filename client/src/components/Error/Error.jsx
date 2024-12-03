import React from 'react'

export default function Error({message}) {
  return (
    <span className="bg-red-500 text-center rounded-full">{message}</span>
  )
}
