import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios';


import Layout from './layout'
import Navbar from './Components/Navbar/Navbar'
import rootReducer from './stores/rootReduces'

axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Layout />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
