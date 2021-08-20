import { Button } from 'antd';
import MainPage from './pages/MainPage'
import store, { history } from "./store"
import { Provider } from "react-redux"

import './App.css';

function App() {
  return (
    <Provider store={store({})}>
      <MainPage />
    </Provider>
  );
}

export default App;
