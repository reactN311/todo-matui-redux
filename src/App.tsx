import React from 'react'; 
import { Provider} from 'react-redux'; 
import { store } from './state'; 

import './App.css';
import TodoPage from './screens/TodoPage';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
      <header className="App-header">
         <h1>Todo Page</h1>
      </header>
      <TodoPage />
    </div>
    </Provider>
  );
}

export default App;
