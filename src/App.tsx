import './App.css';
import Add from './components/Add';
import List from './components/List';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Add />
          <List />
        </Provider>
      </header>

    </div>
  );
}

export default App;
