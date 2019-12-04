# RateMe
Implementação de um banco relacional e não relacional de um sistema de avaliação de filmes.


### Especificação do minimundo

RateME é um sistema que deve permitir que usuários cadastrados possam obter informações sobre os filmes cadastrados, Filmes são cadastrados com um nome, uma data de lançamento, a quantidade de bileteria, sua categoria e informações sobre o estudio que o produziu e seu diretor, um filme só pode ser produzido por um estudio e por um diretor. 
Um estúdio contem um nome e suas informações de localidade (cidade, estado, país). 
Um diretor possui um nome, sua idade e a informação sobre qual é o pais de seu nascimento. 
O sistema ainda deve armazenar as informações de cadastro de usuários, sendo estas seu nome completo, seu nome de usuário (escolhido ao fazer o cadastro), seu e-mail, a data em que se registrou no site e seu pais de origem. 
Um usuário deve poder dar notas aos filmes que desejar, deve ser apenas armazenada a informação de quando o usuário fez essa avaliação para controle.

### ER

![Imagem da ER](er.png)

### RELATORIO

Após identificar o tema do trabalho, que é o sistema de avaliação de filmes, começamos a desenvolver o banco relacional, o qual já conhecemos, até mesmo para ter uma base do que precisaria ser replicado para um banco não relacional.

Logo depois dessa construção, escolhemos o MongoDB por se tratar de um banco muito em evidência hoje no mercado e que nenhum de nós havíamos mexido anteriormente, então se tratava de um mundo novo, que sempre é bom aprender. Apesar de pensar em usar o HBase, no qual um integrante já tinha uma familiaridade, a configuração do HBase requer um sistema muito bem definido e integrado para começar o desenvolvimento. Partimos da simplicidade.

Por fim, por se tratar de uma linguagem nova para nós, sentimos um pouco de dificuldade na sintaxe e na construção do relacionamento entre os diferentes documentos, mas com a continuidade no desenvolvimento, esses entraves foram sendo solucionados.

Para realizar a construção dos documentos no MongoDB basta inserir os comandos presentes no documento acima, na seção do NOSQL (create_docs_rateme.js). E dessa mesma forma são realizadas as querys, contidas na seção QUERYS no documento (x).

### Rodando projeto

Basta ter Docker e docker-compose em sua máquina e executar o seguinte comando

```
docker-compose up --build -d
```

Depois desse passo o MongoDB estará rodando na porta 27017 e o Mysql na 3606 da sua máquina.