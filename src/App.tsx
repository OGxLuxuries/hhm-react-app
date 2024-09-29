import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout.tsx'
import UnderConstruction from './Pages/UnderConstruction.tsx'


function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<UnderConstruction />}/>
        </Route>
      </Routes>
    </Router>

      
    </>
    
  )
}

export default App
