import React from 'react';
import ChartBar from './ChartBar';
import classes from './Chart.module.css';

/**
 * @author
 * @function Chart
 **/

const Chart = (props) => {
    //aca transforma el array en solo numeros
  const dataPointsValues = props.dataPoints.map(dataPoint =>  dataPoint.value)
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className={classes.Chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
