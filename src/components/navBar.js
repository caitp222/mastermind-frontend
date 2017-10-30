import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li><a>Login</a></li>
        <li><a>Logout</a></li>
        <li><a>Profile</a></li>
        <li><a>New Game</a></li>
      </ul>
    )
  }
}

export default NavBar;
