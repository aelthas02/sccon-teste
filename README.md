# ScconTeste

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) na versão 22.1.7.

## instalando a aplicação

Para instalar a aplicação, execute o comando:

```bash
npm i
```

## Inicializando a aplicação

Para inicializar a aplicação, execute o comando:
```bash
ng serve
```
Depois que executar de forma coreta, abra seu navegador em `http://localhost:4200/`.


## Realizando build

Para realizar o build, execute o comando:
```bash
ng build
```

## Para atualizar o código hospedado

Basta realizar o commit e push das alterações para o repositório no GitHub e a aplicação automaticamente entrará na pipeline da Vercel disponibilizando a versão mais atualizada.

## Projeto hospedado 

Este projeto foi hospedado na rede usando serviços da Vercel e você pode acessar por [aqui](https://sccon-teste-zeta.vercel.app/)


# Desenvolvimento e desafios encontrados
- Como utilizei uma versão mais recente do Angular (Versões Angular 16+) e o enunciado menciona o uso de Módulos, não saberia dizer se era necessario seguir com o desenvolvimento nas práticas mais recentes desta versão sem a utlização deles, pois utilizamos componentes standalone sem necessidade de módulos. Mas por via das dúvidas, decidi seguir com o enunciado forçando a utilização dos módulos
- Como no enunciado não havia um modelo para renderização mobile, tomei a liberdade de customizar um menu mais limpo para otimizar o UI/UX. Em modo mobile também incluí o input para teclado numerico somente.
- sobre a imagem de forma vetorial, como estava com o texto muito grande, decidi reduzir usando [svgomg](https://jakearchibald.github.io/svgomg/) para incluir no html. Não sei exatamente se era essa a idéia de incluir de forma vetorial no Html, com o código do svg direto, portanto incluí dessa forma para deixar funcionando e comentei a alternativa da tag img que importa o arquivo svg, para deixar registrado.
- Nunca havia utilizado Mocky (Atualmente o site está desabilitado) e nenhum serviço de mock para simular persistência de dados. Procurei estudar sobre, durante o desenvolvimento deste projeto. Tentei utilizar o indexedDb, porém acabou não dando muito certo pois nunca tinha usado e como há uma deadline para a entrega, decidir usar o caminho do localStorage que foi permitido no enunciado.
- um ponto que percebi de comportamento por conta do uso de SSR com Hydration, é na hora de resgatar o localStorage. Precisei pesquisar um pouco afundo sobre uma tratativa necessário para verificar se a plataforma que está sendo usada, é um navegador para que o código seja executado e resgatar os valores do localStorage. isso se dá na linha de código `!isPlatformBrowser(this.platformId)`
- Não tenho muito domínio com animações mas isso não me privou de implementar algumas ações nos componentes desenvolvidos. Para isso, usei algumas estratégias que eu havia usado em projetos mais antigos quando eu estava estudando esse módulo do CSS
- Confesso que não sou muito bom em decorar código e fiz várias pesquisas para me relembrar de sintaxes por exemplo. Sei da existência de técnicas e mecanismos para o desenvolvimento e o tempo todo me conti somente em pesquisar em como reproduzir a técnica, a lógica foi toda minha. um exemplo é o desenvolvimento da diretiva de CEP. Precisei pesquisar para me lembrar de como se desenvolve uma diretiva e usei o [regex101](https://regex101.com) para encontrar a lógica correta.
- Tomei a liberdade para ir um pouco além do que o anunciado menciona e decidi fazer uma hospedagem usando Vercel para acesso livre ao projeto. Permitindo uma simulação de um site hospedado e testes de performance com lighthouse por exemplo.
