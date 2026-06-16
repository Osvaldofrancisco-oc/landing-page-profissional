interface Depoimento {
    id: number;
    texto: string;
    autor: string;
    cargo: string;
    empresa?: string;
}

interface Evento{
    id:number;
    titulo:string;
    descricao:string
    data:Date
    local:string
    capacidade:number
    organizadorId:number
}

type EventoCreate = Omit<Evento, 'id'>;
type EventoUpdate = Partial<Omit<Evento, 'id'>> & Pick<Evento, 'id'>
type EventoPublico = Pick<Evento, 'id' | 'titulo' | 'data' | 'local'>;

const dados: EventoCreate = {
  titulo: 'Workshop React',
  descricao: 'Aprenda React do zero',
  data: new Date(),
  local: 'Lisboa',
  capacidade: 50,
  organizadorId: 1
}

// resultado equivalente a:
const evento: Evento = {
  id: 123,
  titulo: 'Workshop React',
  descricao: 'Aprenda React do zero',
  data: new Date(),
  local: 'Lisboa',
  capacidade: 50,
  organizadorId: 1
}


const criarEvento = (dados: EventoCreate): Evento => {
  return {
    id: Math.round(Math.random() * 1000),
    ...dados
  }
}

const eventoAtualizado = { ...evento, titulo: 'Novo título' }


//
const depoimentos: Depoimento[] = [
    {
        id: 1,  
        texto: "tetsds",
        autor: "João Silva",
        cargo: "Desenvolvedor",
      
    },
    {
        id: 2,  
        texto: "tetsds",
        autor: "Maria Oliveira",
        cargo: "Designer",
        empresa: "Agência Criativa",
    },
    {
        id: 3,  
        texto: "tetsds",        
        autor: "Carlos Santos",
        cargo: "Gerente de Projetos",
        empresa: "Tech Solutions",
    },  
];

const renderizarDepoimento = (depoimento: Depoimento): string => {
  return `"${depoimento.texto}" — ${depoimento.autor}, ${depoimento.cargo}`
}

console.log(renderizarDepoimento(depoimentos[0]))
console.log(renderizarDepoimento(depoimentos[1]))
console.log(renderizarDepoimento(depoimentos[2]))

 
