import Element from "./components/Element";
import Container from "./components/Container";
import Font from "./components/Font";
import Hidden from "./components/Hidden";
import Ripple from "./components/Ripple";
import Transition from "./components/Transition";
import Flex from "./components/Flex";
import Grid from "./components/Grid";
import Icon from "./components/Icon";
import Button from "./components/Button";
import Alert from "./components/Alert";

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

        <Element margin="2" radius="25px" padding="0 2" bTop="solid 1px green" width=".7" position="fixed" top="0">
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

      <Transition>
        <Ripple>
          <button>Click me</button>
        </Ripple>
      </Transition>

      <Transition name="fade-out">
        <Ripple>
          <button>Click me</button>
        </Ripple>
      </Transition>

      <Transition name="slide-up">
        <Ripple>
          <button>Click me</button>
        </Ripple>
      </Transition>

      <Transition name="shake">
        <Ripple>
          <button>Click me</button>
        </Ripple>
      </Transition>

      <Ripple fromCenter>
        <button>Click me</button>
      </Ripple>

      <Flex>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </Flex>

      <Element border="solid 3px red"><div>1</div></Element>

      <Grid lg={7} sm={3} md={5} rowGap={20} colGap={10}>
        <Element elevation="3"><div>1</div></Element>
        <Element elevation="3"><div>2</div></Element>
        <Element elevation="3"><div>3</div></Element>
        <Element elevation="3"><div>4</div></Element>
        <Element elevation="3"><div>5</div></Element>
        <Element elevation="3"><div>6</div></Element>
        <Element elevation="3"><div>7</div></Element>
      </Grid>

      <Icon name="coffee" />

      <br /><br /><br />

      <Container>
        <Button>Primary</Button>
      </Container>


      <Container style={{ marginTop: "50px" }}>
        <Alert>User added successfully</Alert>
        <Alert color='warning' type='dense' closable>Are you sure ?</Alert>
        <Alert color='success' type='dense' closable>You're logging successfully !</Alert>
        <Alert color='danger' type='dense' closable>An error occurred !</Alert>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Alert color='info'    type='text' fixed vpos='bottom' hpos='left'>User added successfully</Alert>
        <Alert color='warning' type='text' fixed vpos='top' closable hpos='right'>Are you sure ?</Alert>
        <Alert color='success' type='text' fixed hpos='center'>You're logging successfully !</Alert>
        <Alert color='danger'  type='text'>An error occurred !</Alert>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Alert color='info' type='outline'>User added successfully</Alert>
        <Alert color='warning' type='outline'>Are you sure ?</Alert>
        <Alert color='success' type='outline'>You're logging successfully !</Alert>
        <Alert color='danger' type='outline'>An error occurred !</Alert>
      </Container>

      <br /> <br />
    </div>
  );
}

export default App;
