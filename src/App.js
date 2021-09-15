import React, { useEffect, useState } from 'react';
import { _SERVER_URL, _WS_SERVER_URL } from './config/environment';
import Container from './vendor/components/Containers/Container';
import Flex from './vendor/components/Containers/Flex';
import Button from './vendor/components/Forms/Button';
import Form from './vendor/components/Forms/Form';
import Select from './vendor/components/Forms/Select';
import DotsLoader from './vendor/components/Progress/DotsLoader';
import Datatable from './vendor/components/Tables/Datatable';
import { useClientDB } from './vendor/services/ClientDBProvider';
import { useDialog } from './vendor/services/DialogProvider';

function App() {

  const { db, getSchema, save, load, dataIsLoading, remove } = useClientDB();
  const [loadingUserSchema, userSchema] = getSchema('users');
  const [user, setUser] = useState({});
  const [btnText, setBtnText] = useState('Create User');
  const { confirm } = useDialog();

  const handleClick = user => {
    save('users', user);
    setBtnText('Create User');
  };

  useEffect(() => {
    load('users');
  }, []);

  if (loadingUserSchema || !db || !('users' in db) || dataIsLoading) return <DotsLoader />

  return (
    <Container>
      <div>
        <h3>Add a user</h3>
        <hr />
        
        <Form
          values={user}
          schema={userSchema}
          buttonText={btnText}
          showReset={true}
          onSubmit={handleClick} />
      </div>
    
      <Datatable collection="users" onItemViewChange={row => alert('Displaying row' + JSON.stringify(row))} />
    </Container>
  );
}

export default App;