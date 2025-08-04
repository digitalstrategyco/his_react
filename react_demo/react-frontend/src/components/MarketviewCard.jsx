import React, { useEffect, useState } from "react";
import Icon1 from "../assets/emergency-bed.png";
import Icon2 from "../assets/White-10.png";
import Icon3 from "../assets/White-11.png";
import Icon4 from "../assets/White-12.png";
import Icon5 from "../assets/White-9.png";
import Icon6 from "../assets/first-aid-kit.png";
import Icon7 from "../assets/stethoscope.png";
import Icon8 from "../assets/White-2.png";
 
const cardMeta = [
  {
    key: "total_market_potential",
    title: "Market size",
    icon: Icon5,
    trend: "6.8%",
    trendIcon: Icon2,
    trendColor: "text-success",
    note: "from last week",
  },
  {
    key: "total_hospitals",
    title: "Hospital",
    icon: Icon8,
    trend: "6.8%",
    trendIcon: Icon2,
    trendColor: "text-success",
    note: "from last week",
  },
  {
    key: "total_icu_beds",
    title: "ICU Bed",
    icon: Icon1,
    trend: "5.8%",
    trendIcon: Icon3,
    trendColor: "text-danger",
    note: "from last week",
  },
  {
    key: "total_ors",
    title: "Operating Room",
    icon: Icon4,
    trend: "6.8%",
    trendIcon: Icon2,
    trendColor: "text-success",
    note: "from last week",
  },
  {
    key: "total_penetrated_facilities",
    title: "Medical Device",
    icon: Icon7,
    trend: "6.8%",
    trendIcon: Icon2,
    trendColor: "text-success",
    note: "from last week",
  },
  {
    key: "total_doctors",
    title: "Physicians",
    icon: Icon6,
    trend: "6.8%",
    trendIcon: Icon3,
    trendColor: "text-danger",
    note: "from last week",
  },
];
 
const MarketviewCard = () => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    // Update to match your actual API route
    fetch("https://platform.hospitalintel.com/get/chart/marketoverview")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to fetch market overview data", err));
  }, []);
 
  return (
    <div className="w-full p-4 bg-gray-100">
      
      <div className="gap-4" style={{ display: "flex", flexWrap: "wrap" }}>
        {cardMeta.map((card, index) => (
          <div
            className="col-lg-4 col-md-6 col-12"
            key={index}
            style={{ flex: "1 0 30%", minWidth: "30%" }}
          >
            <div className="bg-gray-50 h-full border-0 shadow-sm rounded-lg p-5 w-full">
              <div className="flex justify-between items-start mb-3">
                {/* Left: icon + title + value */}
                <div>
                  <div className="flex items-center gap-2">
                    <img
                      src={card.icon}
                      alt={card.title}
                      style={{ width: 20, height: 20 }}
                      className="icon-hover"
                    />
                    <p className="mb-0 font-semibold text-[#666666] text-sm">
                      {card.title}
                    </p>
                  </div>
                  <h3 className="font-bold mt-3 text-hover text-2xl text-gray-800">
                    {data ? formatValue(card.key, data[card.key]) : "Loading..."}
                  </h3>
                </div>
 
                {/* Right: trend + note */}
                <div className="text-right ms-5 mt-2">
                  <div
                    className={`rounded-4xl p-1 ms-2 d-inline-flex align-items-center gap-1 ${
                      card.trendColor === "text-success"
                        ? "bg-[#E9F4EC] text-[#46947D]"
                        : card.trendColor === "text-danger"
                        ? "bg-[#FFEAE5] text-[#F53434]"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <img
                      src={card.trendIcon}
                      alt="trend-icon"
                      className="ms-4"
                      style={{ width: 20, position: "absolute" }}
                    />
                    {card.trend}
                  </div>
                  <p className="mb-0 fw-semibold text-[#666666] small">{card.note}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
function formatValue(key, value) {
  if (key === "total_market_potential") {
    const num = Number(value);
    return num >= 1e9 ? `${(num / 1e9).toFixed(1)} B` : num.toLocaleString();
  }
  return value;
}
 
export default MarketviewCard;