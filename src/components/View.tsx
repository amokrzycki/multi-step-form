import Sidebar from "./Sidebar";
import Form from "./Form";
import styles from "../modules/styles.module.css";

const View = () => {
  return (
    <div id="container" className={styles.container}>
      <div id="view-wrapper" className={styles.viewWrapper}>
        <Sidebar />
        <Form />
      </div>
    </div>
  );
};

export default View;
