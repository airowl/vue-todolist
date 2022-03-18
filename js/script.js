

const app = new Vue({
    el: '#app',
    data: {
        todoText: '',

        todoList: [
            {
                text: 'Ciao sono un task',
                done: false
            },
            {
                text: 'sono il second task',
                done: false
            }
        ]
    },
    methods: {
        clickElementBar(todoIndex) {
            this.todoList[todoIndex].done = true;
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
