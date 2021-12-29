import React, { Component } from 'react';
// //import './App.css';
// //import './print/Car';
import Table from './Table';

// function App() {
//   return (
//     <div className="container">
//       <Table />
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render() {
    const charvalue = [
      {
        name: 'Wudi',
        job: 'Dokter',
      },
      {
        name: 'Edwin',
        job: 'Software Enginer & Wiraswasta',
      },
      {
        name: 'Clara',
        job: 'Wiraswasta'
      },
      {
        name: 'Dave',
        job: 'Akuntan'
      },
      {
        name: 'Annisa',
        job: 'Dokter'
      },
      {
        name: 'Dinda',
        job: 'Akuntan'
      }
    ]

    return (
      <div className="container">
        <Table characterData={charvalue} />
      </div>
    )
  }
}

export default App
