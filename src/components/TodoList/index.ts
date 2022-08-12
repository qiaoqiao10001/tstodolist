import { ITodoData } from '../../typings'
import Input, { IInputOptions } from './subs/Input'
import List from './subs/List'
class TodoList {
  private el: HTMLElement
  private todoData: ITodoData[]
  private input: Input
  private list: List
  private todoWrapper: HTMLElement

  constructor(el: HTMLElement, todoData: ITodoData[]) {
    // app, tododata
    this.el = el
    this.todoData = todoData
    this.todoWrapper = document.createElement('div')
    console.log(this.el, this.todoData)
  }
  public init() {
    this.createComponents()
    this.render()
    this.bindEvent()
  }
  private createComponents() {
    // 实例化子组件
    this.input = new Input({
      wrapperEl: this.todoWrapper,
      placeholderText: '请输入',
      buttonText: '增加',
    })
    this.list = new List({
      todoData: this.todoData,
      wrapperEl: this.todoWrapper,
    })
  }

  private render() {
    // console.log('render')
    this.input.render()
    this.list.render()
    this.el.appendChild(this.todoWrapper)
  }

  private bindEvent() {
    console.log('bindevent')
    this.input.bindEvent()
    this.list.bindEvent()
  }
}

export default TodoList
