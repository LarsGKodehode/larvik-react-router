import {
  Outlet,
  Link
} from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <header>
        <h1>Root page</h1>
        
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default LandingPage