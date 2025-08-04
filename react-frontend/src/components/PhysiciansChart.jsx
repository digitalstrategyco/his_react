import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
 
const Physicians = () => {
  const [chartData, setChartData] = useState([]);
  const [maxValue, setMaxValue] = useState(1000);
 
  useEffect(() => {
    axios
      .get("https://platform.hospitalintel.com/get/chart/topspecialist")
      .then((res) => {
        const data = res.data?.data || [];
        const max = res.data?.max || 1000;
        setChartData(data);
        setMaxValue(max);
      })
      .catch((err) => {
        console.error("Failed to fetch chart data:", err);
      });
  }, []);
 
  const option = {
    title: {
      text: "Facilities With Basic Specialities",
      left: "center",
      top: 10,
      textStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "#fff",
      borderColor: "#eee",
      borderWidth: 1,
      textStyle: {
        color: "#111",
        fontSize: 14,
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "15%",
      top: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: Array.isArray(chartData) ? chartData.map((item) => item.label) : [],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        interval: 0,
        rotate: 0,
        color: "#111827",
        fontSize: 12,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: maxValue,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E5E7EB",
        },
      },
      axisLabel: {
        color: "#6B7280",
        fontSize: 12,
      },
    },
    series: [
      {
        name: "Facilities",
        type: "bar",
        data: Array.isArray(chartData)
          ? chartData.map((item) => item.value)
          : [],
        barWidth: "80%",
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          color: "#418391",
        },
      },
    ],
  };
 
  return (
    <ReactECharts
      option={option}
      style={{ height: 500, width: "50%" }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};
 
export default Physicians;