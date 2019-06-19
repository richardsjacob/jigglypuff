import React from 'react';
// import Header from './Header';
// import MainDisplay from './MainDisplay'
// import Footer from './Footer'
// import PurchaseModal from './PurcasheModal';
import UserPage from './UserPage';
import MainContainer from './MainContainer';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage,

  userName: store.products.userName,
})

function App({ onCheckoutPage, userName }) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/home/">Home</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={UserPage} />
        <Route
        path="/home/"
        render={(props)=> <MainContainer {...props} />}
        />
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
