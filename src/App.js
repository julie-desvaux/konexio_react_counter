import React from 'react';
import Counter from './components/Counter'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    console.log('incrementCount')
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    console.log('decrementCount')
      if(this.state.count > 1) {
          this.setState({ count: this.state.count - 1 });
      }
  }
  
  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <Counter count={this.state.count} incrementFn={() => this.incrementCount()} decrementFn={() => this.decrementCount()}/>
      </div>
    );
  }
}
export default App;