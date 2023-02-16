// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onclickbutton = () => {
    const {isSubscribe} = this.state
    this.setState(prevState => ({
      isSubscribe: 'prevState.isSubscribe' ? 'subscribed' : 'subscribe',
    }))
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="container">
        <h1 className="header">Welcome</h1>
        <h1 className="head">Thank you!Happy Learning</h1>
        <button className="btn" type="button" onClick={this.onclickbutton}>
          {isSubscribe}
        </button>
      </div>
    )
  }
}
export default Welcome
