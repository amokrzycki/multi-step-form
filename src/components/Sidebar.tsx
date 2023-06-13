import wrapperStyles from "../modules/wrappers.module.css";
import Circle from "./Circle";

const Sidebar = () => {
  return (
    <div id="sidebar-wrapper" className={wrapperStyles.sidebarWrapper}>
      <div>
        <Circle number="1" />
        <div>
          <p>Step 1</p>
          <p>Your info</p>
        </div>
      </div>
      <div>
        <Circle number="2" />
        <div>
          <p>Step 2</p>
          <p>Select Plan</p>
        </div>
      </div>
      <div>
        <Circle number="3" />
        <div>
          <p>Step 3</p>
          <p>Add-ons</p>
        </div>
      </div>
      <div>
        <Circle number="4" />
        <div>
          <p>Step 4</p>
          <p>Summary</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
