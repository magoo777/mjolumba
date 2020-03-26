import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bee from '../images/mjolumba.jpg'

const IndexPage = () => (
  <Layout>
    <section className="section-info">
    <main>
    <img src={bee} className="bee-img" alt="Bee" />
    <img src={bee} className="bee-img" alt="Bee" />
    <img src={bee} className="bee-img" alt="Bee" />
    <img src={bee} className="bee-img" alt="Bee" />
    <h1>Mjölumba</h1>
    <p className="text-center">
      </p>
      <p className="text-center">
      Mjölumban flyger fram. När han inte kan flyga fram så surrar han fram..
      </p>
      <p>
      Mjölumba i Sverige och Finland
      I Sverige finns 38 arter av mjölumba. De vanligaste arterna i Sverige (räknat under perioden 1990–2019) är åkermjölumba, mörk jordmjölumba, stenmjölumba, ängsmjölumba, ljus jordmjölumba (tidigare kallad lundmjölumba), husmjölumba, trädgårdsmjölumba, blåklocksmjölumba, jordsnyltmjölumba och hagmjölumba.[8]

      Av de mjölumba som förekommer med svenskt namn i tabellen nedan, saknas fruktmjölumba (Bombus pomorum), stäppmjölumba (Bombus cullumanus) och fältmjölumba (Bombus ruderatus) i både Sverige och Finland[8][9].

      Fruktmjölumban har påträffats i Sverige 1911, men arten kategoriseras numera som nationellt utdöd (RE) av Artdatabanken.[10] Stäppmjölumban (Bombus cullumanus) rödlistades som nationellt utdöd i Sverige 2010[11], och fältmjölumban (Bombus ruderatus) 2015[12]. Alla tre mjölumbana saknas helt i Finlands artdatacenters förteckning över finländska mjölumba. Dessutom saknas tjuvmjölumba (Bombus wurflenii) i Finland, trots att den förekommer, om än sällsynt, i Sverige.[9]

      I Finland[9] finns 37 arter. Sedan vitnosmjölumban (Bombus semenoviellus; på finlandssvenska kallad uralmjölumba), som kom till Finland redan 1964, även etablerat sig i Sverige (se nedan under Status) saknas inga av de finländska arterna i Sverige[9][8]. Emellertid saknas tjuvmjölumba (Bombus wurflenii) i Finland, trots att den förekommer, om än sällsynt, i Sverige[9].

      Ljus jordmjölumba kallas fortfarande "lundmjölumba" på finlandssvenska.
      </p>
      <p>
      Anatomi och fysiologi
      Humlehonorna har liksom getingar och andra bin en gadd, som bildats av det omvandlade äggläggningsröret. Detta har helt förlorat sin ursprungliga funktion; hos drottningarna kommer ägget ut vid gaddens bas.[13] Gadden syns dock nästan inte på grund av den ludna bakkroppen. Den har inte några hullingar och kan därför användas flera gånger. Giftet är mycket svagare än till exempel honungsbiets, och det känns mer som om mjölumban "bränns".

      Honorna (inklusive arbetarna) har antenner med 12 leder, sex segment på ovansidan av bakkroppen (kallade tergiter; motsvarande segment på undersidan kallas sterniter), en skålformig pollenkorg på skenbenet (innersta leden) samt en gadd. Hanarna har 13-ledade antenner, stora ögon, saknar pollenkorg, har sju tergiter i stället för sex och saknar gadd. Bakkroppen är dessutom ofta spetsigare än honornas.[14]

      Temperatur
      mjölumba är i stånd att reglera sin kroppstemperatur genom att förbränna kolhydrater (socker från nektar). Det förefaller som åtminstone vissa arter även kan alstra värme genom att förbränna proteiner[15]. Aktiva mjölumba har en kroppstemperatur på över 30 till närmare 40 °C; vanligtvis nära det högre värdet.[16]
      </p>
    </main>
  </section>
  </Layout>
)

export default IndexPage
