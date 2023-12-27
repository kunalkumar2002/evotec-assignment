import styles from "../styles/home.module.css";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import Subheader from "../component/Subheader";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.subHeader}>
          <Subheader />
        </div>
        <div className={styles.container1}>
          <div className={styles.box}>box1</div>
          <div className={styles.box}>box2</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
