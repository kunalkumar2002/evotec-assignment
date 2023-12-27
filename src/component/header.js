import searcimg from "../assets//search_FILL0_wght400_GRAD0_opsz24.svg";
import fourblock from "../assets/dataset_FILL0_wght400_GRAD0_opsz24.svg";
import shoping from "../assets/shopping_bag_FILL0_wght400_GRAD0_opsz24.svg";
import equalizer from "../assets/equalizer_FILL0_wght400_GRAD0_opsz24.svg";
const Header = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div>
        <img src={searcimg} />
        <img src={equalizer} />
        <img src={shoping} />
        <img src={fourblock} />
      </div>
      <div
        style={{
          color: " #959CB6",
          marginRight: "5px",
        }}
      >
        Nick Thomos
      </div>
      <div
        style={{
          background: "#D7F9EF",
          Width: "50px",
          //   height: "42.12px",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "0em",
            color: "#0BB783",
            padding: "2px",
          }}
        >
          N
        </span>
      </div>
    </div>
  );
};
export default Header;

// width: 12.39px
// height: 31.29px
// top: 21.66px
// left: 1423.92px

// font-family: Poppins;
// font-size: 12px;
// font-weight: 400;
// line-height: 18px;
// letter-spacing: 0em;
// text-align: left;
