export interface Todo {
  id: string
  title: string
  completed: boolean
}

// export type TodoId = Omit<Todo, 'title' | 'completed'>
export type TodoId = Pick<Todo, 'id'>

export type ListOfTodos = Array<Todo>
