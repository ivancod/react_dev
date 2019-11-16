import React from 'react';
import Tabs from './tabs/Tabs.js';
import './App.css';

let tabs = [
  { id: 0, title: "URL Ссылка" },
  { id: 1, title: "WIFI" },
];

class Main extends React.Component{
  render(){
    return (
      <div className="main">
        <Tabs items={ tabs } />
      </div>
    );
  }
}

export default Main;
