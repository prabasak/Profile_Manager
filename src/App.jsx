import ProfileContextProvider from "./store/profile.context";

import "./App.css";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
// import ModalContextProvider from "./store/modal.context";

function App() {

  return (
    <section className="app-container">
      <ProfileContextProvider>
        <Header />
        <Content />
      </ProfileContextProvider>
    </section>
  );
}

export default App;
