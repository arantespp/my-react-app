import React from 'react';
import './App.css';

import Card from './components/Card';

const cards = [
  {
    title: 'Título 1',
    description: 'Descrição 1'
  },
  {
    title: 'Título 2',
    description: 'Descrição 2'
  },
  {
    title: 'Título 3',
    description: 'Descrição 1'
  },
  {
    title: 'Título 4',
    description: 'Descrição 2'
  }
];

function App() {
  return (
    <div>
      <h1>Título da página</h1>
      {cards.map(card => {
        return <Card title={card.title} description={card.description} />;
      })}
    </div>
  );
}

export default App;
