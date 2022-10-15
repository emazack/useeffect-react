import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { List } from './components/List';
import { User } from './modules/Modules';

function App() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])



  return (
    <div className="container mt-2">
      <List users={users} />
    </div>
  );
}

export default App;
