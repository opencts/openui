import Element from "./components/Containers/Element";
import Container from "./components/Containers/Container";
import Font from "./components/Fonts/Font";
import Hidden from "./components/Containers/Hidden";
import Ripple from "./components/Animations/Ripple";
import Transition from "./components/Animations/Transition";
import Flex from "./components/Containers/Flex";
import Grid from "./components/Containers/Grid";
import Icon from "./components/Fonts/Icon";
import Button from "./components/Forms/Button";
import FloatingButton from "./components/Forms/FloatingButton";
import Input from "./components/Forms/Input";
import Search from "./components/Forms/Search";
import { useState } from "react";
import Select from "./components/Forms/Select";
import Password from "./components/Forms/Password";
import Checkbox from "./components/Forms/Checkbox";
import Birthday from "./components/Forms/Birthday";
import Alert from './components/Dialogs/Alert';
import Upload from "./components/Forms/Upload";
import ProgressBar from "./components/Progress/ProgressBar";
import Card from "./components/Cards/Card";
import CardContent from "./components/Cards/CardContent";
import CardMedia from "./components/Cards/CardMedia";
import CardTitle from "./components/Cards/CardTitle";
import CardSubTitle from "./components/Cards/CardSubTitle";
import CardAvatar from "./components/Cards/CardAvatar";
import CardAction from "./components/Cards/CardAction";

const contentText = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. Lorem Ipsum has 
been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting, remaining essentially 
unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently 
with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum.`

function App() {

  const [v, setV] = useState('');

  const musicCard = {
    cardSize: { width: "400px", height: "250px" },
    content: { display: "flex", flexWrap: "nowrap", justifyContent: "center" },
    musicButton: {display: "flex", justifyContent: "space-between", marginTop: "30px"},
    media: { height: "200px", width: "200px" }
  }

  return (
    <div className="pb-5">
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
        <Button>Primary</Button> <br />
        <Button flatted>Primary</Button> <br />
        <Button outlined icon="check">Primary</Button> <br />
        <Button raised>Primary</Button> <br />
        <Button rounded>Primary</Button> <br />
        <Button color="secondary">Primary</Button> <br />
        <Button color="success">Primary</Button> <br />
        <Button color="danger">Primary</Button> <br />
        <Button disabled>Primary</Button> <br />
        <Button rounded icon="coffee" iconRight>Primary</Button> <br />
        <Button rounded icon="camera" color="dark">Primary</Button> <br />
        <Button loading>Primary</Button> <br />
        <br /><br />

        <Flex jc="space-between">
          <FloatingButton icon="plus" />
          <FloatingButton size="45" icon="camera" color="secondary" circled={false} />
          <FloatingButton size="20" icon="times" color="danger" />
          <FloatingButton size="60" icon="question" color="success" />
          <FloatingButton size="30" icon="minus" color="danger" />
          <FloatingButton size="60" icon="question" color="success" circled={false} />
        </Flex>

        <br />
        <br />

        <Input
          labelIcon="user"
          actionIcon="eye"
          actionIconFlip="eyeSlash"
          onChange={e => console.log(e.target.value)}
          contentCase="upper"
          label="This is a label"
          hint="This field is required"
          required />

        <Input
          value={v}
          onChange={e => setV(e.target.value)}
          label="This is a label"
          type="email"
          contentCase="upper"
          minLength="4"
          required />

        {v}

        <Button onClick={_ => setV('')}>Clear</Button>


        <Search /> <br /><br />

        <Select color="danger" data={[
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Doe' },
          { id: 3, name: 'Foo Bar' }
        ]} valueId="id" valueLabel="name" required />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corporis corrupti. Repellendus impedit odio, amet ea blanditiis aut nobis, odit neque aliquid quibusdam reprehenderit temporibus quas deserunt, possimus suscipit magnam.
        </p>

        <Password />
        <Password strong={false} min={4} />

        <Input type="number" />

        <Flex gap={10}>
          <Checkbox />
          <Checkbox color="secondary" />
          <Checkbox color="danger" />
        </Flex>

        <Birthday onChange={v => console.log(v)} />

        <Upload />
      </Container>

      {/* 
      <Container style={{ marginTop: "50px" }}>
        <Alert >User added successfully</Alert>
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
*/}
      <Container style={{ marginTop: "50px" }}>
        <Alert color='info' type='outline' closable>User added successfully</Alert>
        <Alert color='warning' type='outline'>Are you sure ?</Alert>
        <Alert color='success' type='outline'>You're logging successfully !</Alert>
        <Alert color='danger' type='outline'>An error occurred !</Alert>
      </Container>

      <br /> <br />

      {/* <Container>
        <Card closable />
      </Container> */}


      <Container>
        <Card style={musicCard.cardSize} closable>
          <div style={musicCard.content}>
            <CardContent>
              <div style={{ margin: "10px" }}>
                <CardTitle title="HMagnum Dog" />
                <CardSubTitle subtitle="Vas dire a ton ex" />
              </div>
              <div style={musicCard.musicButton}>
                <FloatingButton circled="false" icon="stepBackward" color="gray" />
                <FloatingButton circled="false" size="50" icon="play" color="gray" />
                <FloatingButton circled="false" icon="stepForward" color="gray" />
              </div>
            </CardContent>
            <CardMedia style={musicCard.media} image="https://picsum.photos/200/150" />
          </div>
        </Card>
      </Container>

      {/* <Container style={{ marginTop: '30px' }}>
        <Card avatar="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="This is the title of my card" closable
          subtitle="this is subtitle">
          <CardAction>
            <Button outlined color="secondary" >
              Submit
            </Button>
          </CardAction>
        </Card>
      </Container> */}

      {/*
      <Container style={{ marginTop: '130px', width: '50%' }}>
        <Card closable > 
          <CardContent>
            <CardMedia image="http://lorempixel.com/400/200/nature/" />
            {contentText}
          </CardContent>
        </Card>
      </Container> */}



    </div>
  );
}

export default App;
