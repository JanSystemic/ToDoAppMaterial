import { TodosService } from './../service/todos.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public _todosForm: FormGroup;


  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<TodoComponent>,
  private _todosService: TodosService,
  @Inject (MAT_DIALOG_DATA) public data: any) { }

  onNoClick():  void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._todosForm = this._formBuilder.group({
     Nr: [this.data.Nr],
     Done: [this.data.Done],
     Task: [this.data.Task, [Validators.required]],
     Time: [this.data.Time],
     Priority: [this.data.Priority]
    });
  }
  onSubmit() {
      if (isNaN(this.data.Nr)) {
        this._todosService.addTodo(this._todosForm.value);
        this.dialogRef.close();
      } else {
        this._todosService.editTodo(this._todosForm.value);
        this.dialogRef.close();
      }  
  }


}
