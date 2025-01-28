```javascript
import { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const CounterContext = createContext();

function App() {
  return (
    <CounterContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CounterContext.Provider>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export default App;
```