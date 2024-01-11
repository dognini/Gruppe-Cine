import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import NavBar from "./components/navBar"

function App() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearch(value)
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) {
      return
    }

    navigate(`/search?q=${search}`)
    setSearch('')

  }

  return (
    <div className="App">
      <NavBar value={search} onChange={(e) => handleInput(e)} submit={submit} />
      <Outlet />
    </div>
  )
}

export default App