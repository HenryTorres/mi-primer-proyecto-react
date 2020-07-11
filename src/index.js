import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import Banner from './Banner';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = document.getElementById('root');
// const elemento = React.createElement('h1', { className:'principal' }, 'Hola Mundo !!!');
// ReactDOM.render(elemento, root);

// ReactDOM.render(<h1 className='principal'>Hola Mundo !!!</h1>, root);
ReactDOM.render(<App />, root);

// ReactDOM.render(<Banner />, root);

// serviceWorker.unregister();
