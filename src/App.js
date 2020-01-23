import React, { useState, useEffect } from "react";
import "./App.css";
import sculptureVideo from "./videos/sculpture.mp4";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://orangevalleycaa.org/api/videos";
    const fetchData = async () => {
      const result = await fetch(url).then(response => response.json());
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="">
        <h1>Videos</h1>
      </header>

      <div>
        <video src={sculptureVideo} controls height={200}></video>
      </div>

      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url}></video>
        </div>
      ))}
    </div>
  );
}

export default App;
