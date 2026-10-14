function Usuario(props) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
      }}
    >
      {' '}
      <p>Usuário: {props.nome}</p> <p>Idade: {props.idade} anos</p>{' '}
      <p>Curso: {props.curso}</p>{' '}
    </div>
  );
}
export default Usuario;
