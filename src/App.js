import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './modules/main';
import Catalog from './modules/catalog'
import CatalogItem from './modules/catalogItem'

class App extends Component {
  render (){
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/item" component={CatalogItem} />
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}


export default App;
