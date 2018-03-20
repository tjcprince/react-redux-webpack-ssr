import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Duck from '../../../../assets/images/Duck.jpg';
import styles from './Home.scss';

class Home extends React.Component {
  componentDidMount() {
    // this.props.increment();
  }
  render() {
    const { count, doubleAsync } = this.props;
    return (
      <div className="home__container">
        <Button type="primary">Primary</Button>
        <img src={Duck} alt="鸭子" />
        <h3 className={styles.bg}>Counter: {count}</h3>
        <button onClick={this.props.increment} id="btn">
          Increment11
        </button>
        <br />
        <button onClick={doubleAsync}>Double(Async)</button>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired
};
export default Home;
