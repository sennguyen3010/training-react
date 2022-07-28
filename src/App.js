import logo from './logo.svg';
import './App.css';
//
import DemoFunctionCom from './Components/DemoFunctionCom';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Databinding from './Databinding/Databinding';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';
import BaiTapChonXe from './StateDemo/BaiTap/BaiTapChonXe';

function App() {
  return (
    <div className="App">
      {/* <DemoFunctionCom />
      <DemoClassCom /> */}
      {/* <BaiTapLayout /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <StyleWithJSX /> */}
      <StateDemo />
    </div>
  );
}

export default App;
