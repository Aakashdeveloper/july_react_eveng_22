import React from 'react';
import {Link} from 'react-router-dom'

const UserDisplay = (props) => {

    const renderTable = ({userData}) => {
        if(userData){
            return userData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Users</h3></center>
            <Link to="/profile" className="btn btn-info">Profile</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay;