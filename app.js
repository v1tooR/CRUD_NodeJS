const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json())

const products = [];

/*
    POST: Inserir
    GET: Buscar
    PUT: Alterar
    DELETE: Remover
*/

/*
Body = Enviar dados para a aplicação
Params = /product/14314234341
Query = /product?id=297634294328

*/

//Cadastrar informações

app.post("/products", (request, response) => {
    const { name, price } = request.body;
    const product = {
        name,
        price,
        id: randomUUID()
    }

    products.push(product)

    return response.json(product)
});

app.get("/products", (request, response) => {
    return response.json(products);
    //retornar resposta que está dentro do json armazenado dentro de products
})

//Mostrar informações

app.get("/products/:id", (request, response) => {
    const {id } = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product);
})

//Alterar informação

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }
    return response.json({
        message: "Produto alterado"
    });
});

//deletar

app.delete("/products/:id", (request, response) => {
    const { id } = request.params;

    const productIndex = products.findIndex(product => product.id === id);

    products.splice(productIndex, 1);
    return response.json({
        message: "Produto Removido"
    });
});

app.listen(4002, () => console.log("O servidor está rodando na porta 4002"));