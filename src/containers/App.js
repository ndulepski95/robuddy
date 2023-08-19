import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
/*const state = {
    robots: robots,
    searchField: ''
} has been moved into App*/


class App extends Component {
    //Lets add state with this constructor
    constructor() {
        super()
        this.state = {
           robots: [],
           searchField: '' 
        }
    }

    componentDidMount() {
        
        //this refers back to our empty robots array
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> 
            response.json())
        //we fetch the api and it uploads user data to our page
        .then(users => {
            this.setState({ robots: users })
            //setState updates our users

        });
    }


    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })


    }


    render() {
        //destructure this. state
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (!robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robuddies</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll><CardList robots={filteredRobots} />
                    </Scroll>
                    
                </div>
            )
        }
  //All we're doing here is saying, look, if it's takes a while show a message to our end user. Otherwise mount our page
    }
}

    export default App;

    //Personal Notes...
    //How did this teach us about 'state' in react?