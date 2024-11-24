import React, { useEffect } from "react";
import { useState } from "react";
import { getData } from "../API/Api";

const Data = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getData().then((res) => setData(res.message));
  }, []);
  return (
    <div>
      <h1>Some Data Page! </h1>
      {data}
    </div>
  );
};

export default Data;
