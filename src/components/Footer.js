import { React, Component } from 'react';
import './Footer.css';
import FooterImg from '../img/grafico.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="text-footer">
        <p>Obrigado pela visita. Nos vemos no dia 15!</p>
      </div>
      <div className="img-footer">
        <img id="imgfooter" src={FooterImg} alt="" />
      </div>
    </div>
  );
}
