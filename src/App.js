import HomeComponent from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import { Switch, Route, Redirect } from 'react-router-dom';
import Cart from './components/ItemList';

const App = ()  => {
  return (
    <>
    <HeaderContainer />
    <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/cart" component={Cart}/>
        <Redirect to="/" />
    </Switch>
    

    </>
  );
}

export default App;
