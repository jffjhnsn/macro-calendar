import { useState, useEffect } from 'react'
import './App.css'
import { Box } from './components/box'
import { Button } from './components/button'
import Calendar from './components/calendar'

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
      const intervalRef = setInterval(() => setDateTime(new Date()), 1000);
      return () => {
          clearInterval(intervalRef);
      }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</p>
      </header>
      <main>
        <Calendar />
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
            Hmm
          </Box>
          <Button>Is it working?</Button>
      </footer>
    </div>
  )
}

export default App
