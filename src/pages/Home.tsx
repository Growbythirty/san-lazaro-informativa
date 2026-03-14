interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-hero">
        <div className="page-hero__bg" />
        <img
          src="/PNG/sello_de_la_orden_3D.png"
          alt=""
          className="page-hero__watermark"
          aria-hidden="true"
        />
        <div className="container page-hero__content">
          <p className="page-hero__script">Bienvenido</p>
          <span className="gold-rule" />
          <h1 className="page-hero__title">
            Orden Militar y Hospitalaria
            <br />
            de San Lazaro
          </h1>
          <p className="page-hero__lead">
            Una de las ordenes de caballeria mas antiguas del mundo, presente en
            Venezuela con el compromiso de preservar sus valores de fe, honor y
            servicio humanitario.
          </p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <span>Orden de San Lazaro</span>
          <span className="breadcrumb__sep">&rsaquo;</span>
          <span className="breadcrumb__current">Inicio</span>
        </div>
      </div>

      {/* Cards de acceso rapido */}
      <section className="home-intro">
        <div className="container">
          <div className="home-intro__grid">
            <div className="intro-card">
              <img
                src="/PNG/ESCUDO_ORDEN_SAN_LAZARO_VZLA.png"
                alt="Venezuela"
                className="intro-card__icon"
              />
              <h2 className="intro-card__title">Capitulo Venezuela</h2>
              <p className="intro-card__text">
                Fundado para llevar los valores milenarios de la Orden a tierras
                venezolanas, congrega a caballeros y damas comprometidos con el
                servicio a la comunidad.
              </p>
              <span
                className="intro-card__link"
                onClick={() => onNavigate("consejo")}
              >
                Consejo de Gobierno
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="intro-card">
              <img
                src="/PNG/Insignia_de_la_ORDEN.png"
                alt="Historia"
                className="intro-card__icon"
              />
              <h2 className="intro-card__title">Nueve Siglos de Historia</h2>
              <p className="intro-card__text">
                Desde las Cruzadas del siglo XI hasta hoy, la Orden de San
                Lazaro ha mantenido una continuidad historica unica, sirviendo a
                los mas vulnerables en cada epoca.
              </p>
              <span
                className="intro-card__link"
                onClick={() => onNavigate("historia")}
              >
                Conocer la Historia
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="intro-card">
              <img
                src="/PNG/sello_de_la_orden.png"
                alt="Mision"
                className="intro-card__icon"
              />
              <h2 className="intro-card__title">Mision &amp; Vision</h2>
              <p className="intro-card__text">
                La mision hospitalaria de la Orden trasciende los siglos: el
                cuidado de los enfermos y vulnerables sigue siendo el eje
                central de toda actividad institucional.
              </p>
              <span
                className="intro-card__link"
                style={{ color: "var(--gold)", cursor: "default", gap: 0 }}
              >
                Fe &middot; Servicio &middot; Honor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre la Orden */}
      <section className="home-about">
        <div className="container home-about__inner">
          <div className="home-about__media">
            <img
              src="/PNG/pecho_armadura.jpg"
              alt="Caballero de la Orden"
              className="home-about__img"
            />
            <img
              src="/PNG/Insignia_de_la_ORDEN.png"
              alt="Insignia"
              className="home-about__badge"
            />
            <img
              src="/PNG/ornamento_central.png"
              alt=""
              className="home-about__ornament"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="home-about__tag">&mdash; Quienes Somos</p>
            <h2 className="home-about__heading">
              Una orden de caballeria
              <br />
              comprometida con el servicio
            </h2>
            <p className="home-about__text">
              La Orden Militar y Hospitalaria de San Lazaro de Jerusalen es una
              de las instituciones caballerescas con mayor continuidad historica
              en el mundo occidental. Su origen en Tierra Santa durante las
              Cruzadas la convirtio inicialmente en una orden dedicada al
              cuidado de los leprosos y enfermos.
            </p>
            <p className="home-about__text">
              A traves de los siglos, la Orden ha mantenido su espiritu original
              adaptando su mision a cada epoca, sin perder los principios de fe
              cristiana, servicio humanitario y codigo de honor que constituyen
              su identidad.
            </p>
            <p className="home-about__text">
              El Capitulo Venezuela reune a miembros comprometidos con estos
              ideales, contribuyendo activamente al bienestar de la comunidad
              venezolana bajo el estandarte de la Cruz Verde de San Lazaro.
            </p>
            <blockquote className="home-about__quote">
              "La estrella verde ilumina el camino del servicio y la caridad,
              principios sobre los que se funda esta noble institucion desde sus
              origenes en Tierra Santa."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Estadisticas */}
      <div className="home-stats">
        <div className="container">
          <div className="home-stats__grid">
            <div className="hstat">
              <div className="hstat__num">975+</div>
              <div className="hstat__label">Anos de Historia</div>
            </div>
            <div className="hstat">
              <div className="hstat__num">50+</div>
              <div className="hstat__label">Paises Presentes</div>
            </div>
            <div className="hstat">
              <div className="hstat__num">499</div>
              <div className="hstat__label">Seguidores Venezuela</div>
            </div>
            <div className="hstat">
              <div className="hstat__num">5</div>
              <div className="hstat__label">Rangos Institucionales</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pilares */}
      <section className="home-pillars">
        <div className="container">
          <div className="section-head">
            <span className="section-head__script">Pilares</span>
            <h2 className="section-head__title">Fundamentos de la Orden</h2>
            <span className="gold-rule" />
            <p className="section-head__text">
              Los valores que han guiado a la Orden a traves de casi mil anos de
              historia.
            </p>
          </div>
          <div className="pillars-grid">
            <div className="pillar">
              <p className="pillar__num">01</p>
              <img
                src="/PNG/cristo_inri.png"
                alt="Fe"
                className="pillar__icon"
              />
              <h3 className="pillar__title">Fe &amp; Espiritualidad</h3>
              <p className="pillar__text">
                Enraizados en la tradicion cristiana, los miembros cultivan una
                vida de fe profunda como fundamento de todo servicio y accion
                institucional.
              </p>
            </div>
            <div className="pillar">
              <p className="pillar__num">02</p>
              <img
                src="/PNG/copa.png"
                alt="Servicio"
                className="pillar__icon"
              />
              <h3 className="pillar__title">Servicio &amp; Caridad</h3>
              <p className="pillar__text">
                Siguiendo el ejemplo de San Lazaro, la Orden dedica sus
                esfuerzos a la asistencia de los enfermos, vulnerables y
                necesitados.
              </p>
            </div>
            <div className="pillar">
              <p className="pillar__num">03</p>
              <img
                src="/PNG/llave.png"
                alt="Honor"
                className="pillar__icon"
              />
              <h3 className="pillar__title">Honor &amp; Tradicion</h3>
              <p className="pillar__text">
                La herencia caballeresca de casi mil anos se preserva a traves
                de ceremonias, investiduras y el codigo de honor que rige cada
                miembro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
