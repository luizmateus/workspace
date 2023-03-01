# Detox

Biblioteca construído pela Wix para execução de testes automatizados (E2E), tanto para versões de Debug (máquina do desenvolvedor) quanto para versões de Release (esteiras). Por trás dos panos, é utilizado o Jest para orquestração de chamadas, e a linguagem TypeScript para construção dos casos de teste.

Atualmente, é a biblioteca de testes automatizados mais compatível com React Native, sendo altamente recomendado pela comunidade. O Appium também possui compatibilidade, mas não tem a quantidade de recursos, suporte e comunidade que o Detox.

# Workarounds

#### Uso do `longPress()`

Existe um problema recorrente com o `.tap()` no Detox. Foi optado por utilizar o `.longPress()` em seu lugar, passando o parâmetro com valor 0 (para indicar 0 ms).

Mais Informações: [Detox Issue](https://github.com/facebook/react-native/issues/28032)

---

#### Opção Descartada: Appium

Esta opção foi descartada por conta da maior compatibilidade e facilidade de implementação com o Detox.

