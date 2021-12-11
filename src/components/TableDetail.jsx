import React from "react";
//components
import TableContent from "./TableContent.jsx";


//Data
let movies = [
    {
        "title": "Billy Elliot",
        "length": "123",
        "rating": "5",
        "genres": ["Drama","comedia"],
        "awards": 2
    },
    {
        "title": "Alicia en el país de las maravillas",
        "length": "142",
        "rating": "4.8",
        "genres": ["Drama","Acción","Comedia"],
        "awards": 3
    }
]

function TableDetail() {
    
return (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Length</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Awards</th>
            </tr>
        </thead>
        
        <tbody>

        <TableContent items={movies}/>
            
        </tbody>
    </table>
        )
}

export default TableDetail