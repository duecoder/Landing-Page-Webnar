import { React, Component } from 'react';
import './Content.css';
import ImageContent from '../img/imagecontent.png';

export default class Content extends Component {
  state = {};

  render() {
    return (
      <div className="content-container">
        <div className="image">
          <img className="statistic" src={ImageContent} alt="" />
        </div>
        <div className="content-text">
          <h1>
            O evento acontecerá em:
            <p />
            <span id="date">15 de Setembro de 2022 às 19 horas</span>
          </h1>

          <p id="paragraph">
            Preparamos um extenso e importante conteúdo para você que deseja
            evoluir seu conhecimento sobre o mercado financeiro. Reunimos
            profissionais qualificados e experientes para ministrar as aulas,
            então se prepare, e não perca essa oportunidade!
          </p>
        </div>

        <div className="form-below">
          <h1>
            Abaixo você se cadastra e fica por dentro de novidades e
            atualizações sobre nosso webinário:
          </h1>
        </div>
      </div>
    );
  }
}
