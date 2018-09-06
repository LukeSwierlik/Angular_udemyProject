import {Component, OnInit} from '@angular/core';
import Todo from '../todo.interface';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
    newTodoTitle = 'new task...';
    idTask = 3;

    todos: Array<Todo> = [
        {
            title: 'JavaScript ES6',
            complete: true,
            id: 1
        },
        {
            title: 'TypeScript',
            complete: false,
            id: 2
        }
    ];

    addTodo() {
        if (!this.newTodoTitle) {
            return;
        }

        const newTodo: Todo = {
            title: this.newTodoTitle,
            complete: false,
            id: this.idTask++
        };

        this.todos.push(newTodo);

        this.newTodoTitle = '';
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}
