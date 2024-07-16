import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <p>Ooops, we could not find the page you are looking for!</p>
        <p>Click <Link to='/'>here</Link> to return to homepage.</p>
    </div>
  )
}

export default ErrorPage