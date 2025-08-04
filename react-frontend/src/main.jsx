import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Medicalchart from './components/Medicalchart';
import Speciliteschart from './components/Specialiteschart';
import Physicians from './components/PhysiciansChart'
import TophospitalList from './components/TophospitalList';
import MarketviewCard from './components/MarketviewCard';
import Demo from './components/Demo';
document.addEventListener('DOMContentLoaded', () => {
const appContainer = document.getElementById('react-app');
const chartContainer = document.getElementById('react-app1');
const specilitescontainer = document.getElementById('react-app2');
const physicians = document.getElementById('react-app3');
const tophospital = document.getElementById('react-app4');
const marketoverview = document.getElementById('react-app5');
const demo = document.getElementById('react-app7');
const yuviraj = document.getElementById('react-app8');
  if (appContainer) {
    const root1 = ReactDOM.createRoot(appContainer);
    root1.render(<App />);
  }

  if (chartContainer) {
    const root2 = ReactDOM.createRoot(chartContainer);
    root2.render(<Medicalchart/>);
  }

  if (specilitescontainer) {
    const root3 = ReactDOM.createRoot(specilitescontainer);
    root3.render(<Speciliteschart/>);
  }
  if (physicians) {
    const root4 = ReactDOM.createRoot(physicians);
    root4.render(<Physicians/>);
  }
  
  if (tophospital) {
    const root5 = ReactDOM.createRoot(tophospital);
    root5.render(<TophospitalList/>);
  }

  if ( marketoverview ) {
    const root6 = ReactDOM.createRoot( marketoverview );
    root6.render(<MarketviewCard/>);
  } if (demo) {
    const root7 = ReactDOM.createRoot(demo);
    root7.render(<Demo/>);
  }
});
