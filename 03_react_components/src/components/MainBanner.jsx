import { Carousel } from "antd";

// 定义图片链接数组，只保留纯文本的 URL
const imageLinks = [
  "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
  "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
  "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
  "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
];

const MainBanner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {imageLinks.map((link, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            height: "160px",
            overflow: "hidden",
          }}
        >
          <img
            src={link}
            alt={`Image ${index + 1}`}
            style={{
              width: "100%", // 图片宽度占满容器
              height: "300px", // 图片高度占满容器
              objectFit: "cover", // 裁剪图片以填充容器
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MainBanner;
