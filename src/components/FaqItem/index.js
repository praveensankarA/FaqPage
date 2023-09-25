// Write your code here.

import './index.css'

const FaqItem = props => {
  const {val, isSelectedList, viewAnsFunction} = props

  const isSelected = isSelectedList.includes(val.id)
  const btnClicked = () => {
    viewAnsFunction(val.id)
  }

  const logoUrl = !isSelected
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const logoAltName = !isSelected ? 'plus' : 'minus'
  return (
    <li className="list-ele">
      <div className="question-container">
        <h1 className="question-text">{val.questionText}</h1>
        <button className="plus-btn" type="button" onClick={btnClicked}>
          <img src={logoUrl} alt={logoAltName} className="plus-logo" />
        </button>
      </div>

      {isSelected && <hr className="hr" />}
      {isSelected && <p className="ans-text">{val.answerText}</p>}
    </li>
  )
}

export default FaqItem
