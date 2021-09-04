import React, { useEffect, useState } from 'react';
import { _SERVER_URL, _WS_SERVER_URL } from './config/environment';
import Container from './vendor/components/Containers/Container';
import Flex from './vendor/components/Containers/Flex';
import Button from './vendor/components/Forms/Button';
import Form from './vendor/components/Forms/Form';
import DotsLoader from './vendor/components/Progress/DotsLoader';
import useCookie from './vendor/hooks/useCookie';
import { useClientDB } from './vendor/services/ClientDBProvider';
import { useDialog } from './vendor/services/DialogProvider';

function App() {

  const { db, getSchema, save, load, dataIsLoading, remove } = useClientDB();
  const [loadingUserSchema, userSchema] = getSchema('users');
  const [user, setUser] = useState({});
  const [btnText, setBtnText] = useState('Create User');
  const { confirm } = useDialog();

  const { cookieValue, putCookieValue, clearCookie } = useCookie('test', 'Sam7');

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
        <h3>Add a user {cookieValue}</h3> 
        <hr />
        <Button onClick={() => putCookieValue('Sam' + Math.round(Math.random() * 10))}>Change cookie value</Button>
        <Button color='danger' onClick={() => clearCookie()}>Clear cookie</Button>
        <Form
          values={user}
          schema={userSchema}
          buttonText={btnText}
          showReset={false}
          onSubmit={handleClick} />
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {db.users.map((u, i) => <tr key={i}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>
                <Flex gap={10}>
                  <Button color="dark" onClick={() => {
                    setBtnText('Update user');
                    setUser(u);
                  }}>Upd</Button>
                  <Button color="danger" onClick={() => {
                    confirm('Are you sure you want to delete this user ?', {
                      onConfirm: () => {
                        remove('users', u.id);
                      }
                    });
                  }}>Del</Button>
                </Flex>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default App;