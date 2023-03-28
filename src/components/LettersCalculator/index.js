import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchCount: 0,
  }

  onSearchInput = event => {
    const letters = event.target.value
    this.setState({
      searchCount: letters.length,
    })
  }

  render() {
    const {searchCount} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="search">Enter the phrase</label>
          <input
            id="search"
            type="text"
            className="search-ip"
            placeholder="Enter the phrase"
            onChange={this.onSearchInput}
          />
          <p className="para">No.of letters: {searchCount}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
