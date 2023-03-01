# Zustand

Foi a solução que melhor se encaixou na estratégia de multi-repositórios, permitindo a criação de stores globais ou com o escopo fechado em um único módulo. Fácil de implementar, e com muita compatibilidade com outras formas de desenvolvimento. Também é muito bem cotado pela comunidade.

---

#### Opção Descartada: Redux

Não se encaixou muito bem com a estratégia de multi-repositório, por conta da necessidade de cada área de negócio ter seu próprio contexto/store separadamente (anti-pattern na visão do Redux, mesmo com Redux-Toolkit).

#### Opção Descartada: Context API

Não será utilizado para o gerenciamento de estado da aplicação por conta da escalabilidade e renderizações. Contudo, pode ser utilizado para cascatear contextos específicos (como o tema da aplicação).

#### Opção Descartada: Jotai

Consideramos o seu uso globalmente, sendo uma alternativa ao Zustand (desenvolvida pela mesma equipe). Contudo, optamos pelo uso do próprio Zustand, por ser mais utilizado e melhor documentado.
