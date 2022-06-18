import React from "react"
import Nav from './components/Nav'
import Block from './components/Block'
import Data from './data/data'

let data = Data.map(elem=>{
    return(<Block 
        key={elem.id}
        {...elem}
    />)
})

export default function App(){
    return(<>
      <Nav />
      <div className="mainBoard">
        {data}
      </div>

    </>)
  }