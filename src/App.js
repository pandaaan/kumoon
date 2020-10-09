import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Menu from './Menu/Navi';

function App() {
  return (
    <Container fluid className="bg-main">
      <Menu />
    </Container>
  );
}

export default App;
