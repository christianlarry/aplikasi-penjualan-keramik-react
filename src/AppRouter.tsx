import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Import page components
import HomePage from "./components/pages/home/HomePage"

const AppRouter = ()=>{
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter