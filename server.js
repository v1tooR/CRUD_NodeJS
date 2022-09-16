const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if(request.url === '/produto'){
        response.end(
            JSON.stringify({
                message: "Rota dos produtos"
            })
        )
    }

    if(request.url === '/clientes'){
        response.end(
            JSON.stringify({
                message: "Rota dos clientes"
            })
        )
    }

    response.end(
        JSON.stringify({
            message: "Qualquer rota"
        })
    )
})
.listen(4001, () => console.log("Sevidor está rodando na porta 4001"));