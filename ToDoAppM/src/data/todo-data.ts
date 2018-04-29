import { Todos } from './../app/model/todos';

export const TODO_ITEMS: Todos[] = [
    {
        Nr: 1,
        Done: false,
        Task: 'Study Node.js',
        Time: new Date(new Date().setDate(new Date().getDate() + 4)),
        Priority: "High",
    },
    {
        Nr: 2,
        Done: false,
        Task: 'Study MongoBD',
        Time: new Date(new Date().setDate(new Date().getDate() + 4)),
        Priority: "Medium",
    },
    {
        Nr: 3,
        Done: false,
        Task: 'Study Vue.js',
        Time: new Date(new Date().setDate(new Date().getDate() + 4)),
        Priority: "Low",
    }
];