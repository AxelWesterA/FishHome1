import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src='src/assets/______1.png'/>
        <br/>
        <input type="text" class="name" placeholder="Имя"></input> 
        <br></br>
        <input type="text" class="password" placeholder="Пароль"></input>
        <br></br>
        <div class="containerr">
          <div class="centerr">
            <button class="btnn">
              
              <span>Авторизация</span>
            </button>
            </div>
          </div>
        </div>
     
         
    </>
  )
}

export default App
