import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  OnEatMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="mango">{count1}</span> mangoes{' '}
            <span className="banana">{count2}</span> bananas
          </h1>

          <div className="content-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <br />
              <button className="btn" type="submit" onClick={this.OnEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <br />
              <button className="btn" type="submit" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
