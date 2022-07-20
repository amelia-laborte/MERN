import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
      firstName = {"Spongebob"} 
      lastName = {"CirclePants"}
      hairColor = {"Yellow"}
      age = {40}/>
    </div>
  );
}

export default App;
