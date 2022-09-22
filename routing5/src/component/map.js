import React, { Component, Fragment } from 'react';
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

const coordsUrl = "https://brewmusepk.herokuapp.com/store";
mapboxgl.accessToken = "pk.eyJ1IjoicGFua2Fqa3VtYXI5OSIsImEiOiJja3RzYjlxemQwYWY2MnBvMzBxczV6bHVyIn0.BlMzug6pTDIMl4kp_2zhqQ";
class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: "",
            filter: "",
            zoom: 3
        }
        this.mapContainer = React.createRef();
    }

    render() {
        return (

            <Fragment>
                <div ref={this.mapContainer} className="map-container" />
            </Fragment>
        )
    }

    componentDidMount() {
        fetch(coordsUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data => {
                this.setState({ coords: data});
                const map = new mapboxgl.Map({
                    container: this.mapContainer.current,
                    style: 'mapbox://styles/pankajkumar99/ckzjk5tnm00db14l9ur49pa15',
                    center: [78.96288, 20.593684],
                    zoom: this.state.zoom
                });
                data.forEach(element => {
                    

                    let latitude = element.lat;

                    let longitude = element.lon;


                    new mapboxgl.Marker({
                        draggable: false,
                        color: "#1a9e1a"
                    })
                        .setLngLat([longitude, latitude])
                        .addTo(map)
                })
            }))
    }

}   

export default Store