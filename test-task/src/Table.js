import React from 'react';
import './App.css';

const Table  = ({children}) => {
    return (
        <div>
            <table id='users' >
                <tbody>
                   {children}
                </tbody>
            </table>

        </div>
    );
}
export default Table;