import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const a:{user: []} = useSelector((state:any) => state);

  console.log(a);

  return (
      <div className="App">
        <header className="App-header">
          <Counter />
          <div className='favorite'>
          </div>
        </header>
      </div>
  );
}

export default App;
