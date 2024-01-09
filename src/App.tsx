import { Outlet } from "react-router-dom"
import NavBar from "./components/navBar"

function App() {
  return (
    <div className="App">
      <NavBar />

      <h2> Gruppe Cine </h2>

      <Outlet />
    </div>
  )
}

export default App