import './App.css';
import AddTask from './redux/AddTask'
import ListTask from './redux/ListTask'
function App() {
  return (
  <div className='App'>
    <AddTask/>
    <ListTask/>
  </div>
  );
}

export default App;
