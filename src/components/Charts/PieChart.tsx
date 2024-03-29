import ReactEcharts from "echarts-for-react"; 
import { useStyles } from "./ChartStyles";

interface chartType {
    data: object[],
    colors: string[]
}

export default function PieChart({data, colors} : chartType) {
    const classes = useStyles();

    const option = {
      title: {
        text: 'Response',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '65%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          itemStyle: {
            color: (params: any) => {
              return colors[params.dataIndex];
            }
          }
        }
      ]
    };

    return (
        <div className={classes.chart}>
            <ReactEcharts option={option} />
        </div>
    )
}