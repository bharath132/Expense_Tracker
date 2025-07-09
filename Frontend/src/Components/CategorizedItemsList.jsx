import React, { useEffect, useState } from "react";
import data from "./datas";
import axios from "axios";
import LoadingCircle from "./LoadingCircle";
export const CategorizedItemsList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);
  const HandleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/deleteCategoryList`, {
        data: { id: id },
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        console.log(res);
        FetchData();
        
      });
  };
  const FetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/getCategoriryList`)
      .then((res) => {
        setCategoryList(res.data);
        setLoading(false);
      });
  };
  return (
    
    <>
{ loading ? <LoadingCircle/> :    (<div className="category_container">
      {categoryList.map((list, index) => (
        <div key={index} className="categorize--item">
          <div className="row-info">
            <h3>{list.name}</h3>
            <h5 className={`type ${list.type}`}>{list.type}</h5>
          </div>
          <div className="action">
            <i className="fa-solid fa-pen-to-square edit"></i>
            <i
              className="fa-solid fa-trash del"
              onClick={() => HandleDelete(list._id)}
            >
              {" "}
            </i>
          </div>
        </div>
      ))}
    </div>)}
    </>
  );
};
