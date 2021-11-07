import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from './components/box'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
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
          Test
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
