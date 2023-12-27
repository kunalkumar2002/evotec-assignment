const Subheader = () => {
  return (
    <div
      className="subContainer"
      style={{
        boxShadow: "0px 5px 40px 0px #0000000D",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>Dashbord</div>
      <div>Add News</div>

      <div>Today</div>
      <div>Month</div>
      <div>Year</div>
      <div>Action</div>
      <div>
        <span>+</span>
      </div>
    </div>
  );
};
export default Subheader;

// boxShadow: "0px 5px 40px 0px #0000000D"
