import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Friends from './Components/Friends/Friends';

function App() {
  const [friends, setFriends] = useState([])
  useEffect( ( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  }), [])

  const [add, setAdd] = useState(0)



  const handleAdd = () => {
    setAdd(add+1)
  }

  const handleRmv = () => {
    if(add>0){
      setAdd(add -1);
    }
  }

  return (
    <div className="App">
    <div className="main">
    {
      friends.map(friend => <Friends friend={friend} handleAdd={handleAdd}></Friends>)
    }
    </div>
    <div>
      <Counter add={add} handleRmv={handleRmv}></Counter>
    </div>
    </div>
  );
}

export default App;
