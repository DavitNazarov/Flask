import React, { useEffect } from "react";
import { useState } from "react";
import { getHomeData } from "../API/Api";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getHomeData().then((res) => setData(res.message));
  }, []);

  return (
    <div>
      <h1>Home Page!</h1>
      {data}
    </div>
  );
};

export default Home;
