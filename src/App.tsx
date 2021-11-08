import { useState, useEffect } from 'react'
import './App.css'
import { Box } from './components/box'
import { Button } from './components/button'
import Calendar from './components/calendar'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Compact Calendar
      </header>
      <main>
        <Calendar year={new Date().getFullYear()} />
      </main>
      <footer>
        <Box 
            css={{
              backgroundColor: '$blue',
              color: '$white',
              fontSize: '$2',
              padding: '$3',
              margin: '$3',
              borderRadius: '$round',
            }}
          >
            {new Date().getFullYear()}
          </Box>
          <Button>Is it working?</Button>
      </footer>
    </div>
  )
}

export default App
