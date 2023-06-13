import styles from "../modules/styles.module.css";

const Sidebar = () => {
  return (
    <div id="sidebar-wrapper" className={styles.sidebarWrapper}>
      <div>
        <button>1</button>
        <div>
          <p>Step 1</p>
          <p>Your info</p>
        </div>
      </div>
      <div>
        <button>2</button>
        <div>
          <p>Step 2</p>
          <p>Your info</p>
        </div>
      </div>
      <div>
        <button>3</button>
        <div>
          <p>Step 3</p>
          <p>Your info</p>
        </div>
      </div>
      <div>
        <button>4</button>
        <div>
          <p>Step 4</p>
          <p>Your info</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
