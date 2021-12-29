// import React, { Component } from 'react';

// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Pekerjaan</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Edwin</td>
//                         <td>Software Engginer & Wiraswasta</td>
//                     </tr>
//                     <tr>
//                         <td>Bela</td>
//                         <td>Wiraswasta</td>
//                     </tr>
//                     <tr>
//                         <td>Clara</td>
//                         <td>Karyawan Bank</td>
//                     </tr>
//                     <tr>
//                         <td>Ariel</td>
//                         <td>Musisi & Wiraswasta</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

// export default Table

import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nama</th>
                <th>Pekerjaan</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}

export default Table