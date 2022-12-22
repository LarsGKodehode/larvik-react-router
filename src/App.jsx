// Libraries
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Routes
import LandingPage from './routes/LandingPage'
import AboutPage from './routes/About/AboutPage'
import ContactPage from './routes/Contact/Contact'

// CSS
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Contact' element={<ContactPage />} />

        </Route>


        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App
