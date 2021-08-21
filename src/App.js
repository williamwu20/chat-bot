import MainPage from './pages/MainPage'
import store, { history } from "./store"
import { Provider } from "react-redux"
import actions from './actions'

import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('init app')
    dispatch(actions.initApp())
  })

  return (
    <MainPage />
    // <Provider store={store({})}>
    //   <MainPage />
    // </Provider>
  );
}

export default App;
