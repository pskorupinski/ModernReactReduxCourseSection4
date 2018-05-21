import _ from 'lodash';
import React from 'react';
import ChartistGraph from 'react-chartist';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <ChartistGraph data={props.data} type={'Line'}/>
            <div>{average(props.data.series[0])} {props.unit}</div>
        </div>
    );
}