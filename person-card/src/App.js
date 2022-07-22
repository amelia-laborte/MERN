import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
      firstName = {"Spongebob"} 
      lastName = {"CirclePants"}
      hairColor = {"Yellow"}
      age = {40}
      buttonText = {"Sunlight makes me older"}/>
      <Person 
      firstName = {"Patrick"} 
      lastName = {"Moon"}
      hairColor = {"White"}
      age = {41}
      buttonText = {"Sunscreen makes me older"}/>
      <Person 
      firstName = {"Squidward"} 
      lastName = {"Oblong"}
      hairColor = {"Luscious Brown"}
      age = {42}
      buttonText = {"Spongebob and Patrick make me older"}/>
    </div>
  );
}

export default App;
