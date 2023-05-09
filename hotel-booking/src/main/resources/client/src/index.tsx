import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const onPerfEntry = (entry: any) => {
    // Log the performance entries
    console.log(entry);
  };

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  

  reportWebVitals(onPerfEntry);
}
