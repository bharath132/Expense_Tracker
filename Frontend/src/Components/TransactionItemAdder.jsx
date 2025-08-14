import axios from "axios";
import React, { useEffect, useState } from "react";
export const TransactionItemAdder = ({
  sendDataToParent,
  EditData,
  HandleEditData,
}) => {
  const [name, setName] = useState({ name: "food", type: "income" });
  const [categoryList, setcategoryList] = useState([]);
  const handleSave = async () => {
    console.log();

    if (EditData) {
      await axios
        .put(`${import.meta.env.VITE_API_URL}/updateTranscationList`, {
          id: EditData._id,
          name: name.name,
          desc: name.desc,
          type: name.type,
          amount: name.amount,
        })
        .then((result) => {
          console.log(result);
          sendDataToParent(true);
          HandleEditData(null); // Reset edit data after saving
        });
    } else {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/createTranscationList`, {
          name: name.name,
          desc: name.desc,
          type: name.type,
          amount: name.amount,
        })
        .then((result) => {
          console.log(result);
          sendDataToParent(true);
          HandleEditData(null); // Reset edit data after saving
        });
    }
  };
  const LoadData = async () => {
    if (EditData) {
      await axios
        .get(`${import.meta.env.VITE_API_URL}/getCategoriryList`)
        .then((res) => {
          setcategoryList(res.data);
        });

      setName({ ...EditData });
    } else {
      axios
        .get(`${import.meta.env.VITE_API_URL}/getCategoriryList`)
        .then((res) => {
          setcategoryList(res.data);
          setName({ ...name, name: res.data[0].name, type: res.data[0].type });
        });
    }
  };
  useEffect(() => {
    console.log("useEffect called");
    console.log(EditData);
    LoadData();
    // If EditData is not null, populate the form with the edit data
  }, []);
  const HandleCategory = (e) => {
    setName({ ...name, name: e.target.value });
    console.log(categoryList[1].name.includes("salary"));
  };
  // const categoryList=['food','travel']
  return (
    <div className="categoryAdd-container">
      {/* <input
      type="text"
      placeholder="Enter Category Name"
      onChange={(e) => setName({...name,name:e.target.value})}
    /> */}
      <select
        name=""
        id=""
        value={name.name}
        placeholder="Enter Category Name"
        onChange={HandleCategory}
      >
        {categoryList.map((list, index) => (
          <option value={list.name} key={index}>
            {list.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Description Name"
        value={name.desc || ""}
        onChange={(e) => setName({ ...name, desc: e.target.value })}
      />
      <select
        value={name.type}
        onChange={(e) => {
          setName({ ...name, type: e.target.value });
        }}
      >
        <option value="Income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        placeholder="Enter Amount"
        value={name.amount || ""}
        onChange={(e) => setName({ ...name, amount: e.target.value })}
      />
      <div className="btns">
        <button
          className="btn--secondary"
          onClick={() => {
            sendDataToParent(true);
            HandleEditData(null); // Reset edit data when canceling
          }}
        >
          cancel
        </button>
        <button className="addbtn" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};
