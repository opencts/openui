import { useState } from "react";
import Container from "./components/Containers/Container";
import Button from "./components/Forms/Button";
import Input from "./components/Forms/Input";
import Datatable from "./components/Tables/Datatable";

import Element from "./components/Containers/Element";
import NavBar from "./components/Menu/NavBar";
import SideBar from "./components/Menu/SideBar";
import Dropdown from "./components/Tips/Dropdown";
import ListItem from "./components/List/ListItem";

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

const menuItems = [
  {
      title: 'Home',
      href: '#',
      cName: 'nav-link'
  },
  {
      title: 'Accueil',
      href: '#',
      cName: 'nav-link'
  },
  {
      title: <Dropdown component="Nos Actions">
        <ListItem>Action 1</ListItem>
        <ListItem>Action 2</ListItem>
        <ListItem>Action 3</ListItem>
      </Dropdown>,
      href: '#',
      cName: 'nav-link'
  },
  {
      title: 'Nos Partenaires',
      href: '#',
      cName: 'nav-link'
  },
  {
      title: 'Mediatheque',
      href: '#',
      cName: 'nav-link'
  },
  {
      title: 'Sign In',
      href: '#',
      cName: 'nav-link nav-link-mobile'
  }
]

function App() {
  const [values, setValues] = useState({
    nom: '',
    prenom: '',
    tel: ''
  });

  const musicCard = {
    cardSize: { width: "400px", height: "250px" },
    content: { display: "flex", flexWrap: "nowrap", justifyContent: "center" },
    musicButton: { display: "flex", justifyContent: "space-between", marginTop: "30px" },
    media: { height: "100%", width: "200px" }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      nom: '',
      prenom: '',
      tel: ''
    })
  }


  return (
    <div className="pb-5">

      <Container>
        <h3>Informations</h3>
        <form onSubmit={handleSubmit}>
          <Input label="Nom" color='secondary' required value={values.nom} onChange={(e) => {
            const value = e.target.value;
            setValues({ ...values, nom: value })
          }} />
          <Input label="Prenom" color='secondary' required value={values.prenom} onChange={(e) => {
            const value = e.target.value;
            setValues({ ...values, prenom: value })
          }} />
          <Input label="Téléphone" color='secondary' type="number" required value={values.tel} onChange={(e) => {
            const value = e.target.value;
            setValues({ ...values, tel: value })
          }} />
          <Button color="secondary" icon="plus" rounded>Enregistrer</Button>
        </form>
      </Container>

      <Container>
        <div className="pt-5">
          <Button onClick={() => {
            setValues({ ...values, nom: 'Super' });
          }}>Set value</Button>
        </div>

        {/* <Dropdown color="secondary" position="right" component={<Button>Click me</Button>}>
          <ListItem>My custom very long Item 1</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>
            <Dropdown component={() => <ListItem>Item 3</ListItem>}>
              <Dropdown component={() => <ListItem>Sub Item 3</ListItem>} position="right">
                <ListItem>Sub sub Item 1</ListItem>
                <ListItem>Sub sub Item 1</ListItem>
                <ListItem>Sub sub Item 1</ListItem>
              </Dropdown>
              <ListItem>Sub Item 2</ListItem>
              <ListItem>Sub Item 3</ListItem>
            </Dropdown>
          </ListItem>
        </Dropdown> <br /> <br /> */}
      </Container>

      <Container>
        <div className="mt-5">
          <Datatable collection="users" />
        </div>
      </Container>
      <Element>
        <Container>
          <h3>Informations</h3>
          <form onSubmit={handleSubmit}>
            <Input label="Nom" color='secondary' required value={values.nom} onChange={(e) => {
              const value = e.target.value;
              setValues({ ...values, nom: value })
            }} />
            <Input label="Prenom" color='secondary' required value={values.prenom} onChange={(e) => {
              const value = e.target.value;
              setValues({ ...values, prenom: value })
            }} />
            <Input label="Téléphone" color='secondary' type="number" required value={values.tel} onChange={(e) => {
              const value = e.target.value;
              setValues({ ...values, tel: value })
            }} />
            <Button color="secondary" icon="plus" rounded>Enregistrer</Button>
          </form>
        </Container>
      </Element>
      <br />
      {/* <Table color='secondary'></Table> */}
      {/* 
      <Container lg="70%" md="80%" sm="95%">
        <Font color="light" background="secondary">
          <h2>Toto</h2>
        </Font>

        <Font weight="thin italic">
          <p>Lorem ipsum dolor sit amet <Font inline weight="bold">consectetur</Font> adipisicing elit. Magni numquam, amet doloribus nisi non inventore, quaerat, eos ea saepe dolorum qui magnam consectetur ad illo dolore nulla delectus similique cupiditate!</p>
        </Font>

        <Element margin="2" radius="25px" padding="0 2" bTop="solid 1px green" width=".7">
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

        <Upload onUploadEnd={files => console.log(files)} color="secondary" />
      </Container> */}
      {/* 
      <Container style={{ marginTop: "50px" }}>
        <Alert >User added successfully</Alert>
        <Alert color='warning' type='dense' closable>Are you sure ?</Alert>
        <Alert color='success' type='dense' closable>You're logging successfully !</Alert>
        <Alert color='danger' type='dense' closable>An error occurred !</Alert>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Alert color='info' type='text' vpos='bottom' hpos='left'>User added successfully</Alert>
        <Alert color='warning' type='text' vpos='top' closable hpos='right'>Are you sure ?</Alert>
        <Alert color='success' type='text' hpos='center'>You're logging successfully !</Alert>
        <Alert color='danger' type='text'>An error occurred !</Alert>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Alert color='info' type='outline' closable>User added successfully</Alert>
        <Alert color='warning' type='outline'>Are you sure ?</Alert>
        <Alert color='success' type='outline'>You're logging successfully !</Alert>
        <Alert color='danger' type='outline'>An error occurred !</Alert>
      </Container>

      <br />

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


        <Card padding={5} color="primary">
          Lorem
        </Card>

        <Tooltip title="This is a help text with a  very long content">
          <Button>Hover me, please</Button>
        </Tooltip> <br />

        <Tooltip title="This is a help text with a  very long content" position="bottom">
          <Button>Hover me, please</Button>
        </Tooltip> <br />

        <Tooltip title="This is a help text with a  very long content" position="left">
          <Button>Hover me, please</Button>
        </Tooltip> <br />

        <Tooltip title="This is a help text with a  very long content" position="right">
          <Button>Hover me, please</Button>
        </Tooltip>
        <br /><br />

        <Dropdown component={() => <Button>Click me</Button>}>
          <ListItem separatorAfter={false}>My custom very long Item 1</ListItem>
          <ListItem separatorAfter={false}>Item 3</ListItem>
          <Dropdown component={() => <ListItem>Item 3</ListItem>} position="right">
            <Dropdown component={() => <ListItem>Sub Item 3</ListItem>} position="right">
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
            </Dropdown>
            <ListItem separatorAfter={false}>Sub Item 2</ListItem>
            <ListItem separatorAfter={false}>Sub Item 3</ListItem>
          </Dropdown>
        </Dropdown> <br /> <br />

        <Dropdown color="secondary" component={() => <Button>Click me</Button>} position="top">
          <ListItem separatorAfter={false}>My custom very long Item 1</ListItem>
          <ListItem separatorAfter={false}>Item 3</ListItem>
          <Dropdown component={() => <ListItem>Item 3</ListItem>}>
            <Dropdown component={() => <ListItem>Sub Item 3</ListItem>} position="right">
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
            </Dropdown>
            <ListItem separatorAfter={false}>Sub Item 2</ListItem>
            <ListItem separatorAfter={false}>Sub Item 3</ListItem>
          </Dropdown>
        </Dropdown> <br /> <br />

        <Dropdown component={() => <Button>Click me</Button>} position="right">
          <ListItem separatorAfter={false}>My custom very long Item 1</ListItem>
          <ListItem separatorAfter={false}>Item 3</ListItem>
          <Dropdown component={() => <ListItem>Item 3</ListItem>}>
            <Dropdown component={() => <ListItem>Sub Item 3</ListItem>} position="right">
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
            </Dropdown>
            <ListItem separatorAfter={false}>Sub Item 2</ListItem>
            <ListItem separatorAfter={false}>Sub Item 3</ListItem>
          </Dropdown>
        </Dropdown> <br /> <br />

        <Dropdown component={() => <Button>Click me</Button>} position="right">
          <ListItem separatorAfter={false}>My custom very long Item 1</ListItem>
          <ListItem separatorAfter={false}>Item 3</ListItem>
          <Dropdown component={() => <ListItem>Item 3</ListItem>}>
            <Dropdown component={() => <ListItem>Sub Item 3</ListItem>} position="right">
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
              <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
            </Dropdown>
            <ListItem separatorAfter={false}>Sub Item 2</ListItem>
            <ListItem separatorAfter={false}>Sub Item 3</ListItem>
          </Dropdown>
        </Dropdown>
        <br /> <br /> <br />

        <div className="bg-light m-3">
          <Accordeon title="This is an accordeon" icon="angleDown" negativeIcon="angleUp">
            <Accordeon title="Sub item" icon="angleDown" negativeIcon="angleUp">
              <div>Sub sub Item 2</div>
              <div>Sub sub Item 3</div>
            </Accordeon>
            <Accordeon title="Sub item2" icon="angleDown" negativeIcon="angleUp">
              <div>Sub sub Item 4</div>
              <div>Sub sub Item 5</div>
            </Accordeon>
            <div className="p-2">Sub Item 2</div>
            <div className="p-2">Sub Item 3</div>
          </Accordeon>
        </div>

        <div className="bg-light m-3">
          <Accordeon title="This is an accordeon" icon="plusCircle" negativeIcon="minusCircle">
            <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
            <ListItem separatorAfter={false}>Sub sub Item 2</ListItem>
            <ListItem separatorAfter={false}>Sub sub Item 3</ListItem>
          </Accordeon>
        </div>

        <div className="bg-light m-3">
          <Accordeon title="This is an accordeon" icon="plusCircle">
            <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
            <ListItem separatorAfter={false}>Sub sub Item 2</ListItem>
            <ListItem separatorAfter={false}>Sub sub Item 3</ListItem>
          </Accordeon>
        </div>

        <br /> <br /> <br /> <br />

        <Carousel>
          <CarouselItem img={img1}>
            Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!
          </CarouselItem>
          <CarouselItem img={img2}>
            Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.
          </CarouselItem>
          <CarouselItem img={img3}>
            Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempore!
          </CarouselItem>
        </Carousel>

        <br /> <br /> <br /> <br />
        <CircularLoader size={15} borderSize={1} /> <br /> <br />
        <CircularLoader size={40} borderSize={3} color="danger" /> <br /> <br />
        <CircularLoader size={75} borderSize={5} color="secondary" />

        <br /> <br /> <br /> <br />
        <CircularLoader size={15} borderSize={15} /> <br /> <br />
        <CircularLoader size={40} borderSize={3} color="danger" /> <br /> <br />
        <CircularLoader size={75} borderSize={5} color="secondary" />

        <br /> <br /> <br /> <br />
        <DotsLoader /> <br /> <br />
        <DotsLoader size={20} color="secondary" /> <br /> <br />
        <DotsLoader size={35} color="dark" />

        <br /> <br /> <br /> <br />
        <DotsLoader /> <br /> <br />
        <DotsLoader size={20} color="secondary" /> <br /> <br />
        <DotsLoader size={35} color="dark" />

        <br /> <br /> <br /> <br />
        <BarsLoader /> <br /> <br />
        <BarsLoader size={20} color="secondary" /> <br /> <br />
        <BarsLoader size={35} color="dark" />
        <br /> <br /> <br /> <br />


        <br /> <br /> <br /> <br />
        <BarsLoader /> <br /> <br />
        <BarsLoader size={20} color="secondary" /> <br /> <br />
        <BarsLoader size={35} color="dark" />

        <br /> <br /> <br /> <br />

        <br /> <br /> <br /> <br />
        <CircularDotsLoader size={15} /> <br /> <br />
        <CircularDotsLoader size={40} color="secondary" /> <br /> <br />
        <CircularDotsLoader size={75} color="success" />

        <br /> <br /> <br /> <br />
        <CircularDotsLoader size={15} /> <br /> <br />
        <CircularDotsLoader size={40} color="secondary" /> <br /> <br />
        <CircularDotsLoader size={75} color="success" />

        <br /> <br /> <br /> <br />
        <DoubleCircularLoader size={15} borderSize={15} /> <br /> <br />
        <DoubleCircularLoader size={40} borderSize={3} color="danger" /> <br /> <br />

        <Paginator />
        <Paginator circled />
        <br /> <br /> <br /> <br />
        {/* 
        <Table checkable onSelectionChange={v => console.log(v)} color="danger" />
        <Table checkable onSelectionChange={v => console.log(v)} color="success" actions={null} />  <Table />
      </Container>*/}
      <br /><br />
      {/* <Container>
        <Flex gap={0}>
          <Card closable>
            <CardContent>
              <div style={{ margin: "10px" }}>
                <CardTitle title="HMagnum Dog" />
                <CardSubTitle subtitle="Vas dire a ton ex" />
              </div>
              <Flex ai="center" jc="center" gap={30}>
                <Icon color="dark" name="stepBackward" />
                <Icon color="dark" name="play" style={{ fontSize: '30px' }} />
                <Icon color="dark" name="stepForward" />
              </Flex>
            </CardContent>
          </Card>
          <Element elevation="3">
            <CardMedia style={musicCard.media} image="https://picsum.photos/200/150" />
          </Element>
        </Flex>
      </Container>

      <Container style={{ marginTop: '30px' }}>
        <Card avatar="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="This is the title of my card" closable
          subtitle="this is subtitle">
          <CardAction>
            <Button outlined color="secondary" >
              Submit
            </Button>
          </CardAction>
        </Card>
      </Container>

      <Container style={{ marginTop: '130px', width: '50%' }}> 
        <Card closable >
          <CardContent>
            <CardMedia image="http://lorempixel.com/400/200/nature/" />
            {contentText}
          </CardContent>
        </Card>

        <br /><br /><br /><br />
        <Radio /> <br />

        <Switch color='primary'></Switch> <br />

        <ProgressBar color="primary" indeterminate /> <br /><br /><br />
        <ProgressBar color="primary" value={88} height={10} /> <br /><br /><br />
        <ProgressBar color="primary" value={58} showValue /> <br /><br /><br />
      </Container>

    */}
      <div className="pb-5">
        <Container>
          <div className="mt-5">
            <Datatable collection="users" color='secondary' />
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-5">
          <Datatable collection="users" />
        </div>
      </Container>

     
        <div className="mt-5">
        <NavBar height="50px" fontSize="10px" appIconSize="10px" logoSize="10px" color="primary" menuItems={menuItems} />
        <NavBar color="secondary" menuItems={menuItems} />
        <NavBar color="dark" menuItems={menuItems} />
        <NavBar color="danger" menuItems={menuItems} />
        </div>

        <Container style={{position:"relative"}} className="mt-5">
            <SideBar/>
        </Container>
  
    </div>
  );
}

export default App;