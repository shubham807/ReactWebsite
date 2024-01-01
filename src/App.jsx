import { useState } from "react"
import Header from "./components/Header"
import NewsBoard from "./components/NewsBoard"

function App() {
  const [category, setCategory]= useState('general')

  return (
    <>
     <Header setCategory={setCategory}/>
     <NewsBoard category={category}/>
    </>
  )
}

export default App
