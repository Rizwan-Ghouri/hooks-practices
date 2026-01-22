import { Route, Routes } from "react-router"
import Movies from "./pages/Movies"
import MoviesDetailes from "./pages/MoviesDetailes"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetailes />} />
        <Route path="*" element="Error 404" />
    </Routes>
    </>
  )
}

export default App
