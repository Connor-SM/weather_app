import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="Form col-md-8">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    );
  }
}

export default Form;
