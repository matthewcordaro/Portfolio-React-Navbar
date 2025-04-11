import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { links, social } from "./data"
import logo from "./assets/mc-logo.svg"
function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => setShowLinks(!showLinks)

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='Matthew Cordaro' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className={
            showLinks ? "links-container" : "links-container hide-container"
          }
        >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url} alt={text}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
