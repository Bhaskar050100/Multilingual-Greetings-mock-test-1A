import './index.css'

const GreetingItem = props => {
  const {isActive, onClickChangeLanguage, LanguageItemDetails} = props
  const {buttonText, id} = LanguageItemDetails
  console.log(isActive, buttonText)

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeTabBtnClassName = isActive ? 'highlighted' : 'not-highlighted'

  return (
    <li className="button-container">
      <button
        type="button"
        className={`buttons ${activeTabBtnClassName}`}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default GreetingItem
