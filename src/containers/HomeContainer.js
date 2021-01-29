import { connect } from 'react-redux';
import Home from '../components/Home';
import {addToCart, removeToCart} from '../services/Actions/action';
// export default Home;


const mapStateToProps = state => ({
    data:state.cartItems

})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)