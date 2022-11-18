import './index.css'

const FaqItem = props => {
  const {
    faqDetails: {id, questionText, answerText},
    displayAnsList,
    addDisplayAnsList,
    removeDisplayAnsList,
  } = props

  const showAns = displayAnsList.includes(id)

  const iconUrl = !showAns
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const iconAlt = !showAns ? 'plus' : 'minus'

  const addDisplayList = () => {
    addDisplayAnsList(id)
  }

  const removeDisplayList = () => {
    removeDisplayAnsList(id)
  }

  const updateAnsFunctions = showAns ? removeDisplayList : addDisplayList
  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button
          type="button"
          className="button-icon"
          onClick={updateAnsFunctions}
        >
          <img src={iconUrl} alt={iconAlt} className="icon" />
        </button>
      </div>
      {showAns && <p className="show-ans">{answerText}</p>}
    </li>
  )
}

export default FaqItem
