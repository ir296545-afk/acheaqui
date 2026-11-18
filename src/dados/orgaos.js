
/*
 * AcheAqui — Guia de Serviços Municipais
 * Cadastro inicial de órgãos e serviços de Banabuiú-CE.
 *
 * Informações preliminares fornecidas pela equipe.
 * Endereços sem número, horários e contatos devem ser
 * confirmados antes da publicação definitiva.
 */

export const orgaos = [
  {
    id: 'prefeitura',
    nome: 'Prefeitura Municipal de Banabuiú',
    categoria: 'prefeitura',
    endereco: 'Avenida Queiroz Pessoa, Centro',
    setores: [
      'Recursos Humanos (RH)',
      'Licitação',
      'Tesouraria',
      'Setor Jurídico',
      'Setor de Compras',
      'Tributação',
      'Secretaria de Finanças',
      'Gabinete do Prefeito',
      'Secretaria/Chefia de Gabinete',
      'Sala do Prefeito',
      'Controle Interno',
    ],
  },
  {
    id: 'saude',
    nome: 'Secretaria Municipal de Saúde',
    categoria: 'secretaria',
    endereco: 'Complexo Administrativo Municipal',
    setores: [
      'Gabinete do Secretário de Saúde',
      'Assessoria e Recursos Humanos',
      'Sala de Sistemas',
      'Atenção Primária à Saúde (APS)',
      'Vigilância Sanitária',
      'Vigilância Epidemiológica',
      'Setor de Compras',
    ],
  },
  {
    id: 'cultura',
    nome: 'Secretaria de Cultura',
    categoria: 'secretaria',
    endereco: 'Complexo Administrativo Municipal',
    setores: [],
  },
  {
    id: 'agricultura',
    nome: 'Secretaria de Agricultura',
    categoria: 'secretaria',
    endereco: 'Complexo Administrativo Municipal',
    setores: [],
  },
  {
    id: 'pesca',
    nome: 'Secretaria de Pesca',
    categoria: 'secretaria',
    endereco: 'Rua Antônio Alves Bezerra',
    setores: [],
  },
  {
    id: 'infraestrutura',
    nome: 'Secretaria de Infraestrutura',
    categoria: 'secretaria',
    endereco: 'Avenida Adília Cajazeiras',
    setores: [],
  },
  {
    id: 'educacao',
    nome: 'Secretaria de Educação',
    categoria: 'secretaria',
    endereco: 'Rua Irmã Tavares',
    setores: [],
  },
  {
    id: 'meio-ambiente',
    nome: 'Autarquia Municipal do Meio Ambiente (AMAB)',
    categoria: 'autarquia',
    endereco: 'Rua Francisco Calixto',
    setores: [],
  },
  {
    id: 'transito',
    nome: 'Autarquia de Trânsito',
    categoria: 'autarquia',
    endereco: 'Rua Irmã Tavares',
    setores: [],
  },
  {
    id: 'saae',
    nome: 'Serviço Autônomo de Água e Esgoto (SAAE)',
    categoria: 'autarquia',
    endereco: 'Rua Francisco Calixto',
    setores: [],
  },
  {
    id: 'ubs-sede-1',
    nome: 'Unidade Básica de Saúde — Sede 1',
    categoria: 'unidade-saude',
    orgaoResponsavel: 'saude',
    endereco: 'Rua Irmã Tavares',
    setores: [],
  },
  {
    id: 'ubs-sede-2',
    nome: 'Unidade Básica de Saúde — Sede 2',
    categoria: 'unidade-saude',
    orgaoResponsavel: 'saude',
    endereco: 'Rua Ana Maria da Conceição, Conjunto Esperança',
    observacao: 'Confirmar denominação oficial: Maria das Dores ou Maria Miguel.',
    setores: [],
  },
  {
    id: 'hospital',
    nome: 'Hospital Municipal Senador Carlos Jereissati',
    categoria: 'unidade-saude',
    orgaoResponsavel: 'saude',
    endereco: 'Rua Valdemar Lobo',
    setores: [],
  },
  {
    id: 'samu',
    nome: 'SAMU',
    categoria: 'unidade-saude',
    orgaoResponsavel: 'saude',
    endereco: 'Rua Francisco Calixto',
    setores: [],
  },
  {
    id: 'forum-eleitoral',
    nome: 'Fórum Eleitoral',
    categoria: 'outro-orgao',
    endereco: 'Avenida Queiroz Pessoa',
    setores: [],
  },
]
