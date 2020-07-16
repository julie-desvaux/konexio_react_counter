import React from 'react';

class Counter extends React.Component {    

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6">              
                        <h2>{this.props.count}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-success" onClick={this.props.incrementFn}>+</button>
                        <button type="button" className="btn btn-danger" onClick={this.props.decrementFn}>-</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Counter;