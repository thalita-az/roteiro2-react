import Card from './Card';
function App() {
  return (
    <div style={{ padding: '20px' }}>
      {' '}
      <h1>Exemplos de Componentes com Props</h1>{' '}
      <Card
        titulo="Primeiro Card"
        descricao="Este é o conteúdo do primeiro card."
      />{' '}
      <Card
        titulo="Segundo Card"
        descricao="Aqui temos outro exemplo usando props."
      />{' '}
      <Card
        titulo="Terceiro Card"
        descricao="O mesmo componente recebeu novos valores."
      />{' '}
    </div>
  );
}
export default App;
