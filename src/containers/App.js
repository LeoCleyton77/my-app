
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            medabots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ medabots: users })})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { medabots, searchfield } = this.state
        const filterMedabots = medabots.filter(medabots => {
            return (
                medabots.name.toLowerCase().includes(searchfield.toLowerCase())
            )
        })
        return !medabots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">Medabots</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList medabots={filterMedabots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )          
    }
}

export default App;
