import Element from "./components/Element";
import Container from "./components/Container";
import Font from "./components/Font";
import Hidden from "./components/Hidden";

function App() {
  return (
    <div>
      <Container lg="70%" md="80%" sm="95%">
        <Font color="light" background="secondary">
          <h2>Toto</h2>
        </Font>

        <Font weight="thin italic">
          <p>Lorem ipsum dolor sit amet <Font inline weight="bold">consectetur</Font> adipisicing elit. Magni numquam, amet doloribus nisi non inventore, quaerat, eos ea saepe dolorum qui magnam consectetur ad illo dolore nulla delectus similique cupiditate!</p>
        </Font>

        <Element margin="2" radius="25px" padding="0 2" top="solid 1px green" width=".7">
          <div>Hello world</div>
        </Element>

        <Hidden down="md">
          <Font color="primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id nihil dolor ipsam minus dolorem nisi eos. Eius fugiat distinctio, beatae, sequi, voluptatum voluptate in dolore ad dignissimos natus impedit!
         </Font>
        </Hidden>

        <Hidden up="lg">
          <Font color="secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id nihil dolor ipsam minus dolorem nisi eos. Eius fugiat distinctio, beatae, sequi, voluptatum voluptate in dolore ad dignissimos natus impedit!
         </Font>
        </Hidden>

      </Container>
    </div>
  );
}

export default App;
