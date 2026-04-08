import { useLogin } from './useLogin';

function App() {
  // O dev decide como processar os dados (ex: mandar pra uma API)
  const { handleChange, handleSubmit, values } = useLogin((dados) => {
    console.log("Dados prontos para o servidor:", dados);
    alert(`Logando com: ${dados.email}`);
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Testando Lógica de Login --</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="E-mail" onChange={handleChange} />
        <input name="password" type="password" placeholder="Senha" onChange={handleChange} />
        <button type="submit">Entrar</button>
      </form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}

export default App;