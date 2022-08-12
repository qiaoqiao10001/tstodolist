import { ITodoData } from '../../../typings'

abstract class Component {
  // input视图的方法
  protected static inputView(placeHolder: string, buttonText: string): string {
    // 限定封装类型  protected子类可以使用，内部可以使用
    return `<div>
        <input placeholder="${placeHolder}" type="text" class="todo-input" >
        <button class="add-btn">${buttonText}</button>
      </div>
    `
  }

  protected static listView(data: ITodoData[]): string {
    return `
      <div class="todo-list">
        ${
          data.length
            ? data.map((todo: ITodoData) => {
                return Component.todoView(todo)
              })
            : '当前没有数据'
        }
      </div>
    `
      .split(',')
      .join('')
  }

  protected static todoView(todo: ITodoData): string {
    const { id, content, completed } = todo
    return `
    <div class="todo-item" >
    <input type="checkbox" data-id="${id}" ${completed ? 'checked' : ''}>
    <span style="text-decoration: ${
      completed ? 'line-through' : ''
    }">${content}</span>
    <button data-id="${id}">删除</button>
    </div>
    `
  }
}

export default Component
