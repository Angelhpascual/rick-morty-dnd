import { useState } from "react"
import { Beth, Jerry, Morty, Rick, Verano } from "./utils/icons"

function App() {
  const inititalColumn = {
    first: {
      id: "first",
      list: [
        { id: "1", content: <img src={Morty} /> },
        { id: "2", content: <img src={Verano} /> },
        { id: "3", content: <img src={Rick} /> },
        { id: "4", content: <img src={Beth} /> },
        { id: "5", content: <img src={Jerry} /> },
      ],
    },
    second: {
      id: "second",
      list: [],
    },
  }

  const [columns, setColumns] = useState(inititalColumn)

  return (
    <div>
      <nav className="navbar">
        <img className="navbar_logo" src="/logo.png" alt="Logo" />
      </nav>
      <div className="column-container">
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </div>
  )
}

export default App
