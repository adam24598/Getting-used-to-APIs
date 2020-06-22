import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(result.data);
      };
      fetchData();
    }, []);
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    );
}
export default UserList;