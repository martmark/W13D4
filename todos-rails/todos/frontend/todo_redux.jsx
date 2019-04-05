import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


export const store = configureStore();
window.store = store;
// window.selector = Selectors;

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  // window.store = store;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('content')
  );
});

