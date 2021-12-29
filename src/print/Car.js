import React from 'react';

// class Car extends React.Component {
//     render() {
//         return <h2>Hi, My Name Is Edwin Auliano Casanova</h2>
//     }
// }

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Honda HR-V',
            model: 'Persisteg',
            color: 'Silver',
            year: 2020
        };
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand} </h1>
                <p>
                    It is a {this.state.color},  {this.state.model}  from {this.state.year}.
                    <br/>
                    Koe mobile opo ? mersi opo bmw opo ferari
                </p>
            </div>
        );
    }
}
export default Car;