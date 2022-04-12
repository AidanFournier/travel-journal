import React from "react"
import Pin from "../images/pin.png"


export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.imageUrl}`} className="card--image" alt="location" />
            <div className="card--info">
                <div className="info-location">
                    <img src={Pin} className="location-pin" alt="location pin" />
                    <p className="location">{props.location}</p>
                    <p><a href={`${props.googleMapsUrl}`} className="map-link">View on Google Maps</a></p>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}