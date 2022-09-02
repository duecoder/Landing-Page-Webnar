import { React, Component } from 'react';
import './Header.css';
import HandMoney from '../img/hand_money.png';
import Graphic from '../img/grafico.png';

export default class Header extends Component {
  state = {};

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div className="header">
        <div className="img">
          <img className="handmoney" src={HandMoney} alt="none" />
        </div>
        <div className="text">
          <h2>BEM VINDO</h2>
          <h3>À Landing Page do</h3>
          <h1>Webinário de Mercado Financeiro</h1>
        </div>
      </div>
    );
  }
}
