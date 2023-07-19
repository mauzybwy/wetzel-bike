import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px"
      }}
    >
      <h2>
        where's brandon?
      </h2>
      <div
        style={{
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "2px solid #E06C4E",
          gap: "16px"
        }}
      >
        <a
          href="https://track.myzoleo.com/new/livelocation?79xCljlYSt"
          target="_blank"
        >
          <h1>
            track me live!
          </h1>
        </a>
        <a
          href="tel:+19895850205"
          target="_blank"
        >
          <h2>
            +1 (989)-585-0205
          </h2>
        </a>
      </div>
    </div>
  );
}

export default App;
