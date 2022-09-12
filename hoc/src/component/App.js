import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const stocks = [
  {
      id: 1,
      name: 'TCS'
          
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
]

const Users = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
]

let StockComponent = Hoc(StockList,stocks)
let UserComponent = Hoc(UserList,Users)

class App extends Component {
  
  render() {
    return (
      <div>
        <StockComponent/>
        <UserComponent/>
      </div>
    )
  }
}

export default App;