import React from 'react';
import Datatable from './vendor/components/Tables/Datatable';

function App() {
  return (
    <div>
      <Datatable collection="users" formLabels={{
        email: 'Adresse email',
        password: 'Mot de passe',
        name: 'Nom et prénoms'
      }} errorMsgs={{
        minLength: v => `${v} caractères au minimum sont requis`
      }} />

      <Datatable collection="posts" formLabels={{
        email: 'Adresse email',
        password: 'Mot de passe',
        name: 'Nom et prénoms'
      }} errorMsgs={{
        minLength: v => `${v} caractères au minimum sont requis`
      }} refs={{
        users: 'name'
      }} />
    </div>
  );
}

export default App;