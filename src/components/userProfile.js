import React from 'react';

class UserProfile extends React.Component {
  componentWillMount() {
    fetch('http://localhost:3000/users/1/games').then(function(response) {
      console.log(response)
    })
  }

  render() {
    return(
      <div className="user-profile">

      </div>
    )
  }
}

export default UserProfile;
