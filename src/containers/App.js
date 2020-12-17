import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'

// import { robots } from './robots'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    // fetch the users from url
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users})})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    // destructuring
    const { robots, searchfield } = this.state

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // robots.length === 0 ==> !robots.length

    // we can do if/else with iteranry (? :)
    /*
      return (!robots.length) ?
        <h1 className='tc'>Loading...</h1> :
        (
          <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </div> 
        )
    
    */
    if (!robots.length) {
      return <h1 className='tc'>Loading...</h1>
    } else {
      return(
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div> 
      )
    }
  }
}

export default App