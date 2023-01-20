import Home from "./Components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./Components/Display";
function App() {
  return (
    <div >
      <Provider store={store}>
        <Home />
        <Display />
      </Provider>
    </div>
  );
}

export default App;
