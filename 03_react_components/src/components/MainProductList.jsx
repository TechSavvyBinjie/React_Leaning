import Cards1 from "./Cards1";
const MainProductList = () => {
  const products = [
    {
      name: "name1",
      image1:
        "https://ts1.cn.mm.bing.net/th/id/R-C.be317c033b37a5d4a55c52b5e3c6011a?rik=oiVjGv24LuBiVw&riu=http%3a%2f%2fsc.68design.net%2fqita7%2fHolidayBeach%2fimages%2fHKSL_002011.jpg&ehk=ZflMrIfRmMZzGZPl6TTVo4TKUis0M%2fSAU42YAykxnMs%3d&risl=&pid=ImgRaw&r=0",
      image2:
        "https://ts1.cn.mm.bing.net/th/id/R-C.be317c033b37a5d4a55c52b5e3c6011a?rik=oiVjGv24LuBiVw&riu=http%3a%2f%2fsc.68design.net%2fqita7%2fHolidayBeach%2fimages%2fHKSL_002011.jpg&ehk=ZflMrIfRmMZzGZPl6TTVo4TKUis0M%2fSAU42YAykxnMs%3d&risl=&pid=ImgRaw&r=0",
      text1: "Description ",
      text2: "Additional info ",
    },
    {
      name: "name2",
      image1:
        "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
      image2:
        "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
      text1: "Description ",
      text2: "Additional info ",
    },
    {
      name: "name3",
      image1:
        "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
      image2:
        "https://pic2.zhimg.com/v2-bff3ad66aa4b756a9241646d35274061_r.jpg",
      text1: "Description ",
      text2: "Additional info ",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "300px",
        marginRight: "300px",
        marginTop: "30px",
      }}
    >
      {products.map((item, index) => (
        <Cards1 key={index}>
          <img src={item.image1} style={{ width: "300px", height: "200px" }} />
          <img
            src={item.image2}
            style={{ width: "100px", height: "100px", borderRadius: "50px" }}
          />
          <div style={{ width: "200px", height: "100px" }}>
            <h3>{item.text1}</h3>
            <h4>{item.text2}</h4>
          </div>
        </Cards1>
      ))}
    </div>
  );
};
export default MainProductList;
