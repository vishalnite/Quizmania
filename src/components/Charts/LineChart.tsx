import ReactEcharts from "echarts-for-react"; 
import { useStyles } from "./ChartStyles";

interface chartType {
    chartTitle: string;
    xdata: string[];
    ydata: number[];
}

export default function LineChart({ chartTitle, xdata, ydata }: chartType) {
    const classes = useStyles();

    const option = {
        title: {
            text: chartTitle,
            left: 'center', 
            top: 'top' 
        },
        xAxis: {
          type: 'category',
          data: xdata,
        },
        yAxis: {
          type: 'value',
          name: 'Score',
          min: 0,
          max: 7,
        },
        series: [
          {
            data: ydata,
            type: 'line'
          }
        ]
      };

    return (
        <div className={classes.chart}>
            <ReactEcharts option={option} />
        </div>
    )
}