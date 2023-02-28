// Write your code here.

import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="content-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachItem => (
            <FaqItem faqDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
