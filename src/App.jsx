
import { useState } from 'react'
import './App.css'

const servicos = [
  {
    nome: 'Saúde',
    descricao: 'Informações sobre unidades de saúde, consultas e exames.',
    icone: '🏥',
  },
  {
    nome: 'Educação',
    descricao: 'Informações sobre escolas, matrículas e serviços educacionais.',
    icone: '📚',
  },
  {
    nome: 'Assistência Social',
    descricao: 'Orientações sobre programas e serviços socioassistenciais.',
    icone: '🤝',
  },
  {
    nome: 'Serviços Municipais',
    descricao: 'Informações sobre atendimentos e serviços da Prefeitura.',
    icone: '🏛️',
  },
]

function App() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')

  function enviarPergunta(evento) {
    evento.preventDefault()

    if (!pergunta.trim()) {
      setResposta('Digite sua dúvida para continuar.')
      return
    }

    setResposta(
      'Sua pergunta foi recebida! Em breve, o AcheAqui terá respostas sobre os serviços municipais.'
    )
  }

  return (
    <div className="app">
      <header className="cabecalho">
        <h1>📍 AcheAqui</h1>
        <p>Guia de Serviços Municipais</p>
      </header>

      <main>
        <section className="apresentacao">
          <h2>Bem-vindo ao AcheAqui!</h2>
          <p>
            Encontre informações sobre serviços públicos municipais
            de maneira simples, rápida e acessível.
          </p>
        </section>

        <section className="servicos">
          <h2>Serviços disponíveis</h2>

          <div className="lista-servicos">
            {servicos.map((servico) => (
              <article className="cartao" key={servico.nome}>
                <span className="icone">{servico.icone}</span>
                <h3>{servico.nome}</h3>
                <p>{servico.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="chatbot">
          <h2>💬 Assistente Virtual AcheAqui</h2>
          <p>Tem alguma dúvida sobre os serviços municipais?</p>

          <form onSubmit={enviarPergunta}>
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              value={pergunta}
              onChange={(evento) => setPergunta(evento.target.value)}
            />
            <button type="submit">Perguntar</button>
          </form>

          {resposta && (
            <div className="resposta">
              <strong>Assistente:</strong> {resposta}
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>
          AcheAqui — Projeto de Extensão ACE 6 | Sistemas de Informação
        </p>
      </footer>
    </div>
  )
}

export default App
