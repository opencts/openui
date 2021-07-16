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
import Dialog from "./components/Dialogs/Dialog";
import Avatar from "./components/Tips/Avatar";
import avatar from './assets/img/avatar.jpg';
import Badge from "./components/Tips/Badge";
import Tab from "./components/Tabs/Tab";
import TabItem from "./components/Tabs/TabItem";
import { useDialog } from "./services/DialogProvider";
import ListItem from "./components/List/ListItem";
import ListGroup from "./components/List/ListGroup";
import List from "./components/List/List";
import Breadcrumbs from "./components/List/Breadcrumbs";

function App() {

  const [v, setV] = useState('');
  const [s, setS] = useState(false);
  const { confirm, alert } = useDialog();

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
        <Button style={{ padding: '12px 30px' }}>Primary</Button> <br /> <br />
        <Button flatted>Primary</Button> <br /> <br />
        <Button outlined>Primary</Button> <br /> <br />
        <Button raised>Primary</Button> <br /> <br />
        <Button rounded>Primary</Button> <br /> <br />
        <Button color="secondary">Primary</Button> <br /> <br />
        <Button color="success">Primary</Button> <br /> <br />
        <Button color="danger">Primary</Button> <br /> <br />
        <Button disabled>Primary</Button> <br /> <br />
        <Button rounded icon="coffee" iconRight>Primary</Button> <br /> <br />
        <Button rounded icon="camera" color="dark">Primary</Button> <br /> <br />
        <Button loading>Primary</Button> <br /> <br />
        <Button raised loading color="light">Primary</Button> <br /> <br />
        <Button color="light">Light</Button> <br /> <br />
        <br /><br />

        <Flex jc="space-between" style={{ padding: '30px' }}>
          <FloatingButton icon="plus" />
          <FloatingButton size="45" icon="camera" color="secondary" circled={false} />
          <FloatingButton size="20" icon="times" color="danger" />
          <FloatingButton size="60" icon="question" color="success" />
          <FloatingButton size="30" icon="minus" color="light" />
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

        <Button onClick={_ => setS(true)}>Clear</Button>


        <Search /> <br /><br />

        <Select />

        <Select multiple color="danger" data={[
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

        <Upload onUploadEnd={files => console.log(files)} />
      </Container>


      <Container style={{ marginTop: "50px" }}>
        <Alert>User added successfully</Alert>
        <Alert color='warning' type='dense' closable>Are you sure ?</Alert>
        <Alert color='success' type='dense' closable>You're logging successfully !</Alert>
        <Alert color='danger' type='dense' closable>An error occurred !</Alert>
      </Container>

      {/* <Container style={{ marginTop: "50px" }}>
        <Alert color='info'    type='text' fixed vpos='bottom' hpos='left'>User added successfully</Alert>
        <Alert color='warning' type='text' fixed vpos='top' closable hpos='right'>Are you sure ?</Alert>
        <Alert color='success' type='text' fixed hpos='center'>You're logging successfully !</Alert>
        <Alert color='danger'  type='text'>An error occurred !</Alert>
      </Container> */}

      <Container style={{ marginTop: "50px" }}>
        <Alert color='info' type='outline'>User added successfully</Alert>
        <Alert color='warning' type='outline'>Are you sure ?</Alert>
        <Alert color='success' type='outline'>You're logging successfully !</Alert>
        <Alert color='danger' type='outline'>An error occurred !</Alert>
      </Container>

      {s && <Dialog title="Test" titleIcon="plus" color="danger" onClose={_ => setS(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione minus nam deserunt eos dolorum voluptatem amet hic similique sunt corrupti quod laudantium, quas quibusdam voluptates eum, nemo non expedita?
      </Dialog>}

      <Container style={{ marginTop: "50px" }}>
        <Flex gap={10}>
          <Avatar letter="O" />
          <Avatar letter="A" color="dark" />
          <Avatar letter="J" color="light" />
          <Avatar letter="OF" size={50} />
          <Avatar img={avatar} size={50} />
        </Flex>
        <br /><br />

      </Container>

      <Container>
        <Avatar letter="S" />
        <Avatar letter="S" />
        <Avatar letter="S" />
        <Badge />
        <Badge>3</Badge>
        <Badge>379</Badge>

        <br />

        <Icon name="user" /><Badge>3</Badge> <br /><br />
        <Icon name="user" /><Badge vpos="top"></Badge> <br /><br />
        <Badge vpos="top">379</Badge> <Icon name="user" /> <br /><br />

        <Tab direction="v">
          <TabItem title="Tab1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, facere. Repellat eveniet culpa autem? Labore vero numquam quas itaque officia! Dolores assumenda, dignissimos quisquam obcaecati cum reprehenderit repudiandae modi explicabo?
        </TabItem>
          <TabItem title="Tab2">
            Lorem2
        </TabItem>
          <TabItem title="Tab3">
            Lorem3
        </TabItem>
          <TabItem title="Tab4" icon="times">
            Lorem4
        </TabItem>
          <TabItem title="Tab5" icon="times">
            Lorem5
        </TabItem>
          <TabItem title="Tab6" icon="times">
            Lorem6
        </TabItem>
          <TabItem title="Tab7" icon="times">
            Lorem7
        </TabItem>
          <TabItem title="Tab8" icon="times">
            Lorem8
        </TabItem>
          <TabItem title="Tab9" icon="times">
            Lorem9
        </TabItem>
          <TabItem title="Tab10" icon="times">
            Lorem10
        </TabItem>

        </Tab>

        <Button onClick={_ => confirm('Yo les bros !', {
          onConfirm: _ => window.alert('Done!')
        })}>Open Confirm</Button>

        <Button onClick={_ => alert('error', 'Oups !', {
          finishText: 'Quitter'
        })}>Open alert Error</Button>

        <Button onClick={_ => alert('success', 'Yo les bros !')}>Open alert success</Button> <br />


        <List>
          <ListGroup title="Group 1">
            <ListItem>
              This is an item
          </ListItem>
            <ListItem>
              This is an item
          </ListItem>
          </ListGroup>

          <ListGroup title="Group 2" titleColor="primary">
            <ListItem
              avatar
              avatarLetter="S"
              actions={[
                { icon: 'edit', color: 'primary' },
                { icon: 'trash', color: 'danger' },
              ]}>
              <div>
                <h5>Title</h5>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore dolore aliquid, tempora quasi repellat unde rerum laboriosam, aspernatur ipsam ut officiis accusamus voluptas, suscipit voluptates amet. Explicabo, ab doloribus!
              </span>
              </div>
            </ListItem>
          </ListGroup>

          <ListGroup title="Group 3">
            <ListItem
              avatar
              avatarImg={avatar}
              avatarSize={30}
              actions={[
                { icon: 'infoCircle', color: 'gray' }
              ]}>
              Jane Doe
            </ListItem>
            <ListItem
              avatar
              avatarImg={avatar}
              avatarSize={30}
              actions={[
                { icon: 'infoCircle', color: 'gray' }
              ]}>
              Jonathan Joester
            </ListItem>
          </ListGroup>
        </List>

        <Breadcrumbs />
      </Container>


      <br /> <br />
    </div>
  );
}

export default App;
