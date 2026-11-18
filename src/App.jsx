
import { useState } from 'react'
import { orgaos } from './dados/orgaos.js'
import './App.css'

const servicos = [
  {
    nome: 'Saúde',
    descricao: 'Informações sobre unidades de saúde, consultas e exames.',
    icone: '🏥',
    categoria: 'saude',
  },
  {
    nome: 'Educação',
    descricao: 'Informações sobre escolas, matrículas e serviços educacionais.',
    icone: '📚',
    categoria: 'educacao',
  },
  {
    nome: 'Assistência Social',
    descricao: 'Orientações sobre programas e serviços socioassistenciais.',
    icone: '🤝',
    categoria: 'assistencia',
  },
  {
    nome: 'Serviços Municipais',
    descricao: 'Informações sobre atendimentos e serviços da Prefeitura.',
    icone: '🏛️',
    categoria: 'todos',
  },
]

function App() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)
  const [orgaoSelecionado, setOrgaoSelecionado] = useState(null)

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

  function selecionarCategoria(categoria) {
    setCategoriaSelecionada(categoria)
    setOrgaoSelecionado(null)
  }

  function filtrarOrgaos() {
    if (categoriaSelecionada === 'saude') {
      return orgaos.filter(
        (orgao) =>
          orgao.id === 'saude' ||
          orgao.orgaoResponsavel === 'saude'
      )
    }

    if (categoriaSelecionada === 'educacao') {
      return orgaos.filter((orgao) => orgao.id === 'educacao')
    }

    if (categoriaSelecionada === 'assistencia') {
      return orgaos.filter(
        (orgao) => orgao.id === 'assistencia'
      )
    }

    return orgaos
  }

  const orgaosFiltrados = filtrarOrgaos()

  const categoriaAtual = servicos.find(
    (servico) => servico.categoria === categoriaSelecionada
  )

  return (
    <div className="app">
      <header className="cabecalho">
        <h1>📍 AcheAqui</h1>
        <p>Guia de Serviços Municipais — Banabuiú</p>
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
              <button
                type="button"
                className="cartao cartao-clicavel"
                key={servico.nome}
                onClick={() => selecionarCategoria(servico.categoria)}
              >
                <span className="icone">{servico.icone}</span>
                <h3>{servico.nome}</h3>
                <p>{servico.descricao}</p>
              </button>
            ))}
          </div>
        </section>

        {categoriaSelecionada && (
          <section className="consulta-orgaos">
            <h2>{categoriaAtual?.nome}</h2>

            <button
              type="button"
              className="botao-voltar"
              onClick={() => {
                setCategoriaSelecionada(null)
                setOrgaoSelecionado(null)
              }}
            >
              ← Voltar aos serviços
            </button>

            {!orgaoSelecionado ? (
              <>
                <p>Selecione um órgão ou unidade para consultar.</p>

                {orgaosFiltrados.length === 0 ? (
                  <p>
                    As informações desta categoria serão cadastradas
                    em breve.
                  </p>
                ) : (
                  <div className="lista-orgaos">
                    {orgaosFiltrados.map((orgao) => (
                      <button
                        type="button"
                        className="item-orgao"
                        key={orgao.id}
                        onClick={() => setOrgaoSelecionado(orgao)}
                      >
                        <strong>{orgao.nome}</strong>
                        <span>Ver informações →</span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="detalhes-orgao">
                <button
                  type="button"
                  className="botao-voltar"
                  onClick={() => setOrgaoSelecionado(null)}
                >
                  ← Voltar à lista de órgãos
                </button>

                <h3>{orgaoSelecionado.nome}</h3>

                <p>
                  <strong>Localização:</strong>{' '}
                  {orgaoSelecionado.endereco || 'A confirmar'}
                </p>

                {orgaoSelecionado.setores?.length > 0 && (
                  <>
                    <h4>Setores disponíveis</h4>
                    <ul>
                      {orgaoSelecionado.setores.map((setor) => (
                        <li key={setor}>{setor}</li>
                      ))}
                    </ul>
                  </>
                )}

                {orgaoSelecionado.observacao && (
                  <p className="aviso-cadastro">
                    Informação em verificação.
                  </p>
                )}

                <p className="aviso-cadastro">
                  Cadastro inicial. Endereços, contatos e horários
                  ainda poderão ser complementados.
                </p>
              </div>
            )}
          </section>
        )}

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
