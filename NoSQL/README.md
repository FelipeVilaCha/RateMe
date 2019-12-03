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
db.filme.aggregate([
    {
        "$group" : {_id:"$diretor_id", count:{$sum:1}}
    }
])
```

4. *Relacao de quantidade de filmes por categoria*
```
db.filme.aggregate([
    {
        "$group" : {_id:"$diretor_id", count:{$sum:1}}
    }
])
```
5. *Relacao de quantidade de filmes por estudio
```
db.filme.aggregate([
    {
        "$group" : {_id:"$estudio_id", count:{$sum:1}}
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
            nota_media: { $avg: "$avaliacao_filme.nota"}
        }
    }
])
```
7. *Media de notas por categoria
```
db.filme.aggregate([
    {
        $lookup: {
                from : "categoria",
                localField: "categoria_id._id1",
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