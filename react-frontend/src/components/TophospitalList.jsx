import React, { useEffect, useState } from "react";
import axios from "axios";
import Img from '../assets/White.png';
import Img2 from '../assets/white-dot.png';
import Img3 from '../assets/linkimg.png';
import Img4 from '../assets/logo.png';
 
const ownershipColor = (type) => {
  switch (type.toLowerCase()) {
    case "public":
      return "bg-[#E8F3F7] text-[#497E8E]";
    case "private":
      return "bg-[#ECE8F7] text-purple-700";
    case "private - new":
      return "bg-[#ECE8F7] text-purple-700";
    case "other":
      return "bg-[#FCF8E9] text-[#B5A14D]";
    default:
      return "bg-gray-200 text-gray-700";
  }
};
 
const TopHospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://platform.hospitalintel.com/get/chart/tophospitallist")
      .then((res) => {
        const apiData = res.data || [];
        const formattedData = apiData.map((item) => ({
          name: item.facility_name,
          beds: item.beds ? parseInt(item.beds.replace(/,/g, '')) : null,
          ownership: item.ownership,
          emergeScore: parseFloat(item.emerg_score),
          website: item.hospital_website_source,
          logoUrl: Img4,
        }));
        setHospitals(formattedData);
      })
      .catch((err) => {
        console.error("Failed to fetch hospital data", err);
      });
  }, []);
 
  return (
    <div className="p-5 bg-emerald-10 rounded-2xl m-5 shadow">
      hello
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-lg font-semibold">Top Hospital List</h5>
        <div className="flex gap-2">
          <img src={Img} alt="BarChart" className="w-5 h-5" />
          <img src={Img2} alt="dot" className="w-5 h-5" />
        </div>
      </div>
      <div className="overflow-auto border border-[#EEEEEE] rounded">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-[#EEEEEE] border-b">
              <th className="p-3 text-[#AAAAAA] text-base font-normal">FACILITY NAME</th>
              <th className="p-3 text-[#AAAAAA] text-base font-normal">BEDS</th>
              <th className="p-3 text-[#AAAAAA] text-base font-normal">FACILITY OWNERSHIP</th>
              <th className="p-3 text-[#AAAAAA] text-base font-normal">EMERGE SCORE</th>
              <th className="p-3 text-[#AAAAAA] text-base font-normal">WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital, idx) => (
              <tr key={idx} className="border-b border-b-[#EEEEEE]">
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={hospital.logoUrl}
                    alt={hospital.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  {hospital.name}
                </td>
                <td className="p-2">{hospital.beds ?? "-"}</td>
                <td className="p-2">
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${ownershipColor(hospital.ownership)}`}>
                    {hospital.ownership}
                  </span>
                </td>
                <td className="p-2">{hospital.emergeScore}</td>
                <td className="p-2">
                  <a
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-[#468894]"
                  >
                    Open Link
                    <img src={Img3} alt="link" className="ml-2 w-3 h-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default TopHospitalList;