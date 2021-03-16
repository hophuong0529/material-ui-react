import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "#e1e1e1 thin solid",
    height: "100%",
    padding: "35px 0px 15px 30px",
    background: "#fcfcfc",
  },
  contact: {
    marginTop: 15,
    marginLeft: "40%",
    fontWeight: "bold",
    fontSize: 16,
    color: "#d53b71",
  },
  province: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className="footer">
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={4}>
          <div style={{ textAlign: "center" }}>
            <Link to="/">
              <img src={logo} alt="" style={{ width: 120, height: 46.05 }} />
            </Link>
          </div>
          <div className={classes.contact}>
            <span>
              Hotline: 0899.179.989
              <br />
              Email: cskh@moji.vn
            </span>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div>
            <p className={classes.province}>
              HÀ NỘI (9-21h)
            </p>
            <ul>
              <li>81 Bà Triệu, Hai Bà Trưng</li>
              <li>241 Chùa Bộc, Đống Đa</li>
              <li>60 Trần Đại Nghĩa, Hai Bà Trưng</li>
              <li>226 Nguyễn Trãi, Nam Từ Liêm (gần ĐH Hà Nội)</li>
              <li>157 Xuân Thủy, Cầu Giấy</li>
              <li>7 ngõ 165 Thái Hà, Đống Đa</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div>
            <p className={classes.province}>
              TP. HỒ CHÍ MINH (9h30 - 22h)
            </p>
            <ul>
              <li>92 Hồ Tùng Mậu, P.Bến Nghé, Q1</li>
              <li>459E Nguyễn Đình Chiểu, P.5, Q.3 (ngã tư Cao Thắng)</li>
              <li>708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)</li>
              <li>87 Bàu Cát, P.14, Q.Tân Bình (khúc giao Nguyễn Hồng Đào)</li>
              <li>
                54A Hoa Lan, P.2, Q.Phú Nhuận (gần Pizza Hut Phan Xích Long)
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
