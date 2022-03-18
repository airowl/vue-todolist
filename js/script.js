

const app = new Vue({
    el: '#app',
    data: {
        todoText: '',

        todoList: []
    },
    methods: {
        clickElementBar(todoIndex) {
            if (this.todoList[todoIndex].done === false) {
                this.todoList[todoIndex].done = true;
            } else {
                this.todoList[todoIndex].done = false;
            }
            
        },

        clickToRemoveTodoElement(index) {
            this.todoList.splice(index, 1)
        },

        generateTodoElement() {
            //! verificare che l'input non sia vuoto
            if (this.todoText !== "") {
                const object = {text: `${this.todoText}`, done: false};
                this.todoList.push(object)
                this.todoText = '';
            } else {
                alert('ERRORE! Inserire un ToDo');
            }
            
        }

    }
});
