import { ReactComponent as DoubleArrow } from "../assets/keyboard_double_arrow_left_FILL0_wght400_GRAD0_opsz24.svg";

const Sidebar = () => {
  return (
    <div
      className="container"
      style={{ color: "white", background: "#1B1B28" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3>DASHBORD</h3>
        <DoubleArrow fill="#6993FF" stroke="#6993FF" />
      </div>

      <div style={{ background: "#1B1B28" }}>
        <h6>Dashbord</h6>
      </div>
      <div
        style={{
          marginBottom: "30px",
          color: "#4A4B68",
          fontWeight: "400px",
          fontSize: "12px",
          lineHeight: "18px",
        }}
      >
        custom
      </div>
      <div>
        <div>Applications</div>
        <ul
          style={{
            listStyle: "none",
            color: "#888C9F",
            // fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "18px",
            letterSpacing: "0em",
            textAlign: "leeft",
          }}
        >
          <li>Users</li>
          <li>Contacts</li>
          <li>Chat</li>
          <li>Pages</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
