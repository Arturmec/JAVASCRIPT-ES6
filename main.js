class Todolist {
    constructor(){
        this.todos = [] ;
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log (this.todos);

    }
}

const MinhaLista = new Todolist();
document.getElementById ('novotodo').onclick = function (){
    MinhaLista.addTodo();

}