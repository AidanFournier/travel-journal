import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
  const cardElements = cardData.map(data => 
    <Card 
        key={data.id}
        {...data}
    />
  )
  
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
          {cardElements}
      </section>
    </div>
  );
}