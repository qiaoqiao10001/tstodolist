import { ITodoData } from './typings'
import TodoList from './components/TodoList'
;((doc) => {
  const oApp: any = doc.querySelector('#app')
  const todoData: ITodoData[] = []
  const init = (): void => {
    const todoList: TodoList = new TodoList(oApp, todoData)
    todoList.init()
  }
  init()
  console.log(1)
})(document)
