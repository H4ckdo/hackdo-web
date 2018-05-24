const React = require('react');
import Speaker1 from '../../images/speaker_1.jpg';
import Speaker2 from '../../images/speaker_2.jpg';
import Speaker3 from '../../images/speaker_3.jpg';
import Speaker4 from '../../images/speaker_4.jpg';
import Speaker5 from '../../images/speaker_5.jpg';
import Speaker6 from '../../images/speaker_6.jpg';
import Speaker7 from '../../images/speaker_7.jpg';
import Speaker8 from '../../images/speaker_8.jpg';
import Speaker9 from '../../images/speaker_9.jpg';
import Speaker10 from '../../images/speaker_10.jpg';
import Speaker11 from '../../images/speaker_11.jpg';
import Speaker12 from '../../images/speaker_12.jpg';
import Speaker13 from '../../images/speaker_13.jpg';
import Speaker14 from '../../images/speaker_14.jpg';
import Speaker15 from '../../images/speaker_15.jpeg';
import Speaker16 from '../../images/speaker_16.jpeg';

const InjectChildComponent = require('./Inject.js');
class SectionSpeakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taps: 0,
      speakers: [
        {
          image: Speaker15,
          name: 'Alejandra Giraldo',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Desarrolladora Web Backend y Frontend Angular, Node.js en Endava.
            </p>
          ),
          link: 'https://twitter.com/maleja111',
          nickname: '@maleja111'
        },
        {
          image: Speaker13,
          name: 'Valeria Garcia Gonzalez',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Soy una diseñadora e ilustradora de La Guajira, Colombia. Estudié Diseño Gráfico en la Universidad Pontificia Bolivariana.
            </p>
          ),
          link: 'https://twitter.com/_painpony',
          nickname: '@_painpony'
        },
        {
          image: Speaker16,
          name: 'Daniela Patiño',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Ingeniera en formación, Ruby on Rails, SoftwareDeveloper at <a href="https://twitter.com/FLUVIPGlobal" target="_blank">@FLUVIPGlobal</a>.
            </p>
          ),
          link: 'https://twitter.com/DaniCaprichos',
          nickname: '@DaniCaprichos'
        },
        {
          image: Speaker8,
          name: 'Laura Camacho Vásquez',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Ingeniera de desarrollo en <b>Seven4N</b>
            </p>
          ),
          link: '',
          nickname: ''
        },
        {
          image: Speaker1,
          name: 'Julián Duque',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Developer and Educator - Engineer at <a target="_blank" href="https://twitter.com/NodeSource">@NodeSource</a> - Co-Organizer at <a target="_blank" href='https://twitter.com/Suncoastjs'>@Suncoastjs</a> <a href='https://twitter.com/MedellinJS'>@MedellinJS</a> <a href='https://twitter.com/jsconfco'>@JSConfCo</a> {'{Medellín, St. Petersburg, FL}'} - Satán es la Cumbia
            </p>
          ),
          link: 'https://twitter.com/julian_duque',
          nickname: '@julian_duque'
        },
        {
          image: Speaker2,
          name: 'Juan David Castillo Betancur',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Desarrollador de Software en Medellin, Colombia. Escribo código y tomo fotos de vez en cuando.
            </p>
          ),
          link: 'https://twitter.com/castillobgr',
          nickname: '@castillobgr'
        },
        {
          image: Speaker9,
          name: 'Yuji Kiriki',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Certified™ Buzzword© Surfer®. Living life async. Team homeopathy expert. Charlatan del SW. "Millennial Leader". My blog about SW: <a target="_blank" href="https://yujikiriki.github.io/">yujikiriki.com </a>
            </p>
          ),
          link: 'https://twitter.com/ykiriki?lang=es',
          nickname: '@ykiriki'
        },
        {
          image: Speaker3,
          name: 'Romel Pérez',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code.
            </p>
          ),
          link: 'https://twitter.com/romelperez07',
          nickname: '@romelperez07'
        },
        {
          image: Speaker4,
          name: 'Oscar Rendon',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Cycling, programming, communities, math/ai enthusiast
            </p>
          ),
          link: 'https://twitter.com/orendon',
          nickname: '@orendon'
        },
        {
          image: Speaker5,
          name: 'Giovanny Gongora',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Support Engineer at <a target="_blank" href="https://twitter.com/NodeSource">@NodeSource</a>. I spend time coding, giving talks at events and doing random stuff. Formerly <a target="_blank" href='https://twitter.com/mozilla'>@Mozilla</a>.
            </p>
          ),
          link: 'https://twitter.com/Gioyik',
          nickname: '@Gioyik'
        },
        {
          image: Speaker6,
          name: 'Giovanny Beltran',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Making games <a target="_blank" href='https://twitter.com/juegos_indies'>@juegos_indies</a> - <a target="_blank" href='https://twitter.com/bogotajs'>@bogotajs</a> organizer mira mi canal: <a target="_blank" href=' http://goo.gl/IDLO8C'>Youtube</a> y mi <a target="_blank" href='http://agar3s.games'>pagina web</a>.
            </p>
          ),
          link: 'https://twitter.com/agar3s',
          nickname: '@agar3s'
        },
        {
          image: Speaker7,
          name: 'Harlen giraldo ortega',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Desarrollador de front-end en <b>Seven4N</b>
            </p>
          ),
          link: '',
          nickname: ''
        },
        /*
        {
          image: Speaker6,
          name: 'Juan Pablo Correa Rendón',
          bio: (
            <p className="section-speakers__content__list__item__copy">

            </p>
          ),
          link: '',
          nickname: '@agar3s'
        },
        */
        {
          image: Speaker10,
          name: 'Rafael Socarras',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Co-Fundador y CTO de <a target="_blank" href="https://twitter.com/MensajerosUrban">@MensajerosUrban</a> y <a href="">@Pleizt</a> Miembro Junta directiva Andi del Futuro, soñador, emprendedor serial, cambiando el mundo desde el emprendimiento
            </p>
          ),
          link: 'https://twitter.com/rafaelsocarras',
          nickname: '@rafaelsocarras'
        },
        {
          image: Speaker11,
          name: 'Jota Rodriguez',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Founder INNOVAATICS, Do In Bits, eduBits, Docente catedratico universidad Tecnológica del Chocó Diego Luis Córdoba
              <br />
              Funder & CEO in Dó In Bits.
            </p>
          ),
          link: 'https://doinbits.com.co/',
          nickname: 'doinbits'
        },
        {
          image: Speaker12,
          name: 'Jarlinton Moreno Zea',
          id: 'frezeer',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Master's Degree student at ICMC-USP, with focus on Machine Learning and Data Sciences in Complex Networks.
              passionate about statistical learning and an aspirant to become a fullstack Javascript developer.
            </p>
          ),
          link: 'https://twitter.com/jarlinton_zea',
          nickname: '@jarlinton_zea'
        },
        {
          image: Speaker14,
          name: 'Santiago Bernal',
          bio: (
            <p className="section-speakers__content__list__item__copy">
              Software Engineer, Teacher, Translator : InfoSec, AR/VR, Drones, iOT, Soccer, Productivity
            </p>
          ),
          link: 'https://twitter.com/santiaguf',
          nickname: '@aumentada'
        }
      ]
    }
  }

  proposal() {
    //window.location.href = "https://goo.gl/forms/60LHY4IjvvTDyumH2";
    window.open("https://goo.gl/forms/60LHY4IjvvTDyumH2");
  }

  insecto() {
    let taps = this.state.taps+1;
    this.setState({taps}, () => {
      if(this.state.taps === 5) {
        let audio = document.getElementById('freezer');
        audio.play();
      }
      if(this.state.taps > 5) this.setState({taps: 0});
    });
  }

  render() {
    let { speakers } = this.state;
    return (
      <div className="wrap-section-speakers">
        <audio src="/assets/freezer.mp3" id="freezer"></audio>
        <section className="section-speakers">
          <h1 className="section-speakers__title">
            Speakers
            <div className="lower-bar"></div>
          </h1>
          <article className="section-speakers__content">
            {/*<p className="section-speakers__content__copy">Envía tu propuesta de conferencia <span className="btn-speaker" onClick={ this.proposal.bind(this) }>Aqui</span></p>*/}
            <p className="section-speakers__content__copy">Estos son nuestros speakers ⭐</p>
            <ol className="section-speakers__content__list">
              {
                speakers.map(({ name, image, link, nickname, bio, id = '' }, index) => {
                  return (
                    <li className="section-speakers__content__list__item" key={index}>
                      <div onClick={id === 'frezeer' ? this.insecto.bind(this) : null} className="section-speakers__content__list__item__image" style={
                        { 'backgroundImage': `url(${image})` }
                      }></div>
                      <span className="section-speakers__content__list__item__name">
                        {name}
                      </span>
                      {bio}
                      <a className="twiter-link" target="_blank" href={link} target="_blank">{nickname}</a>
                    </li>
                  )
                })
              }

            </ol>
          </article>
        </section>
      </div>
    )
  }
}

module.exports = InjectChildComponent(SectionSpeakers, []);
