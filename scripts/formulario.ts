interface ContatoForm {
  nome: string
  email: string
  mensagem: string
}

interface ResultadoValidacao {
  valido: boolean
  erros: string[]
}

const validarForm = (form: ContatoForm): ResultadoValidacao => {
  const erros: string[] = []

  if (form.nome.length <= 2) {
    erros.push('Nome deve ter mais de 2 caracteres')
  }

  if (!form.email.includes('@')) {
    erros.push('Email deve ser válido')
  }

  if (form.mensagem.length <= 10) {
    erros.push('Mensagem deve ter mais de 10 caracteres')
  }


  return {
    valido: erros.length === 0,
    erros
  }
}

const handleSubmit = (event: SubmitEvent): void => {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const dados: ContatoForm = {
    nome: (form.querySelector<HTMLInputElement>('#nome'))?.value ?? '',
    email: (form.querySelector<HTMLInputElement>('#email'))?.value ?? '',
    mensagem: (form.querySelector<HTMLTextAreaElement>('#mensagem'))?.value ?? ''
  }

  const resultado = validarForm(dados)
  console.log(resultado)
}