import './App.css';
import BirthdayList from './Components/WrapComponent/BirthdayList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BirthdayList/>
      </div>
    </Provider>
  );
}

export default App;
