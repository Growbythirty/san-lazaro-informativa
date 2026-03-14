export default function Consejo() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <img
          src="/PNG/sello_de_la_orden_3D_2.png"
          alt=""
          className="page-hero__watermark"
          style={{ opacity: 0.06 }}
          aria-hidden="true"
        />
        <div className="container page-hero__content">
          <p className="page-hero__script">Consejo de</p>
          <span className="gold-rule" />
          <h1 className="page-hero__title">Gobierno</h1>
          <p className="page-hero__lead">
            Estructura de autoridad y linea de mando del Capitulo Venezuela de
            la Orden Militar y Hospitalaria de San Lazaro.
          </p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <span>Orden de San Lazaro</span>
          <span className="breadcrumb__sep">&rsaquo;</span>
          <span className="breadcrumb__current">Consejo de Gobierno</span>
        </div>
      </div>

      <div className="consejo-body">
        <div className="container">
          <div className="consejo-intro">
            <p className="consejo-intro__text">
              El gobierno del Capitulo Venezuela se ejerce a traves de una
              estructura jerarquica que garantiza la correcta administracion de
              la Orden, el cumplimiento de sus estatutos y la continuidad de su
              mision de servicio. Cada cargo tiene funciones definidas y responde
              a la autoridad del Gran Prior del Capitulo, quien a su vez depende
              de la Gran Magistratura Internacional.
            </p>
          </div>

          {/* ORGANIGRAMA */}
          <div className="org">
            {/* Contexto internacional */}
            <div className="org-context-card">
              <img
                src="/PNG/ESCUDO_ORDEN_SAN_LAZARO.png"
                alt="Internacional"
                className="org-context-card__img"
              />
              <div>
                <p className="org-context-card__role">
                  Autoridad Suprema &middot; Sede Internacional
                </p>
                <p className="org-context-card__title">
                  Gran Maestre Internacional
                </p>
              </div>
            </div>

            <div className="org-trunk" />

            {/* Gran Prior */}
            <div className="org-prior">
              <img
                src="/PNG/sello_de_la_orden_3D_2.png"
                alt="Sello"
                className="org-prior__seal"
              />
              <p className="org-prior__role">
                Maxima Autoridad del Capitulo Venezuela
              </p>
              <h2 className="org-prior__title">Gran Prior</h2>
              <p className="org-prior__sub">del Capitulo Venezuela</p>
            </div>

            <div className="org-trunk" />

            {/* Cinco oficiales */}
            <div className="org-officers">
              <div className="org-col">
                <div className="org-stem" />
                <div className="org-card">
                  <img
                    src="/PNG/llave.png"
                    alt="Canciller"
                    className="org-card__icon"
                  />
                  <p className="org-card__role">Cargo Institucional</p>
                  <h3 className="org-card__title">
                    Gran
                    <br />
                    Canciller
                  </h3>
                  <p className="org-card__desc">
                    Gestion administrativa, representacion protocolar y
                    coordinacion institucional de la Orden.
                  </p>
                </div>
              </div>

              <div className="org-col">
                <div className="org-stem" />
                <div className="org-card">
                  <img
                    src="/PNG/copa.png"
                    alt="Tesorero"
                    className="org-card__icon"
                  />
                  <p className="org-card__role">Cargo Institucional</p>
                  <h3 className="org-card__title">
                    Gran
                    <br />
                    Tesorero
                  </h3>
                  <p className="org-card__desc">
                    Administracion financiera, gestion del patrimonio y
                    rendicion de cuentas del Capitulo.
                  </p>
                </div>
              </div>

              <div className="org-col">
                <div className="org-stem" />
                <div className="org-card">
                  <img
                    src="/PNG/ornamento_central.png"
                    alt="Secretario"
                    className="org-card__icon"
                  />
                  <p className="org-card__role">Cargo Institucional</p>
                  <h3 className="org-card__title">
                    Gran Secretario
                    <br />
                    General
                  </h3>
                  <p className="org-card__desc">
                    Correspondencia oficial, archivo institucional, actas y
                    registros del Capitulo.
                  </p>
                </div>
              </div>

              <div className="org-col">
                <div className="org-stem" />
                <div className="org-card">
                  <img
                    src="/PNG/Insignia_de_la_ORDEN.png"
                    alt="Maestro de Ceremonias"
                    className="org-card__icon"
                  />
                  <p className="org-card__role">Cargo Institucional</p>
                  <h3 className="org-card__title">
                    Maestro de
                    <br />
                    Ceremonias
                  </h3>
                  <p className="org-card__desc">
                    Direccion del protocolo, investiduras, ceremonias y actos
                    solemnes de la Orden.
                  </p>
                </div>
              </div>

              <div className="org-col">
                <div className="org-stem" />
                <div className="org-card">
                  <img
                    src="/PNG/cristo_inri.png"
                    alt="Capellan"
                    className="org-card__icon"
                  />
                  <p className="org-card__role">Cargo Institucional</p>
                  <h3 className="org-card__title">
                    Capellan
                    <br />
                    del Capitulo
                  </h3>
                  <p className="org-card__desc">
                    Guia espiritual de la Orden, conduccion de la vida liturgica
                    y asistencia pastoral.
                  </p>
                </div>
              </div>
            </div>

            <div className="org-note">
              <strong>Nota institucional</strong>
              La estructura de gobierno del Capitulo Venezuela opera conforme a
              los Estatutos de la Orden Militar y Hospitalaria de San Lazaro de
              Jerusalen. Los cargos son designados por el Gran Prior conforme al
              reglamento interno del Capitulo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
