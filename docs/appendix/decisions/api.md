# Axios

Por ser a ferramenta mais comumente utilizada para comunicação HTTP em projetos Node, optamos pelo uso do Axios. Outro ponto importante é sua compatibilidade com Interceptors, o que permitirá que as requests sejam manipuladas antes do envio, e após o recebimento da resposta.

# React Query

Foi adaptado para ser utilizado como interface entre a Model/Controller de uma tela, e o cliente HTTP (Axios), fornecendo diversas funcionalidades que facilitam a implementação.

---

#### Opção Descartada: Native Module

Foi considerado o uso das próprias chamadas de API existentes hoje no ambiente Nativo da aplicação, mas foi descartada, por exigir uma dependência maior do âmbito Nativo, e complicar um pouco o uso da abstração de hooks com React Query.
