import { useState } from 'react'

import './App.css'
import TextInput from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'

function App() {
  // const [, ] = useState()

  return (
    <>
    <CharacterCounter minWords={25} maxWords={100} />
    </>
  )
}

export default App
