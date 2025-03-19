import "./Maqueta.css";

const Maqueta = () => {
  return (
    <div className="layout">
      <div className="header"></div>
      <div className="content">
        <div className="left-panel"></div>
        <div className="right-panel">
          <div className="top-box"></div>
          <div className="middle-box"></div>
          <div className="bottom-boxes">
            <div className="small-box"></div>
            <div className="small-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maqueta;
