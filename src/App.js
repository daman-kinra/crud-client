import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "./axios/axios";
import Home from "./page/Home";

function App() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const res = await axios.get("read");
    setData(res.data);
  }, []);

  const createData = useCallback(
    (val) => {
      console.log(val);
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post("create", val);
          setData((prev) => [...prev, res.data]);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    [data]
  );

  const deleteData = useCallback(
    (id) => {
      return new Promise(async (resolve, reject) => {
        console.log(id);
        try {
          const res = await axios.delete(`delete/${id}`);
          const newArr = data.filter((item) => item._id !== id);
          setData(newArr);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    [data]
  );

  const updateData = useCallback(
    async (val) => {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.put(`update/${val._id}`, val);
          const index = data.findIndex((item) => item._id === val._id);
          const arr = data;
          arr[index] = val;
          setData(arr);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    [data]
  );

  const deleteMultipe = useCallback(
    async (val) => {
      const res = await axios.delete(`deleteMultiple`, { data: { list: val } });
      console.log(res.data);
    },
    [data]
  );

  return (
    <div className="app">
      {data ? (
        <Home
          data={data}
          updateData={updateData}
          deleteMultipe={deleteMultipe}
          deleteData={deleteData}
          createData={createData}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default React.memo(App);
