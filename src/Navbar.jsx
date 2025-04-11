import { useState, useRef } from "react"
import { FaBars } from "react-icons/fa6"
import { links, social } from "./data"
import logo from "./assets/mc-logo.svg"

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  function toggleLinks() {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  }

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
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
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
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
