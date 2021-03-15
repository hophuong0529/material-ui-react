import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/images/banner-1.jpg";
import banner2 from "../../../assets/images/banner-2.jpg";
import banner3 from "../../../assets/images/banner-3.jpg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Brand() {
  return (
    <div className="banner" style={{ marginBottom: 30 }}>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption style={{ color: "black" }}>
            <Card
              variant="outlined"
              style={{
                padding: 10,
                borderRadius: 20,
                background: "rgb(255,255,255,0.5)",
              }}
            >
              <CardContent>
                <h4
                  style={{ fontFamily: "Roboto, sans-serif", marginBottom: 15 }}
                >
                  TẠI SAO BẠN NÊN CHỌN MOJY?
                </h4>
                <p style={{ fontFamily: "Roboto, sans-serif" }}>
                  Ở MOJY, chúng tôi luôn cố gắng hết sức để làm hài lòng quý
                  khách.
                  <br />
                  Không chỉ là những thiết kế trong những bộ sưu tập, chúng tôi
                  còn đem đến cho bạn trải nghiệm may đo cùng nhà thiết kế,
                  <br /> hay chỉnh sửa những chi tiết trên một thiết kế, lắng
                  nghe những ý tưởng của bạn để phù hợp nhất với người mặc.
                  <br />
                  Hãy đến với MOJY và chúng tôi tự tin sẽ mang đến cho bạn những
                  trải nghiệm tuyệt với nhất với thời trang!
                </p>
              </CardContent>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
