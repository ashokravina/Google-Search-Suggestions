// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {Details, UpdateedSearchList} = props
  const {suggestion} = Details
  const onClickButton = () => {
    UpdateedSearchList(suggestion)
  }
  return (
    <li className="suggestion-container">
      <div className="container">
        <p className="paragraph">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
          onClick={onClickButton}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
