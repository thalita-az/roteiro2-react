function Card(props) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#f9f9f9',
        color: '#222',
      }}
    >
      <h2 style={{ color: '#222', margin: '0 0 8px' }}>{props.titulo}</h2>
      <p style={{ margin: 0 }}>{props.descricao}</p>
    </div>
  );
}

export default Card;
