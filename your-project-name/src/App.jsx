import React, { useEffect, useState } from 'react'
import buttonSvg from './assets/images/icon-dice.svg'
import Quote from './Quote'

const App = () => {
  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      console.log(data)
      setLoading(false)
      setQuote(data.slip)
    } catch (error) {
      setLoading(false)
      // console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Quote quote={quote} fetchData={fetchData}/>
  )
}

export default App
