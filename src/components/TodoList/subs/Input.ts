import Component from './Component'
import List from './List'
export interface IInputOptions {
  wrapperEl: HTMLElement
  placeholderText: string
  buttonText: string
}
class Input extends Component {
  private options: IInputOptions
  constructor(options: IInputOptions) {
    super()
    this.options = options
  }

  public render() {
    const { placeholderText, buttonText } = this.options
    this.options.wrapperEl.innerHTML += Component.inputView(
      placeholderText,
      buttonText
    )
  }

  public bindEvent() {
    const oAddBtn: any = document.querySelector('.add-btn')
    const oInput: any = document.querySelector('.todo-input')
    oAddBtn.addEventListener(
      'click',
      this.handleBtnClick.bind(this, oInput),
      false
    )
  }

  private handleBtnClick(input) {
    const val: string = input.value.trim()
    if (val.length) {
      List.addItem(val)
      input.value = ''
    }
  }
}
export default Input
