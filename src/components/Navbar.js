import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.text}`} style={{fontFamily:'Allerta Stencil'}}href="/" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.text}`} style={{fontFamily:'Allerta Stencil'}} aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="darkmode" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.text}`} style={{fontFamily:'Allerta Stencil'}} for="flexSwitchCheckDefault">Enable Gradient Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired
}