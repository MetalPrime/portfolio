import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Index } from '../pages/index/Index'
import Form from '../components/Form/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Index></Index>
      <article className="Pillars">
        <h1 className="Pillars">Pillars</h1>
        <section className="Pillars__section"></section>
        <section className="Pillars__section"></section>
        <section className="Pillars__section"></section>
        <section className="Pillars__section"></section>
      </article>
      <article className="Pillars">
        <h1 className="Pillars">Projects</h1>
        <section className="Pillars__section"></section>
        <section className="Pillars__section"></section>
        <section className="Pillars__section"></section>
        <section className="Pillars__section"></section>
      </article>
      <Form></Form>
    </div>
  )
}

export default App


{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
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
      </header> */}