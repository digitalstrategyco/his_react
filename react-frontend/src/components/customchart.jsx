import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
 
const colors = [
  "#28464D", "#446B74", "#51808A", "#659BA6",
  "#7CBDCA", "#B0D7DF", "#B0D7DF", "#CBE5EA",
  "#D8EBEF", "#F2F8FA"
];
 
const Customizecharts = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://platform.hospitalintel.com/get/chart/type")
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
      });
  }, []);
 
  return (
    <div className="w-full p-4">
      
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          barCategoryGap={20}
          margin={{ top: 30, right: 30, left: 10, bottom: 50 }}
        >
          <XAxis
            dataKey="region"
            tick={{ fill: "#111827", fontSize: 12 }}
            interval={0}
            angle={0}
            dy={10}
            height={60}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "#fff" }}
            contentStyle={{
              borderRadius: 8,
              borderColor: "#E5E7EB",
              fontSize: 14,
            }}
          />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            <LabelList
              dataKey="count"
              position="top"
              style={{
                fill: "#111827",
                fontSize: 14,
                fontWeight: 500,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
 
export default Customizecharts;
 