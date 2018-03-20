import { connect } from 'react-redux';
import Home from '../compoments/Home';
import { increment, doubleAsync, key } from '../modules/home';

const mapStateToProps = state => ({
  count: state[key].count
});

const mapDispatchTpProps = {
  increment: () => increment(1),
  doubleAsync
};

export default connect(mapStateToProps, mapDispatchTpProps)(Home);
