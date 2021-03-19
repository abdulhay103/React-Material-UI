import { Container } from "@material-ui/core";
import "./Style/css/style.css";
import MainRouter from "./Router/MainRouter";
// import Notes from "./Pages/Notes";

function App() {
  return (
    <Container maxWidth={false} className="container">
      <MainRouter />
    </Container>
  );
}

export default App;
