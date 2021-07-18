import React from 'react'
import './Horarios.css'
function Horarios() {
    return (
        <div className="Horarios">
            <h1>Academy Shedule</h1><br/>
            <div className="spans">
            <span>Meditation</span>
            <span>Body Building</span>
            <span>Yoga</span>
            <span>Running</span>
            <span>Cycling</span>
            </div>
             
            <table>
                <tr className="tr">
                    <td>Mondey</td>
                    <td>10:00am - 2:00pm</td>
                    <td>John Doe</td>
                    <td>Join Now!</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>10:00am - 2:00pm</td>
                    <td>John Doe</td>
                    <td>Join Now!</td>
                </tr>
                <tr>
                    <td>Wedsneday</td>
                    <td>10:00am - 2:00pm</td>
                    <td>John Doe</td>
                    <td>Join Now!</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>10:00am - 2:00pm</td>
                    <td>John Doe</td>
                    <td>Join Now!</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>10:00am - 2:00pm</td>
                    <td>John Doe</td>
                    <td>Join Now!</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>10:00am - 2:00pm</td>
                    <td>John Doe</td>
                    <td>Join Now!</td>
                </tr>
            </table>
        </div>
    )
}

export default Horarios
