# QUERIES

1. *Buscar avaliações por maior nota.*
```
db.avaliacoes.find().sort({nota:-1});
```

2. *Relacao de filmes e quantidade de avaliacoes*
```
db.filme.aggregate ([
    {
        $project: {
            nome:1,
            numeroAvaliacoes: { $cond: { if: {$isArray : "$avaliacoes" }, then : { $size: "$avaliacoes" }, else: "0" } } 
        }
    }
])
```
3. *Relacao de quantidade de filmes dirigidos por cada diretor*
```
db.diretores.aggregate([
    {
        $lookup: {
                from : "filme",
                localField: "_id",
                foreignField: "diretor_id",
                as: "filme_diretor"
        }
    },
    {
        $unwind: "$filme_diretor"
    },
    {
        "$group" : {_id:"$nome", filmes:{$sum:1}}
    }
])
```

4. *Relacao de quantidade de estudios por país*
```
db.estudios.aggregate([
    {
        $lookup: {
                from : "localidade",
                localField: "localidade_id",
                foreignField: "_id",
                as: "tipo_local"
        }
    },
    {
        $unwind: "$tipo_local"
    },
    {
        "$group" : {_id:"$tipo_local.pais", estudios:{$sum:1}}
    }
])
```
5. *Relacao de quantidade de filmes por estudio
```
db.filme.aggregate([
    {
        $lookup: {
            from : "estudios",
            localField: "estudio_id",
            foreignField: "_id",
            as: "estudio_filme"
        }
    },
    {
        $unwind: "$estudio_filme"
    },
    {
        "$group" : {_id:"$estudio_filme.nome", filmes:{$sum:1}}
    }
])
```
6. *Media de Notas por filmes*
```
db.filme.aggregate([
    {
        $lookup: {
            from : "avaliacoes",
            localField: "avaliacoes",
            foreignField: "_id",
            as: "avaliacao_filme"
        }
    },
    {
        $project:{
            nome: "$nome",
            Média: { $avg: "$avaliacao_filme.nota"}
        }
    }
])
```

7. *Media de notas por categoria*
```
db.filme.aggregate([
    {
        $unwind: "$categorias"
    },
    {
        $lookup: {
                from : "categoria",
                localField: "categorias",
                foreignField: "_id",
                as: "tipo_filme"
        }
    },
    {
        $unwind: "$tipo_filme"
    },
    {
        $lookup: {
                from : "avaliacoes",
                localField: "avaliacoes",
                foreignField: "_id",
                as: "avaliacao_filme"
        }
    },
    {
        $unwind: "$avaliacao_filme"
    },
    {
        $group: {
            _id: "$tipo_filme.descricao",
            "Média" : { $avg: "$avaliacao_filme.nota"}
        }
    },
   
])
```
8. *Usuarios que realizaram mais avaliacoes*
```
db.avaliacoes.aggregate([
    {
        $lookup: {
                from : "usuarios",
                localField: "user_id",
                foreignField: "_id",
                as: "user_avaliacao"
        }
    },
    {
        $unwind: "$user_avaliacao"
    },
    {
        "$group" : {_id:"$user_avaliacao.nome", avaliacoes:{$sum:1}}
    },   
])
```
9. *Top 3 diretores de maior bilheteria no cinema*
```
db.diretores.aggregate([
    {
        $lookup: {
                from : "filme",
                localField: "_id",
                foreignField: "diretor_id",
                as: "filme_diretor"
        }
    },
    {
        $unwind: "$filme_diretor"
    },
    {
        "$group" : {_id:"$nome", valor:{$sum:"$filme_diretor.bilheteria"}}
    },
    {
        $sort: {valor: -1}
    },
    {
        $limit : 3
    }
])
```
10. *Quantidade de filmes em que um ator atuou*
```
db.filme.aggregate([
    {
        $unwind : "$atores"
    },
    {
        $lookup: {
                from : "ator",
                localField: "atores",
                foreignField: "_id",
                as: "filme_ator"
        }
    },
    {
        $unwind: "$filme_ator"
    },
    {
        "$group" : {_id:"$filme_ator.nome", filmes:{$sum:1}}
    }
])
```
