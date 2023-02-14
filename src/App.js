import React from 'react'
import './App.css'
import TopButtons from './components/TopButtons/TopButtons.component'
import SearchInput from './components/SearchInputs/SearchInput.component'
import TimeLocation from './components/TimeLocation/TimeLocation.component'
import WeatherValues from './components/WeatherValues/WeatherValues.component'

const App=()=>{
  return(
    <div className='main-container'>
      <TopButtons/>
      <SearchInput/>
      <TimeLocation/>
      <WeatherValues/>
    </div>
  )
}

export default App

