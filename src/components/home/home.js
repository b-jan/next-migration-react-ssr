import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the Home page!</h1>
        <div>
          <ul className="home-list">
            {this.props.users.map(user =>
              <li key={user.id}>
                <img src={user.avatar_url} alt="{user.login}" />
                <p>{user.login}: {user.contributions}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
