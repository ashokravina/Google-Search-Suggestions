// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchinput: ''}
  UpdateedSearchList = suggestion => {
    this.setState({
      searchinput: suggestion,
    })
  }
  onChangeSearchInput = event => {
    const {searchinput} = this.state
    this.setState({
      searchinput: event.target.value,
    })
  }
  render() {
    const {suggestionsList} = this.props
    const {searchinput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search logo"
              className="search-img"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={searchinput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="suggestion">
            {searchResults.map(eachItem => (
              <SuggestionItem
                Details={eachItem}
                UpdateedSearchList={this.UpdateedSearchList}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
