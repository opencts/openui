import React, { useEffect, useState } from 'react';
import { _SERVER_URL, _WS_SERVER_URL } from './vendor/config/environment';
import Container from './vendor/components/Containers/Container';
import DotsLoader from './vendor/components/Progress/DotsLoader';
import { useClientDB } from './vendor/services/ClientDBProvider';
import { useFont } from './vendor/services/FontProvider';
import RouterViewSegment from './vendor/components/Routing/RouterViewSegment';
import RouterView from './vendor/components/Routing/RouterView';

function App() {

  const { db, save, load, dataIsLoading, isLoadingSchema, getValue } = useClientDB();
  const { currentFontIndex, fonts, setFont } = useFont();
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [btnText, setBtnText] = useState('Create User');

  const handleClick = user => {
    console.log(user)
    save('users', user);
    setBtnText('Create User');
  };

  const handlePost = post => {
    console.log(post)
    save('posts', post);
  };

  useEffect(() => {
    if (!isLoadingSchema) {
      load('users');
      load('posts');
    }
  }, [dataIsLoading]);

  if (dataIsLoading || !('users' in db) || !('posts' in db))
    return <DotsLoader />

  return (
    <Container>
      sdklfjsd
      <RouterView />
    </Container>
  );
}

export default App;