

 clientes = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"];

// 1. Mostrar a lista de clientes
console.log("Lista de clientes:", clientes);

// 2. Cadastrar um novo cliente no final da lista
clientes.push("Felipe");
console.log("Após cadastrar:", clientes);

// 3. Remover o último cliente cadastrado
clientes.pop();
console.log("Após remover o último:", clientes);

// 4. Remover um cliente de uma posição específica usando splice()
clientes.splice(1, 1);
console.log("Após remover da posição 1:", clientes);

// 5. Substituir o nome de um cliente por outro
clientes[0] = "Gabriela";
console.log("Após substituir o nome:", clientes);

// 6. Mostrar a quantidade de clientes cadastrados
console.log("Quantidade de clientes:", clientes.length);
