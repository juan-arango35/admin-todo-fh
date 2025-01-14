//me sirve para hacer el posteo es como si usara insomnia

import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete: complete };

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  console.log(todo);
  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description: description };

  const todo = await fetch('/api/todos', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  console.log(todo);
  return todo;
};



export const deleteTodoCompleted = async (): Promise<boolean> => {
  await fetch(`/api/todos`, {
    method: "DELETE",
    headers : {
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());
  
  return true;
};