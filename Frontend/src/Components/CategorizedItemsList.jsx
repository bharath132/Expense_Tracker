import React, { useEffect, useState } from "react";
import data from "./datas";
import axios from "axios";
export const CategorizedItemsList = () => {
  const [categoryList,setCategoryList]=useState([])
  const appurl = import.meta.env;  
  useEffect(()=>{
    axios.get('http://localhost:3000/getCategoriryList').then((res)=>{
      setCategoryList(res.data)
      console.log(appurl)
    })
    console.log('dwjh')
  },[])
  return (
    <div className="category_container">
      {categoryList.map((list,index) => (
        <div key={index} className="categorize--item">
          <div className="row-info">
            <h3>{list.name}</h3>
            <h5 className={`type ${list.type}`}>{list.type}</h5>
          </div>
          <div className="action">
            <i className="fa-solid fa-pen-to-square edit"></i>
            <i className="fa-solid fa-trash del"></i>
          </div>
        </div>
      ))}
      {/* <div className="categorize--item">
        <div className="row-info">
          <h3>Salary</h3>
          <h5 className="type income">Income</h5>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen-to-square edit"></i>
          <i className="fa-solid fa-trash del"></i>
        </div>
      </div>
      <div className="categorize--item">
        <div className="row-info">
          <h3>Food</h3>
          <h5 className="type">Expense</h5>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen-to-square edit"></i>
          <i className="fa-solid fa-trash del"></i>
        </div>
      </div>
      <div className="categorize--item">
        <div className="row-info">
          <h3>Salary</h3>
          <h5 className="type income">Income</h5>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen-to-square edit"></i>
          <i className="fa-solid fa-trash del"></i>
        </div>
      </div>
      <div className="categorize--item">
        <div className="row-info">
          <h3>Food</h3>
          <h5 className="type">Expense</h5>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen-to-square edit"></i>
          <i className="fa-solid fa-trash del"></i>
        </div>
      </div>
      <div className="categorize--item">
        <div className="row-info">
          <h3>Salary</h3>
          <h5 className="type income">Income</h5>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen-to-square edit"></i>
          <i className="fa-solid fa-trash del"></i>
        </div>
      </div>
      <div className="categorize--item">
        <div className="row-info">
          <h3>Food</h3>
          <h5 className="type">Expense</h5>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen-to-square edit"></i>
          <i className="fa-solid fa-trash del"></i>
        </div>
      </div> */}
    </div>
  );
};
