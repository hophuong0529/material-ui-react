import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <div className="sidebar-menu">
      <ul className="tree-menu">
        <li className="tree-menu-lv1">
          <Link to="/products" className="tp_title">
            Sản phẩm
            <span className="icon-control" style={{ marginLeft: 10 }}>
              <RemoveIcon />
            </span>
          </Link>
        </li>
        <ul className="tree-menu-sub">
          {categories.map((category) => (
            <li>
              <span></span>
              <Link to={"/category/" + category.id} className="tp_sub_title">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
