import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Item.css';
import {ItemContainer} from './components/Item';

const items = [
  {
    icon: "fa-microphone",
    boldNumberText: "36+",
    subText: "unique sessions"
  },
  {
    icon: "fa-user-friends",
    boldNumberText: "12",
    subText: "amazing speakers"
  },
  {
    icon: "fa-utensils",
    boldNumberText: "45",
    subText: "food stalls"
  },
  {
    icon: "fa-book",
    boldNumberText: "2240",
    subText: "available books"
  }
];

function App() {
  return (
    <div className="App">
      <ItemContainer items={items} />
    </div>
  );
}

export default App;
