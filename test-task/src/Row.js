import React from 'react';
import './App.css';

const Row  = ({users,filteredUsers, handleChange, handleSubmit}) => {
    let usersSearch = users.filter(o => {
        return Object.keys(o).some(k => {
            return o[k].toString().toLowerCase().indexOf(filteredUsers.toLowerCase()) !== -1;
        })
    });

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e)
        }
    }
    return (
        usersSearch.map((user) => (
            <tr key={user.id} onChange={handleChange} onKeyUp={handleKeyUp}>
                <td>
                    <input
                        name="id"
                        type="text"
                        placeholder={user.id}
                        className="input-item"
                    />
                </td>
                <td>
                    <input
                        name="name"
                        type="text"
                        placeholder={user.name}
                        className="input-item"
                    />
                </td>
                <td>
                    <input
                        name="email"
                        type="text"
                        placeholder={user.email}
                        className="input-item"
                    />
                </td>
                <td>
                    <input
                        name="funds"
                        type="text"
                        placeholder={user.funds}
                        className="input-item"
                    />
                </td>
                <td>
                    <input
                        name="cty"
                        type="text"
                        placeholder={user.city}
                        className="input-item"
                    />
                </td>
                <td>
                    <input
                        name="phone"
                        type="text"
                        placeholder={user.phone}
                        className="input-item"
                    />
                </td>
            </tr>
        ))
        )
}

export default Row;
