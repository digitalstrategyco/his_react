import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
 
const colors = ["#cbe5ea", "#96CAD5", "#659BA6", "#4E7982", "#37575E"];
 
const Medicalchart = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://platform.hospitalintel.com/get/chart/totalmedicaldevice")
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error loading chart data:", err);
      });
  }, []);
 
  const actualMax = Math.max(...data.map((item) => item.facilities), 0);
  const maxValue = Math.ceil(actualMax * 1.15);
 
  return (
    <div className="w-full p-4">
      
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
          barCategoryGap={20}
        >
          <XAxis type="number" domain={[0, maxValue]} hide />
          <YAxis
            type="category"
            dataKey="device"
            axisLine={false}
            tickLine={false}
            tick={false}
            width={0}
          />
          <Tooltip
            cursor={{ fill: "#fff" }}
            contentStyle={{
              borderRadius: 8,
              borderColor: "#E5E7EB",
              fontSize: 14,
            }}
          />
          <Bar
            dataKey="facilities"
            radius={[6, 6, 6, 6]}
            barSize={34}
            background={{ fill: "#E5E7EB" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
 
          {/* Custom Labels */}
          {data.map((entry, index) => {
            const barHeight = 70;
            const barGap = 20;
            const chartTopMargin = 39;
            const yPos = chartTopMargin + index * (barHeight + barGap);
 
            return (
              <g key={`label-${index}`}>
                <text
                  x={50}
                  y={yPos}
                  dy={-6}
                  fill="#374151"
                  fontSize={13}
                  fontWeight={500}
                >
                  {entry.device}
                </text>
                <text
                  x="96%"
                  y={yPos}
                  dy={-6}
                  textAnchor="end"
                  fill="#111827"
                  fontSize={13}
                  fontWeight={500}
                >
                  {entry.facilities}
                </text>
              </g>
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
 
export default Medicalchart;
 