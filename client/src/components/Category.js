import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [category, setcategory] = useState([]);
  const Navigate = useNavigate();
  const { categoryid } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/category/api/v1/categoryinfo`
      )
      .then((res) => {
       setcategory(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = ( id) => {
    Navigate(`/products/category/${id} `);
  };

  return (
    <div>
      <h4 className="text-center">Categories to Shop</h4>

      <div className="row">
        {category.map((ele) => (
          <div
            key={ele.id}
            className="col"
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(ele.id)}
          >
            <img src={ele.image} alt="img" height={"120px"} width={"120px"} />
            <p>{ele.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
