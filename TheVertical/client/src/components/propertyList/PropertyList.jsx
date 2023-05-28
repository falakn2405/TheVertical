import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=america,canada,australia"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/279495419.jpg?k=ffdb3415c4abe8a68c19c3f6accef2a09b92e487af2845e9dd9c3fceb5cce34c&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>America</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/178545526.jpg?k=38ccc6b48251d283ade2634b55ee0996b18a1d789ed2d0ff5b219790c13e2d03&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Canada</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/329011593.jpg?k=9dad215f950b6de984ef8388966ac584f27690448fda71a141f27c0fa8bd91ab&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Australia</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;

// import useFetch from "../../hooks/useFetch";
// import "./propertyList.css";

// const PropertyList = () => {
//   const { data, loading, error } = useFetch("/hotels/countByType");

//   const images = [
//     //"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
//     //"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
//    // "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
//    // "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
//    // "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
//   ];
//   return (
//     <div className="pList">
//       {loading ? (
//         "loading"
//       ) : (
//         <>
//           {data &&
//             images.map((img,i) => (
//               <div className="pListItem" key={i}>
//                 <img
//                   src={img}
//                   alt=""
//                   className="pListImg"
//                 />
//                 <div className="pListTitles">
//                  // <h1>{data[i]?.type}</h1>
//                   {/* <h2>{data[i]?.count} {data[i]?.type}</h2> */}
//                 </div>
//               </div>
//             ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default PropertyList;




