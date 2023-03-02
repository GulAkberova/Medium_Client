import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './slice'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


const store=configureStore({
  reducer:{
    authReducer: authReducer
  }
})


root.render(
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
    <Provider store={store}>
    <App />
    </Provider>
    </StyledEngineProvider>
    </BrowserRouter>
);

