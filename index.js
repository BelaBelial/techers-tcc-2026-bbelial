//Arquivo principal que vai rodar o servidor e onde ele vai ser chamado e executado deve ser na pasta raiz

import server from "./src/app.js"

server.listen(3000, console.log("The server is running..."));