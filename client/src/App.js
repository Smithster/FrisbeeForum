import './App.css';
import Header from './ui/components/Header';
import Home from './ui/pages/Home';
import Settings from './ui/pages/Settings';
import Profile from './ui/pages/Profile';
import Missing from './ui/pages/Missing';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('home')
  var content;
  switch (page) {
    case 'home':
      content = <Home/>
      break;
    case 'settings':
      content = <Settings/>
      break;
    case 'profile':
      content = <Profile/>
      break;
    default:
      content = <Missing/>
      break;
   };

  console.log(page);
  return (
    <div className="App">
      <header className="App-header">
        <Header setPage={setPage}/>
        {content}
      </header>
    </div>
  );
}

export default App;
