import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxCode from './components/ReduxCode';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ReduxCode />
    </Provider>
  );
}

export default App;
