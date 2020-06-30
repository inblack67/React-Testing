import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxCode from './components/ReduxCode';
import { Provider } from 'react-redux'
import store from './store'
import UseEffectCycle from './components/UseEffectCycle';

function App() {
  return (
    <Provider store={store}>
      <ReduxCode />
      <UseEffectCycle />
    </Provider>
  );
}

export default App;
