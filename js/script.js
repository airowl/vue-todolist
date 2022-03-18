

const app = new Vue({
    el: '#app',
    data: {
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
        }
    }
});