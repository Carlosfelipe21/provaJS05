let tarefas =[]
let opcao =""

while(opcao !== "5"){
    opcao = prompt(
        "Gerenciador de Tarefas\n\n"+
        "1 - Adicionar Tarefa\n"+
        "2 - Listar Tarefas\n"+
        "3 - Remover Tarefa\n"+
        "4 - Concluir Tarefa\n"+
        "5 - Sair\n"+
        "Escolha Uma Opção:")

    if(opcao === "1"){
        let tarefa = prompt("Digite a tarefa:")
        tarefas.push(tarefa)
        alert("Tarefa Adicionada!.")
    }else if(opcao === "2"){
        if(tarefas.length === 0){
            alert("Nenhuma Tarefa Cadastrada.")
        }else{
            let lista = "Tarefas:\n"
            for (let i = 0; i < tarefas.length; i++){
                lista += i + "-" + tarefas[i] + "\n"
            }
            alert(lista)
        }
    }else if(opcao === "3"){
        let indice = prompt("Digite o índice da tarefa para remover:")
        indice = Number(indice)
        if(indice >= 0 && indice < tarefas.length){
            tarefas.splice(indice, 1)
            alert("Tarefa removida!")
        }else{
            alert("Índice inválido.")
        }
    }else if(opcao === "4"){
        let indice = prompt("Digite o índice da tarefa para concluir:")
        indice = Number(indice)
        if(indice >= 0 && indice < tarefas.length) {
            tarefas[indice] = "ok" + tarefas[indice]
            alert("Tarefa Concluída!")
        }else{
            alert("Índice Inválido.")
        }
    }else if(opcao === "5") {
        alert("Saindo..")
    }else{
        alert("Opção inválida.")
    }
}


