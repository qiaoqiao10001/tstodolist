import { ITodoData } from '../../../typings'
import Component from './Component'
export interface IListOptions {
  wrapperEl: HTMLElement
  todoData: ITodoData[]
}

class List extends Component {
  private wrapperEl: HTMLElement
  private static todoData: ITodoData[]
  constructor(options: IListOptions) {
    super()
    this.wrapperEl = options.wrapperEl
    List.todoData = options.todoData
  }
  render() {
    this.wrapperEl.innerHTML += Component.listView(List.todoData)
  }

  public bindEvent() {
    const oTodoList: any = document.querySelector('.todo-list')
    oTodoList.addEventListener('click', this.handleListClick.bind(this))
  }

  private handleListClick(e: MouseEvent) {
    // 处理鼠标点击列表
    const tar = e.target as HTMLElement
    const tagName = tar.tagName.toLowerCase()
    const oTodoItems = document.getElementsByClassName('todo-item')

    if (tagName === 'input' || tagName === 'button') {
      const id: number = parseInt(tar.dataset.id)
      switch (tagName) {
        case 'input':
          this._handleCheckBoxClick(id, oTodoItems)
          break
        case 'button':
          this._handleButtonClick(id, oTodoItems)
          // 删除元素
          break
        default:
          break
      }
    }
  }

  private _handleCheckBoxClick(id: number, oTodoItems) {
    List.todoData = List.todoData.map((todo: ITodoData, index: number) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        oTodoItems[index].querySelector('span').style.textDecoration =
          todo.completed ? 'line-through' : ''
      }
      return todo
    })
  }
  private _handleButtonClick(id: number, oTodoItems) {
    List.todoData = List.todoData.filter((todo: ITodoData, index: number) => {
      if (todo.id === id) {
        oTodoItems[index].remove()
      } else {
        return todo
      }
    })
  }

  public static addItem(val: string) {
    const item = {
      id: new Date().getTime(),
      content: val,
      completed: false,
    }
    List.todoData.push(item)
    const todoList = document.querySelector('.todo-list')
    if (List.todoData.length === 1) {
      todoList.innerHTML = ''
    }

    todoList.innerHTML += Component.todoView(item)
  }
}
export default List
