import './App.css';
import Button from './ui/components/Button'
import Popup from './ui/components/Popup';
import Header from './ui/components/Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Button/>
        <Popup/>
        
      </header>
    </div>
  );
}

export default App;
