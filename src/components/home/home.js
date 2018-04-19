import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    fetch('https://api.github.com/repos/' + this.props.repo + '/contributors')
      .then(response => response.json()).then((users) => {
        this.setState({
          users: users
        });
      });
  };

  render() {
    return (
      <div>
        <h1>This is the Home page!</h1>
        <div>
          <ul className="home-list">
            {this.state.users.map(user =>
              <li>
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
