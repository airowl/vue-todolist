

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
            const object = {text: `${this.todoText}`, done: false};

            this.todoList.push(object)

            this.todoText = '';
        }

    }
});

//! al click della X il li deve sparire