import React from 'react'
import { AppProvider } from './Appcontext'
import Main from './Components/Main'

function App() {
  return (
    <AppProvider>
      <Main/>
    </AppProvider>
  )
}

export default App