//Main entry point

import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <div>
      <h3>My First Component</h3>
    </div>
  )
}

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
