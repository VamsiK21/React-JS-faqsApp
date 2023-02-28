// Write your code here.
import {Component} from 'react'
import './index.css'

const plusUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onRenderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="hr-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minusUrl : plusUrl
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button
        className="plus-btn"
        type="button"
        onClick={this.onToggleIsActive}
      >
        <img className="icon" src={imageUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="item-container">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.onRenderAnswer()}
      </li>
    )
  }
}

export default FaqItem
