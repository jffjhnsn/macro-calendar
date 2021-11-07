import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from './components/box'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)
  const [dateTime, setDateTime] = useState(new Date());
  const today = new Date();
  const daysOfYear: Date[] = [];

  useEffect(() => {
    const currentYear: number = today.getFullYear();
    const startDate = new Date(currentYear, 0, 1);
    const endDate = new Date(currentYear, 11, 31);

    for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      daysOfYear.push(new Date(d));
    }

  }, []);

  useEffect(() => {
      const intervalRef = setInterval(() => setDateTime(new Date()), 1000);
      return () => {
          clearInterval(intervalRef);
      }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Box 
          css={{
            backgroundColor: '$blue',
            color: '$white',
            fontSize: '$2',
            padding: '$3',
            borderRadius: '$round',
          }}
        >
          {`${today.toLocaleDateString()}`}
        </Box>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <Button>Is it working?</Button>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
