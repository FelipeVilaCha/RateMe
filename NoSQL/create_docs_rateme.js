db.usuarios.insertMany([
    { _id: "vilacha", nome: "Felipe", email: "felipevcsantos@hotmail.com", data_registro: Date(), localidade_id: 1},
    { _id: "xandin", nome: "Alexandre", email: "alexandre@gmail.com", data_registro: Date(), localidade_id: 1},
    { _id: "jdoe", nome: "John", email: "john.doe@gmail.com", data_registro: Date(), localidade_id: 3},
    { _id: "JaNe", nome: "Jane", email: "jane-kyrgyarkos@gmail.com", data_registro: Date(), localidade_id: 3}
])

db.diretores.insertMany([
    { _id: 1, nome: "Christopher Nolan", idade: 49, origem_id: 4},
    { _id: 2, nome: "David Fincher", idade: 57, origem_id: 3},
    { _id: 3, nome: "Steven Spielberg", idade: 72, origem_id: 3}
])

db.estudios.insertMany([
    { _id: 1, nome: "2OTH Century Fox", localidade_id: 1},
    { _id: 2, nome: "Universal Studios", localidade_id: 1},
    { _id: 3, nome: "Warner Bros. Pictures", localidade_id: 3}
])

db.ator.insertMany([
    { _id: 1, nome: "Anne Hathaway", idade: 37, origem_id: 1},
    { _id: 2, nome: "Ralph Fiennes", idade: 56, origem_id: 4},
    { _id: 3, nome: "Edward Norton", idade: 50, origem_id: 1}
])

db.localidade.insertMany([
    { _id: 1, cidade: "Los Angeles", estado: "Califórnia", pais: "USA"},
    { _id: 2, cidade: "Niterói", estado: "Rio de Janeiro", pais: "Brasil"},
    { _id: 3, cidade: "New York", estado: "New York", pais: "USA"},
    { _id: 4, cidade: "Londres", estado: "Londres", pais: "Inglaterra"}
])

db.categoria.insertMany([
    { _id: 1, descricao: "Comédia"},
    { _id: 2, descricao: "Terror"},
    { _id: 3, descricao: "Drama"},
    { _id: 4, descricao: "Romance"},
    { _id: 5, descricao: "Ficção Científica"},
    { _id: 6, descricao: "Ação"}
])

db.filme.insertMany([
    { _id: 1, nome: "Interstellar", bilheteria: 675000000, data_lancamento: Date('2014-10-26'), estudio_id: 3, diretor_id: 1, atores: [1], categorias:[5], avaliacoes: [1,2]},
    { _id: 2, nome: "Clube da Luta", bilheteria: 101000000, data_lancamento: Date('1999-10-29'), estudio_id: 1, diretor_id: 2, atores: [3], categorias:[6], avaliacoes: [1,2]},
    { _id: 3, nome: "A Lista de Schindler", bilheteria: 321000000, data_lancamento: Date('1993-12-15'), estudio_id: 2, diretor_id: 3, atores:[2], categorias:[3], avaliacoes: [1,2]}
])

db.avaliacoes.insertMany([
    { _id: 1, user_id: "vilacha", nota: 5, comentario: "Melhor filme já feito!", data: Date()},
    { _id: 2, user_id: "xandin", nota: 4, comentario: "Um bom filme", data: Date()}
])