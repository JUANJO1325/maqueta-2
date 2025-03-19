import Header from "./componentes/Header";
import LeftPanel from "./componentes/LeftPanel";
import RightPanel from "./componentes/RightPanel";
import "./componentes/Maqueta.css";

const Maqueta = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default Maqueta;