// exercicio 1

listaDeUsuarios = [];
function CadastrarUsuario(nome, data, email, senha) {
    listaDeUsuarios.push({
        nome: nome,
        data: data,
        email: email,
        senha: senha
    });
}

CadastrarUsuario("Maria", "10/05/2007", "maria@gmail.com", "123456");
CadastrarUsuario("João", "20/08/2006", "joao@gmail.com", "654321");

console.log(listaDeUsuarios);

// exercicio 2
function ListarUsuarios(listaDeUsuarios) {

    listaDeUsuarios.forEach(function(usuario) {

        console.log("Nome: " + usuario.nome);
        console.log("Data de nascimento: " + usuario.data);
        console.log("E-mail: " + usuario.email);
        console.log("Senha: " + usuario.senha);

    });
}

ListarUsuarios(listaDeUsuarios);

// exercicio 3
function CadastrarUsuario(nome, data, email, senha, callback) {

    listaDeUsuarios.push({
        nome: nome,
        data: data,
        email: email,
        senha: senha
    });

    callback();
}

function MensagemDeCadastro() {
    console.log("Usuário registrado com sucesso!");
}

CadastrarUsuario(
    "Pedro",
    "15/03/2007",
    "pedro@gmail.com",
    "123456",
    MensagemDeCadastro
);