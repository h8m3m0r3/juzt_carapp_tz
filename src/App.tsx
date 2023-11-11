;
import { Provider } from "react-redux";

import { store } from "./store";
import { Navigation } from "./navigation";

import "./App.scss";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
