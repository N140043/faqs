import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    displayAnsList: [],
  }

  addDisplayAnsList = id => {
    this.setState(prev => ({
      displayAnsList: [...prev.displayAnsList, id],
    }))
  }

  removeDisplayAnsList = id => {
    const {displayAnsList} = this.state
    const updateAnsList = displayAnsList.filter(each => each !== id)
    this.setState({
      displayAnsList: updateAnsList,
    })
  }

  render() {
    const {faqsList} = this.props
    const {displayAnsList} = this.state
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                faqDetails={each}
                key={each.id}
                displayAnsList={displayAnsList}
                addDisplayAnsList={this.addDisplayAnsList}
                removeDisplayAnsList={this.removeDisplayAnsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
