import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = { series : [cityData.list.map(weather => weather.main.temp)] };
        const pressures = { series : [cityData.list.map(weather => weather.main.pressure)] };
        const humidity = { series : [cityData.list.map(weather => weather.main.humidity)] };
        const { lon, lat } = cityData.city.coord;

        var type = 'Line';

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} unit="K"/></td>
                <td><Chart data={pressures} unit="hPa"/></td>
                <td><Chart data={humidity} unit="%"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}


function mapStateToProps( {weather} ) {
    return { weather }; //  === { weather: weather }
}


export default connect(mapStateToProps)(WeatherList);