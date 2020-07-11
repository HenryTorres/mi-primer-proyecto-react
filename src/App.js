import React from 'react';
import Banner from './Banner';
import Curso from './Curso';

// import logo from './logo.svg';
import './styles/styles.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Esta es mi primera App con React JS!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => <h1>Hola Mundo !!!</h1>
const App = () => (
  <>
    <div className="titulo">
      <Banner />
      <br />
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
);

export default App;
