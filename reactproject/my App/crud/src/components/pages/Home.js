import React, { useState, useEffect } from "react";
import axios from "axios";




const Home = () => {
    const [uesrs, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://127.0.0.1:8000/Employee/");
        setUser(result.data.reverse());
    };
    return (
        <div className="container">
            <div className="py-4">
                <h1> Home page </h1>
                <table class="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <thead>
                        {uesrs.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td> {user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                        }
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default Home;