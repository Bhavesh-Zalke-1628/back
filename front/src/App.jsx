import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState([])
  async function getData() {
    const data = await axios.get('/api/joke')
    setJoke(data.data)
    console.log(joke)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      chai aur full stack
      <div>
        <p>JOKE:{joke.length}</p>
        {
          joke.map((joke, index) => {
            return <div key={index}>
              {joke.title}
              <p>
                {joke.content}

              </p>
            </div>

          })
        }
      </div >
    </>
  )
}

export default App
