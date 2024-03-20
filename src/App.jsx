import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './SignUp.jsx'
import {SignUpPage} from './SignUp.jsx'
import {FileInput} from './SignUp.jsx'
import {Checkbox} from './SignUp.jsx'
import {PasswordInput} from './SignUp.jsx'
import {RadioButton} from './SignUp.jsx'
import {Dropdown} from './SignUp.jsx'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <SignUpPage/>
      <FileInput/>
      <PasswordInput/>
      <RadioButton/>
      <Dropdown/>
      <Checkbox/>
    </>
  )
}
export default App
