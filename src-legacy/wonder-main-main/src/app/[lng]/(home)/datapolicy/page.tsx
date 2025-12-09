import React from 'react';
import styles from './Datapolicy.module.scss';
import { useTranslation } from '@i18n-server';
export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t('metaTagDataPolicy.' + value, { defaultValue: value });
  const title = trans('Our Data Policy');
  const description = trans('Our Data Policy_description');
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['https://cdn.wondertravel.co/seo/main.png'],
    },
  };
}

const TermsAndConditions = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.div}>
        <h1>Politica de tratamiento de datos personales</h1>
        <h1>Wonder Travel Latam S.A.S.</h1>
        <br></br>
        <br></br>
        <p>
          Para nosotros es fundamental saber que tus datos personales están
          protegidos mientras utilizas nuestros servicios. Por eso, contamos con
          una política de tratamiento de datos personales clara y completa,
          conforme a los lineamientos legales, para que puedas confiar en
          nosotros y en todo lo que tenemos para ofrecerte. Nuestro objetivo es
          acercarte a experiencias únicas en lugares inexplorados y buscamos que
          tu única preocupación sea decidir cuál será tu próximo destino. Wonder
          Travel Latam S.A.S. (“Wonder”) te ofrece un servicio de intermediación
          para conectar con Proveedores prestadores de todo tipo de servicios
          turísticos en diferentes lugares a través de nuestra página web,
          nuestra aplicación móvil y mediante nuestras redes sociales. A
          continuación, encontrarás toda la información sobre los datos que
          recolectamos, cómo lo hacemos y para qué. Todo lo que leerás a
          continuación aplica para todas nuestras plataformas y/o servicios. Es
          posible que, con el paso del tiempo y con el objetivo de ajustarnos a
          tus necesidades, modifiquemos esta Política de Tratamiento de Datos
          Personales; por eso, te recomendamos revisar esta página
          esporádicamente. Antes de continuar, debes tener en cuenta que, en
          caso de no estar de acuerdo con nuestra política, deberás abstenerte
          de continuar accediendo a los servicios prestados y/u ofrecidos por
          Wonder.
        </p>
      </div>
      <br></br>
      <div className={styles.div}>
        <h3>
          Definiciones para la politica de tratamiento de datos personales
        </h3>
        <br></br>
        <p>
          {' '}
          Todos los términos y definiciones que no estén aquí detallados, los
          encontrarás en nuestros Términos y Condiciones de Servicio.
        </p>
      </div>
      <br></br>

      <div className={styles.div}>
        <h4>1. ¿Qué datos recolectamos y por qué lo hacemos ?</h4>
        <p>
          Para que puedas tener una experiencia inolvidable, necesitamos contar
          con alguna información que nos permita ayudarte y, por esto, te
          pediremos ciertos datos mientras utilizas nuestra plataforma (la
          “Plataforma Wonder”) y nuestros servicios, en general. Los datos los
          obtenemos de varias maneras: (i) datos generales que podríamos
          recolectar para la utilización de la Plataforma Wonder y nuestros
          servicios; (ii) datos que nos proporcionas voluntariamente; (iii)
          datos que obtenemos por terceros; y (iv) datos que podríamos
          recolectar por el uso de nuestros servicios.
        </p>
      </div>
      <br></br>

      <div className={styles.div}>
        <h4 className={styles.titulos}>
          1. I. Datos generales que podríamos recolectar para utilizar la
          Plataforma Wonder y nuestros servicios.
        </h4>
        <p>
          Hay una serie de datos generales que podríamos recolectar para poder
          prestar nuestros servicios. Dependiendo de los servicios que elijas,
          se podría recolectar la siguiente información:
        </p>
        <div>
          <ul>
            <li>Nombre(s).</li>
            <li>Apellido(s).</li>
            <li>Tipo y Número de documento..</li>
            <li>Correo electrónico personal.</li>
            <li>Correo electrónico institucional.</li>
            <li>Nombre de usuario en redes sociales.</li>
            <li>Teléfono(s) fijo(s) de contacto.</li>
            <li>Número(s) celular(es).</li>
            <li>
              Número celular disponible para aplicaciones de mensajería
              instantánea, tales como WhatsApp o similares.
            </li>
            <li>Datos de georreferenciación.</li>
            <li>Fecha de nacimiento.</li>
            <li>Estado civil.</li>
            <li>Nacionalidad.</li>
            <li>Dirección de residencia.</li>
            <li>Dirección alterna.</li>
            <li>Empresa donde trabajas.</li>
            <li>Cargo que desempeñas.</li>
            <li>RUT.</li>
            <li>
              Imágenes de tu documento de identificación oficial y/o de tu
              pasaporte.
            </li>
            <li>
              Información de pago como datos de cuenta bancaria o cuenta de
              pago, o de tarjetas de crédito o débito.
            </li>
            <li>EPS a la que te encuentras afiliado.</li>
            <li>Nombre de contacto de emergencia.</li>
            <li>Número de teléfono o celular del contacto de emergencia.</li>
          </ul>
        </div>
        <br></br>
        <p>
          Descargo de responsabilidad: los datos personales de terceros que sean
          entregados a Wonder por parte de un Titular, tales como el número de
          teléfono de contacto de emergencia y nombre de contacto de emergencia,
          el número de teléfono o correo electrónico de un amigo, familiar o
          referido para la adquisición de un producto o servicio de Wonder, se
          entienden cobijados por la autorización previa que el Titular asume
          tener de manera anterior a la entrega de la información del tercero a
          Wonder. Así, mediante la aceptación de esta Política de Tratamiento de
          Datos Personales, el Titular se compromete y declara contar con la
          debida autorización del tercero Titular de los datos personales para
          entregar su información. Lo anterior aplicará, por ejemplo, para los
          siguientes casos: solicitud de datos en procesos de selección
          (referencias laborales y personales), en relaciones laborales (datos
          del núcleo familiar), comerciales (referidos para ventas y referencias
          comerciales), ventas de productos y servicios, entre otros.
        </p>
      </div>
      <br></br>

      <div className={styles.div}>
        <h4>1. II. Datos que nos proporcionas voluntariamente.</h4>
        <p>
          Cuando desees, podrás proporcionarnos alguna información adicional que
          podremos recolectar y nos ayudará a acercarte a experiencias
          especialmente diseñadas para ti. Estos datos adicionales son:
        </p>
        <div>
          <ul>
            <li>Foto de perfil.</li>
            <li>Género.</li>
            <li>Idiomas preferidos.</li>
            <li>Ciudad.</li>
            <li>Descripción personal.</li>
            <li>Contactos personales.</li>
            <li>
              Información sobre condiciones de salud solo en caso de estimarlo
              necesario y con la finalidad exclusiva de prestarte un mejor
              servicio.
            </li>
          </ul>
        </div>
        <br></br>
        <p>
          Tu foto de perfil, género (en caso de indicar alguno), idiomas
          preferidos, ciudad y descripción personal harán parte de tu perfil, el
          cual podrá ser consultado por cualquier otro Viajero/Usuario. Tu
          decisión de proporcionar a Wonder esta información adicional es
          totalmente facultativa y no deberás proporcionarla si no quieres.
        </p>
      </div>
      <br></br>

      <div className={styles.div}>
        <h4>1. III. Datos que obtenemos por terceros.</h4>
        <p>
          Ciertos datos los recopilamos a través de terceros en los siguientes
          eventos:
        </p>
        <div>
          <ul>
            <li>
              Por servicios de terceros: en caso de conectar Wonder con alguna
              plataforma externa como Google, Facebook, Pinterest, Twitter u
              otros, nos estarás otorgando autorización para que dicha
              plataforma nos proporcione la información que controla o aquella
              que hayas autorizado a través de la configuración de privacidad en
              esa plataforma y/o servicio, como, por ejemplo, información de
              registro, lista de amigos o seguidores e información de perfil.
            </li>
            <li>
              Por los Proveedores de Servicios Wonder: Wonder funciona como
              intermediario entre Viajeros y Proveedores. Dentro de la
              Plataforma Wonder, los Viajeros/Usuarios podrán calificar sus
              experiencias y compartir información sobre los Proveedores, la
              cual podrá ser utilizada por Wonder. En los casos donde sea
              necesario por motivos de seguridad u otro motivo relevante, los
              Proveedores podrán suministrar información a Wonder sobre los
              Viajeros.
            </li>
            <li>
              Información de terceros: como Viajero/Usuario, podrás reservar una
              experiencia para ti mismo o para terceros, en cuyo caso deberás
              suministrar información sobre esos terceros bajo tu
              responsabilidad y habiéndolos informado sobre esta Política de
              Tratamiento de Datos Personales.
            </li>
            <li>
              Otras fuentes: es posible que, por motivos de seguridad como
              prevención de prácticas fraudulentas y evaluación de riesgos,
              recibamos información por parte de entidades externas y de
              nuestros colaboradores acerca de tus actividades dentro y fuera de
              la Plataforma Wonder.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={styles.div}>
        <h4>
          1. IV. Datos que podríamos recolectar por el uso de nuestros
          servicios.
        </h4>
        <p>
          Hay algunos datos personales que podremos recopilar de forma
          automática por el uso de la Plataforma Wonder y de cualquiera de
          nuestros servicios, incluso al momento de realizar pagos:
        </p>

        <div>
          <ul>
            <li>Dirección de IP.</li>
            <li>
              Configuración de zona horaria, tipos y versiones de complementos
              de su navegador.
            </li>
            <li>Fecha y hora en que accedes a la Plataforma Wonder.</li>
            <li>Nombre de dominio.</li>
            <li>Tipo de conexión a Internet.</li>
            <li>Información sobre hardware y software de tu computador.</li>
            <li>
              Datos electrónicos relativos a los sistemas operativos y
              dispositivos de computación/navegador, incluyendo tipo de
              navegador.
            </li>
            <li>
              Información sobre los clics que realizas y las páginas que te
              hayamos mostrado.
            </li>
            <li>Información sobre fallas en la aplicación móvil.</li>
            <li>
              Datos que identifiquen tu dispositivo, configuraciones y
              características específicas.
            </li>
            <li>Páginas web visitadas por los Usuarios.</li>
            <li>
              Funciones utilizadas y vínculos seleccionados por el Usuario.
            </li>
            <li>
              La cantidad de tiempo utilizado en la Plataforma Wonder y/o
              páginas vinculadas.
            </li>
            <li>
              Actividades de los Usuarios en la Plataforma Wonder y/o páginas
              vinculadas.
            </li>
            <li>
              URL de procedencia o páginas web que llevó a los Usuarios a la
              Página Web.
            </li>
            <li>Información sobre ubicación geográfica estimada o exacta.</li>
            <li>
              Información sobre reservas que realices y otras acciones que
              realices a través de la Plataforma Wonder.
            </li>
            <li>
              Información de Cookies (revisar la Política de Cookies que se
              encuentra más adelante en este documento).
            </li>
            <li>
              Información sobre transacciones de pago, como el instrumento de
              pago utilizado, fecha y hora del pago, importe, fecha de
              vencimiento del instrumento de pago, código postal de facturación
              y otros datos relacionados con la transacción.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={styles.div}>
        <h4>2. ¿Para qué recolectamos tus datos?</h4>
        <br></br>
        <p>
          La principal razón por la que recolectamos y utilizamos tus datos es
          para brindarte un servicio de la manera más eficiente, completa y
          segura. Sabemos que tu información es importante para ti y es por eso
          que a continuación te explicaremos los objetivos para los cuales
          utilizamos tus datos:
        </p>
      </div>
      <br></br>

      <div className={styles.divContainer}>
        <h4>
          2. I. Brindarte nuestros servicios y mejorar la Plataforma Wonder.
        </h4>
        <div>
          <ul>
            <li>
              Permitirte acceder a la Plataforma Wonder y encontrar la
              experiencia de Viajero deseada.
            </li>
            <li>
              Enviarte notificaciones de reserva y demás información relativa al
              Servicio Wonder escogido.
            </li>
            <li>
              Permitir que te comuniques con nosotros y con otros
              Viajeros/Usuarios.
            </li>
            <li>
              Realizar análisis y eliminar fallas de la Plataforma Wonder.
            </li>
            <li>
              Realizar investigaciones de mercado con fines analíticos para
              optimizar nuestra web.
            </li>
            <li>Prestar servicios de atención al cliente.</li>
            <li>
              Enviarte mensajes, como novedades, alertas de seguridad y
              notificaciones de cuenta.
            </li>
            <li>
              Personalizar y adaptar tu experiencia en función de tus
              interacciones con la Plataforma Wonder, tu historial de búsquedas
              y reservas, tu información y preferencias de perfil y los demás
              datos que nos proporciones.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <div className={styles.div}>
        <h4>
          2. II. Cuidar tu seguridad y proveer confianza a los
          Viajeros/Usuarios.
        </h4>
        <div>
          <ul>
            <li>
              Detectar y prevenir actividades de fraude, correo no deseado
              («spam»), insultos, incidencias de seguridad y demás actos
              lesivos.
            </li>
            <li>
              Verificar o autenticar la información que nos proporcionas por
              motivos de seguridad.
            </li>
            <li>
              Realizar cotejos con bases de datos y otras fuentes de
              información, incluidas comprobaciones de antecedentes penales y/o
              policiales.
            </li>
            <li>
              Cumplir con nuestras obligaciones legales, proteger la salud y el
              bienestar de nuestros Viajeros/Usuarios y Proveedores, los
              empleados de los Proveedores y el público en general.
            </li>
            <li>Resolver disputas con nuestros Viajeros/Usuarios.</li>
            <li>Hacer cumplir nuestros contratos con terceros.</li>
            <li>
              Cumplir con la ley, responder a requerimientos jurídicos, prevenir
              daños y proteger nuestros derechos.
            </li>
            <li>Hacer cumplir nuestros Términos y Condiciones del Servicio.</li>
          </ul>
        </div>
      </div>

      <br></br>
      <div className={styles.div}>
        <h4>2. III. Servicios de Pago.</h4>
        <div>
          <ul>
            <li>
              Prevenir, evitar y detectar el blanqueo de capitales, fraude,
              abusos, incidentes de seguridad.
            </li>
            <li>Realizar investigaciones de seguridad.</li>
            <li>Cumplir con obligaciones legales.</li>
            <li>Prestar y mejorar los servicios de pago.</li>
          </ul>
        </div>
      </div>

      <br></br>
      <div className={styles.divContainer}>
        <h4>2. IV. Publicidad y marketing.</h4>
        <div>
          <ul>
            <li>
              Siempre que nos otorgues tu consentimiento para ello, enviarte
              mensajes promocionales, contenido de marketing, publicidad y otro
              tipo de información que pudiera interesarte en función de tus
              preferencias.
            </li>
            <li>Realizar publicidad a través de redes sociales.</li>
            <li>Personalizar, medir y mejorar nuestra publicidad.</li>
            <li>
              Analizar tus preferencias para enviarte información que
              consideremos pueda ser de tu interés.
            </li>
            <li>Invitarte a eventos y oportunidades relevantes.</li>
          </ul>
        </div>
      </div>

      <br></br>
      <div className={styles.div}>
        <h4>
          2. V. Cumplimiento de nuestras obligaciones legales o contractuales.
        </h4>
        <div>
          <ul>
            <li>
              Para la ejecución, en general, del objeto social de Wonder y
              actividades relacionadas con este.
            </li>
            <li>
              Establecer y dar cumplimiento a las obligaciones propias derivadas
              de relaciones comerciales o jurídicas establecidas con nuestros
              Viajeros/Usuarios, Proveedores y empleados.
            </li>
            <li>
              Establecer y gestionar la relación precontractual, contractual,
              poscontractual, comercial, laboral, civil y cualquier otra índole
              que surja entre las partes.
            </li>
            <li>
              Garantizar el cumplimiento de cualquier obligación legal y/o
              requerimiento administrativo o judicial que se pudiere presentar,
              y dar respuesta o actuar en el marco de procesos judiciales cuando
              así se requiera.
            </li>
            <li>
              Realizar controles y tomar medidas de seguridad para prevenir el
              fraude o corrupción en el marco de las relaciones comerciales o
              jurídicas.
            </li>
            <li>Informar sobre cambios sustanciales a esta Política.</li>
          </ul>
        </div>
      </div>

      <br></br>
      <div className={styles.div}>
        <h4>3. Intercambio y divulgacion de información</h4>
        <p>
          Siempre y cuando obtengamos tu consentimiento, podremos compartir
          información relevante con terceros con los que hayas vinculado tu
          cuenta de Wonder. Para prestar nuestros servicios y acercarte a las
          mejores experiencias compartiremos información de los
          Viajeros/Usuarios con los Proveedores. Los datos que compartiremos
          eventualmente son:
        </p>
        <div>
          <ul>
            <li>
              Cuando un Viajero/Usuario realiza una reserva exitosa y efectiva
              (es decir, cuando ya ha realizado el pago correspondiente) de
              algún Servicio Wonder ofrecido a través de la Plataforma Wonder o
              hace una reclamación, determinada información será compartida con
              el Proveedor del respectivo Servicio Wonder. En estos casos se
              compartirán el perfil, los nombres de Viajeros adicionales, número
              de teléfono, historial de cancelaciones, información sobre
              evaluaciones realizadas, edad de los Viajeros, respuesta frente a
              reclamaciones en caso de ser necesario y cualquier otra
              información pertinente dependiendo del caso y del tipo de
              experiencia.
            </li>
            <li>
              El uso de funciones en redes sociales puede llevar al intercambio
              de datos personales entre Wonder y el proveedor de la red social.
              Esto sucederá cuando inicies sesión en la Plataforma Wonder con
              alguna de tus cuentas de redes sociales. Recuerda que si vinculas
              tu cuenta de Wonder con alguna red social, podrás desvincularla en
              el momento que desees.
            </li>
            <li>
              Para poder ofrecerte las mejores experiencias especialmente para
              ti, debemos compartir información entre Viajeros/Usuarios para que
              puedan conectar e intercambiar opiniones sobre las diferentes
              experiencias que tenemos para ti. Dentro de estos datos están:
              datos de tu perfil, comentarios que has realizado en la Plataforma
              Wonder y otros que podrían llegar a ser relevantes para conectar
              con otros Viajeros/Usuarios.
            </li>
            <li>
              Cuando presentes alguna consulta sobre tus reservaciones, en caso
              de ser necesario, podremos ponernos en contacto con el Proveedor
              para gestionar tu petición y proporcionarle tus datos de contacto
              al Proveedor, incluyendo tu dirección de correo electrónico y la
              información sobre el proceso y/o el estado de tu reserva para
              poder resolver el problema en la mayor brevedad posible.
            </li>
          </ul>
        </div>
      </div>

      <br></br>
      <div className={styles.div}>
        <h4>4. Responsable del Tratamiento</h4>
        <p>
          El Responsable del Tratamiento de tus datos personales es WONDER
          TRAVEL LATAM S.A.S., sociedad comercial legalmente constituida de
          acuerdo con las leyes de Colombia, identificada con el NIT.
          901.447.029-0, con domicilio principal en la ciudad de Bogotá D.C.,
          República de Colombia.
        </p>
        <div>
          <ul>
            <li>Página web: www.wondertravel.co</li>
            <li>Teléfono: +57 314 433 5224</li>
            <li>
              Dirección física: Calle 93 #11A–28, Oficina 602, en la ciudad de
              Bogotá D.C., Colombia
            </li>
            <li>Dirección electrónica: travelbuddy@wondertravel.co</li>
          </ul>
        </div>
      </div>

      <br></br>
      <div className={styles.div}>
        <h4>5. ¿Cuáles son tus derechos?</h4>
        <p>Como Titular de tus datos personales tienes derecho a:</p>
        <div>
          <ul>
            <li>
              Acceder de forma gratuita a los datos proporcionados que hayan
              sido objeto de tratamiento.
            </li>
            <li>
              Conocer, actualizar y rectificar tu información frente a datos
              parciales, inexactos, incompletos, fraccionados, que induzcan a
              error, o aquellos cuyo tratamiento esté prohibido o no haya sido
              autorizado.
            </li>
            <li>Solicitar prueba de la autorización otorgada.</li>
            <li>
              Solicitar información respecto del uso que se le ha dado a tus
              datos personales.
            </li>
            <li>
              Presentar ante la Superintendencia de Industria y Comercio (SIC)
              quejas por infracciones a lo dispuesto en la normatividad vigente.
            </li>
            <li>
              Revocar la autorización y/o solicitar la supresión del dato,
              siempre que no exista un deber legal o contractual que impida
              eliminarlos.
            </li>
            <li>
              Abstenerte de responder a las preguntas sobre datos sensibles o de
              proporcionar dichos datos de cualquier manera.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <div className={styles.div}>
        <h4> 6. Tratamiento de Datos Sensibles</h4>
        <p>
          Parte de nuestra misión es brindarte una experiencia de viaje completa
          y segura; no queremos preocuparte por las eventualidades que se puedan
          presentar, por eso, podremos ponerte en contacto, si así lo solicitas,
          con aseguradoras que te garantizarán un viaje protegido. Con esta
          finalidad, en ciertos casos debemos conocer información relevante
          sobre condiciones de salud que requiera la aseguradora. La recolección
          de estos datos solo se hará en caso de que tú nos solicites que te
          pongamos en contacto con una entidad aseguradora y será con la
          finalidad exclusiva de prestarte un mejor servicio y poder ofrecerte
          un seguro óptimo dependiendo de tus condiciones. Ten en cuenta que
          estás en total libertad de otorgarnos los datos que consideres
          necesarios e igualmente de abstenerte de otorgarnos datos personales
          sensibles.
        </p>
      </div>
      <br></br>
      <div className={styles.div}>
        <h4>7. Política de Cookies</h4>
        <p>
          Las cookies, son archivos de texto que se envían a tu navegador web o
          a la memoria de tu dispositivo. Una cookie usualmente contiene el
          nombre del dominio (la ubicación en internet) desde el cual la cookie
          se originó, su “tiempo de vida” (es decir, cuándo vence) y un número
          único o identificador similar aleatoriamente generado. Una cookie
          también puede contener información sobre tu dispositivo, tal como tus
          preferencias de usuario, tu historial de navegación y las actividades
          realizadas mientras usabas nuestros servicios.
        </p>
        <p>Podremos utilizar los siguientes tipos de cookies:</p>
        <div>
          <ul>
            <li>
              <b>Cookies esenciales de un sitio web:</b> Estas cookies son
              estrictamente necesarias para brindarte los servicios disponibles
              en nuestro sitio web y para usar algunas de sus características,
              tales como el acceso a las áreas seguras.
            </li>
            <li>
              <b>Cookies de analítica:</b> Estas cookies nos ayudan a comprender
              cómo se usa nuestro sitio web, lo efectivas que están siendo las
              campañas de marketing, y nos ayudan a personalizar y mejorar
              nuestros sitios web para ti.
            </li>
            <li>
              <b>Cookies de publicidad:</b> Estas cookies se utilizan para hacer
              que los mensajes publicitarios sean más relevantes para ti y
              ejecutan funciones como prevenir que el mismo anuncio reaparezca
              continuamente, garantizar que los anunciantes presentan sus
              anuncios debidamente, elegir anuncios en función de tus intereses
              y medir el número de anuncios presentados y su rendimiento, como
              saber cuántas personas hicieron clic en un anuncio específico.
            </li>
            <li>
              <b>Cookies de redes sociales:</b> Dichas cookies se utilizan para
              permitirte compartir las páginas y el contenido que encuentres
              interesante en nuestro sitio web a través de redes sociales de
              terceros y otros sitios web. También se pueden usar con fines
              publicitarios.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};
export default TermsAndConditions;
