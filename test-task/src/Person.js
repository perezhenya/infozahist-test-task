import React from 'react';
import './App.css';
import axios from 'axios';
import Row from './Row';
import Table from './Table';
import Header from "./Header";
import SearchBar from "./SearchBar";

class Person extends React.Component {
    state = {
        users: [],
        filteredUsers: '',
        id: Number,
        name: '',
        email: '',
        funds: '',
        city: '',
        phone: '',
        count: 1,
    }

    handleInput = (e) => {
        this.setState({
            filteredUsers: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)  =>  {
        e.preventDefault();
        axios({
            method: 'put',
            url: 'http://localhost:8080/update/:id',
            data: {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                funds: this.state.funds,
                city: this.state.city,
                phone: this.state.phone,
            }
        })
    };

    componentDidMount() {
        axios.get('http://localhost:8080')
            .then( response => {
                    this.setState({
                        users: response.data.data,
                        count: response.data.count
                    })
                }
            )
    }

    render() {
        const {
            handleInput,
            handleSubmit,
            handleChange
        } = this;
        const {users,filteredUsers} = this.state;
        return (
            <div className="App">
                <SearchBar handleInput={handleInput}/>
              <Table >
                  <Header users={users}/>
                  <Row
                      handleSubmit={handleSubmit}
                      users={users}
                      filteredUsers={filteredUsers}
                      handleChange={handleChange}
                  />
              </Table>
            </div>
        );
    }
}

export default Person;
