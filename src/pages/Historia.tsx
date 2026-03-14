export default function Historia() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <img
          src="/PNG/ornamento.png"
          alt=""
          className="page-hero__watermark"
          style={{ opacity: 0.05 }}
          aria-hidden="true"
        />
        <div className="container page-hero__content">
          <p className="page-hero__script">Nuestra</p>
          <span className="gold-rule" />
          <h1 className="page-hero__title">Historia</h1>
          <p className="page-hero__lead">
            Mas de nueve siglos de fe, sacrificio y servicio humanitario que
            trascienden guerras, persecuciones y transformaciones historicas.
          </p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <span>Orden de San Lazaro</span>
          <span className="breadcrumb__sep">&rsaquo;</span>
          <span className="breadcrumb__current">Historia</span>
        </div>
      </div>

      <div className="hist-body">
        <div className="container hist-body__inner">
          {/* Contenido principal */}
          <div className="hist-content">
            <div className="hist-content__section">
              <p className="hist-content__label">Origenes</p>
              <h2 className="hist-content__heading">
                Fundacion en Tierra Santa
              </h2>
              <p className="hist-content__text">
                La Orden de San Lazaro tiene sus raices en un hospital fundado en
                Jerusalen a principios del siglo XI, inicialmente destinado a la
                atencion de peregrinos aquejados de lepra y otras enfermedades.
                Los caballeros que servian en este hospital tomaban votos
                religiosos similares a los de otras ordenes militares de la
                epoca, combinando la vida monastica con el servicio activo a los
                enfermos.
              </p>
              <p className="hist-content__text">
                Durante las Cruzadas, la Orden adquirio un caracter marcadamente
                militar al mismo tiempo que mantenia su vocacion hospitalaria.
                Sus miembros, muchos de ellos leprosos ellos mismos, se
                distinguian por su valentia extraordinaria en batalla, pues
                sabian que la muerte era ya su destino inevitable.
              </p>
              <blockquote className="hist-content__quote">
                "Los caballeros de San Lazaro no temian a la muerte porque ya la
                llevaban consigo, y en ese desprendimiento encontraron la
                libertad para servir sin condicion."
                <cite>&mdash; Cronica de las Cruzadas</cite>
              </blockquote>
            </div>

            <div className="hist-content__section">
              <p className="hist-content__label">Consolidacion</p>
              <h2 className="hist-content__heading">
                Reconocimiento y Expansion Europea
              </h2>
              <p className="hist-content__text">
                Tras la caida de los estados cruzados, la Orden se establecio en
                Europa, encontrando proteccion en Francia, donde bajo el reinado
                de Enrique IV se unio formalmente a la Orden de Nuestra Senora
                del Monte Carmelo en 1608. Esta union consolido sus
                prerrogativas nobiliarias y le otorgo un marco legal solido que
                permitio su expansion por todo el continente.
              </p>
              <p className="hist-content__text">
                A lo largo de los siglos XVII, XVIII y XIX, la Orden sobrevivio
                revoluciones y guerras adaptando su mision a las circunstancias
                cambiantes, sin perder jamas su compromiso fundamental con el
                servicio a los enfermos y vulnerables.
              </p>
            </div>

            <div className="hist-content__section">
              <p className="hist-content__label">Siglo XX &amp; XXI</p>
              <h2 className="hist-content__heading">Presencia Global</h2>
              <p className="hist-content__text">
                En el siglo XX la Orden se reorganizo y expandio a nivel
                internacional, estableciendo capitulos en America, Asia y
                Africa. Hoy cuenta con presencia en mas de 50 paises,
                manteniendo su mision hospitalaria a traves de obras beneficas,
                apoyo a instituciones medicas y programas de ayuda humanitaria.
              </p>
              <p className="hist-content__text">
                La estructura moderna de la Orden combina el respeto por las
                tradiciones caballerescas con una vision contemporanea del
                servicio, siendo reconocida internacionalmente como una
                institucion de prestigio y solida trayectoria etica.
              </p>
            </div>

            <div className="vzla-box">
              <p className="vzla-box__title">
                <img src="/PNG/ESCUDO_ORDEN_SAN_LAZARO_VZLA.png" alt="Venezuela" />
                Llegada a Venezuela
              </p>
              <p className="vzla-box__text">
                El Capitulo Venezuela fue establecido para llevar los valores
                milenarios de la Orden a tierras americanas. Desde su fundacion,
                reune a caballeros y damas comprometidos con el servicio a la
                comunidad venezolana, manteniendo una activa presencia en obras
                humanitarias, formacion caballeresca y el fomento de los valores
                institucionales. El capitulo opera bajo la autoridad de la Gran
                Magistratura Internacional y se rige por los estatutos de la
                Orden adaptados a la realidad local.
              </p>
            </div>
          </div>

          {/* Sidebar: timeline */}
          <aside className="hist-sidebar">
            <div className="timeline">
              <p className="timeline__title">Linea del Tiempo</p>

              <div className="tl-item">
                <div className="tl-dot">1048</div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XI &middot; Cruzadas</p>
                  <p className="tl-title">Fundacion del Hospital</p>
                  <p className="tl-text">
                    Establecimiento del Hospital de San Lazaro en Jerusalen para
                    la atencion de leprosos y peregrinos.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot">1255</div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XIII &middot; Iglesia</p>
                  <p className="tl-title">Reconocimiento Pontificio</p>
                  <p className="tl-text">
                    La Santa Sede otorga reconocimiento oficial consolidando la
                    mision hospitalaria y militar.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot">1489</div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XV &middot; Europa</p>
                  <p className="tl-title">Expansion Europea</p>
                  <p className="tl-text">
                    La Orden consolida su presencia en Francia e Italia bajo la
                    proteccion de las casas reales.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot">1608</div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XVII &middot; Francia</p>
                  <p className="tl-title">Union Real de Enrique IV</p>
                  <p className="tl-text">
                    Union formal con la Orden del Monte Carmelo bajo la Corona
                    francesa, ampliando su alcance institucional.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot">1830</div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XIX &middot; Restauracion</p>
                  <p className="tl-title">Reconstitucion Institucional</p>
                  <p className="tl-text">
                    Tras los convulsionados anos revolucionarios europeos, la
                    Orden se reconstituye reafirmando sus principios.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot">1910</div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XX &middot; America</p>
                  <p className="tl-title">Expansion Latinoamericana</p>
                  <p className="tl-text">
                    La Orden extiende su presencia al continente americano,
                    estableciendo capitulos en multiples paises.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div
                  className="tl-dot"
                  style={{ fontSize: ".46rem", color: "var(--green)" }}
                >
                  HOY
                </div>
                <div className="tl-body">
                  <p className="tl-year">Siglo XXI &middot; Venezuela</p>
                  <p className="tl-title">Capitulo Venezuela</p>
                  <p className="tl-text">
                    El capitulo venezolano es un referente de caridad, fe y
                    servicio en la region latinoamericana.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
