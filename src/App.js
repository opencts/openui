import Container from "./components/Containers/Container";
import Datatable from "./components/Tables/Datatable";

function App() {

  return (
    <div className="pb-5">
      <Container>
        <div className="mt-5">
          <Datatable collection="users" /> 
        </div>
      </Container>

    </div>
  );
}

export default App;