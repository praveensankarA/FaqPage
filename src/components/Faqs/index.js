// Write your code here.

// <------Murugan Thunnai------->

import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isSelectedList: []}

  viewAnsFunction = id => {
    const {isSelectedList} = this.state
    let newList = isSelectedList
    if (newList.includes(id)) {
      newList = newList.filter(each => each !== id)
    } else {
      newList.push(id)
    }
    this.setState({isSelectedList: newList})
  }

  faqListFunction = () => {
    const {isSelectedList} = this.state
    const {faqsList} = this.props
    console.log(faqsList)

    return (
      <ul className="faq-items-container">
        {faqsList.map(each => (
          <FaqItem
            val={each}
            isSelectedList={isSelectedList}
            viewAnsFunction={this.viewAnsFunction}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="faq-main-container">
        <div className="faq-card-container">
          <h1 className="faq-main-head">FAQs</h1>
          {this.faqListFunction()}
        </div>
      </div>
    )
  }
}

export default Faqs
