import React, {Component} from 'react'

class Nav extends Component {

  render() {
    //TODO: figure out how to reenable fixed scrolling at page top
    return (
      <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a className="link dim white dib mr3" href="/" title="Home">Home</a>
          <a className="link dim white dib mr3" href="#" title="About">My Questions</a>
        </nav>
      </header>
    );
  }
}

export default Nav
