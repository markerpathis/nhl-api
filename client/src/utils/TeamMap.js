import NJLogo from "../assets/logos/nhl-new-jersey-devils-logo.png";
import NYIslandersLogo from "../assets/logos/nhl-new-york-islanders-logo.png";
import NYRangersLogo from "../assets/logos/nhl-new-york-rangers-logo.png";
import PhiladelphiaLogo from "../assets/logos/nhl-philadelphia-flyers-logo.png";
import PittsburghLogo from "../assets/logos/nhl-pittsburgh-penguins-logo.png";
import BostonLogo from "../assets/logos/nhl-boston-bruins-logo.png";
import BuffaloLogo from "../assets/logos/nhl-buffalo-sabres-logo.png";
import MontrealLogo from "../assets/logos/nhl-montreal-canadiens-logo.png";
import OttawaLogo from "../assets/logos/nhl-ottawa-senators-logo.png";
import TorontoLogo from "../assets/logos/nhl-toronto-maple-leafs-logo.png";
import CarolinaLogo from "../assets/logos/nhl-carolina-hurricanes-logo.png";
import FloridaLogo from "../assets/logos/nhl-florida-panthers-logo.png";
import TampaLogo from "../assets/logos/nhl-tampa-bay-lightning-logo.png";
import WALogo from "../assets/logos/nhl-washington-capitals-logo.png";
import ChicagoLogo from "../assets/logos/nhl-chicago-blackhawks-logo.png";
import DetroitLogo from "../assets/logos/nhl-detroit-red-wings-logo.png";
import NashvilleLogo from "../assets/logos/nhl-nashville-predators-logo.png";
import STLLogo from "../assets/logos/nhl-st-louis-blues-logo.png";
import CalgaryLogo from "../assets/logos/nhl-calgary-flames-logo.png";
import ColoradoLogo from "../assets/logos/nhl-colorado-avalanche-logo.png";
import EdmontonLogo from "../assets/logos/nhl-edmonton-oilers-logo.png";
import VancouverLogo from "../assets/logos/nhl-vancouver-canucks-logo.png";
import AnaheimLogo from "../assets/logos/nhl-anaheim-ducks-logo.png";
import DallasLogo from "../assets/logos/nhl-dallas-stars-logo.png";
import LALogo from "../assets/logos/nhl-los-angeles-kings-logo.png";
import SanJoseLogo from "../assets/logos/nhl-san-jose-sharks-logo.png";
import ColumbusLogo from "../assets/logos/nhl-columbus-blue-jackets-logo.png";
import MinnesotaLogo from "../assets/logos/nhl-minnesota-wild-logo.png";
import WinnipegLogo from "../assets/logos/nhl-winnipeg-jets-logo.png";
import ArizonaLogo from "../assets/logos/nhl-arizona-coyotes-logo.png";
import VegasLogo from "../assets/logos/nhl-vegas-golden-knights-logo.png";
import SeattleLogo from "../assets/logos/nhl-seattle-kraken-logo.png";

// const array = Object.keys(TeampMap)
// const array = Object.values(TeampMap)
// const array = Object.entries(TeampMap)

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

const TeamMap = [
  {
    id: "0",
    abbreviation: "",
    label: "All Teams",
    location: "",
    logo: "",
  },
  {
    id: 1,
    abbreviation: "NJD",
    label: "New Jersey Devils",
    location: "New Jersey",
    logo: NJLogo,
  },
  {
    id: 2,
    abbreviation: "NYI",
    label: "New York Islanders",
    location: "New York",
    logo: NYIslandersLogo,
  },
  {
    id: 3,
    abbreviation: "NYR",
    label: "New York Rangers",
    location: "New York",
    logo: NYRangersLogo,
  },
  {
    id: 4,
    abbreviation: "PHI",
    label: "Philadelphia Flyers",
    location: "Philadelphia",
    logo: PhiladelphiaLogo,
  },
  {
    id: 5,
    abbreviation: "PIT",
    label: "Pittsburgh Penguins",
    location: "Pittsburgh",
    logo: PittsburghLogo,
  },
  {
    id: 6,
    abbreviation: "BOS",
    label: "Boston Bruins",
    location: "Boston",
    logo: BostonLogo,
  },
  {
    id: 7,
    abbreviation: "BUF",
    label: "Buffalo Sabres",
    location: "Buffalo",
    logo: BuffaloLogo,
  },
  {
    id: 8,
    abbreviation: "MTL",
    label: "Montréal Canadiens",
    location: "Montréal",
    logo: MontrealLogo,
  },
  {
    id: 9,
    abbreviation: "OTT",
    label: "Ottawa Senators",
    location: "Ottawa",
    logo: OttawaLogo,
  },
  {
    id: 10,
    abbreviation: "TOR",
    label: "Toronto Maple Leafs",
    location: "Toronto",
    logo: TorontoLogo,
  },
  {
    id: 12,
    abbreviation: "CAR",
    label: "Carolina Hurricanes",
    location: "Carolina",
    logo: CarolinaLogo,
  },
  {
    id: 13,
    abbreviation: "FLA",
    label: "Florida Panthers",
    location: "Florida",
    logo: FloridaLogo,
  },
  {
    id: 14,
    abbreviation: "TBL",
    label: "Tampa Lightning",
    location: "Tampa",
    logo: TampaLogo,
  },
  {
    id: 15,
    abbreviation: "WSH",
    label: "Washington Capitals",
    location: "Washington",
    logo: WALogo,
  },
  {
    id: 16,
    abbreviation: "CHI",
    label: "Chicago Blackhawks",
    location: "Chicago",
    logo: ChicagoLogo,
  },
  {
    id: 17,
    abbreviation: "DET",
    label: "Detroit Red Wings",
    location: "Detroit",
    logo: DetroitLogo,
  },
  {
    id: 18,
    abbreviation: "NSH",
    label: "Nashville Predators",
    location: "Nashville",
    logo: NashvilleLogo,
  },
  {
    id: 19,
    abbreviation: "STL",
    label: "St. Louis Blues",
    location: "St. Louis",
    logo: STLLogo,
  },
  {
    id: 20,
    abbreviation: "CGY",
    label: "Calgary Flames",
    location: "Calgary",
    logo: CalgaryLogo,
  },
  {
    id: 21,
    abbreviation: "COL",
    label: "Colorado Avalanche",
    location: "Colorado",
    logo: ColoradoLogo,
  },
  {
    id: 22,
    abbreviation: "EDM",
    label: "Edmonton Oilers",
    location: "Edmonton",
    logo: EdmontonLogo,
  },
  {
    id: 23,
    abbreviation: "VAN",
    label: "Vancouver Canucks",
    location: "Vancouver",
    logo: VancouverLogo,
  },
  {
    id: 24,
    abbreviation: "ANA",
    label: "Anaheim Ducks",
    location: "Anaheim",
    logo: AnaheimLogo,
  },
  {
    id: 25,
    abbreviation: "DAL",
    label: "Dallas Stars",
    location: "Dallas",
    logo: DallasLogo,
  },
  {
    id: 26,
    abbreviation: "LAK",
    label: "Los Angeles Kings",
    location: "Los Angeles",
    logo: LALogo,
  },
  {
    id: 28,
    abbreviation: "SJS",
    label: "San Jose Sharks",
    location: "San Jose",
    logo: SanJoseLogo,
  },
  {
    id: 29,
    abbreviation: "CBJ",
    label: "Columbus Blue Jackets",
    location: "Columbus",
    logo: ColumbusLogo,
  },
  {
    id: 30,
    abbreviation: "MIN",
    label: "Minnesota Wild",
    location: "Minnesota",
    logo: MinnesotaLogo,
  },
  {
    id: 52,
    abbreviation: "WPG",
    label: "Winnipeg Jets",
    location: "Winnipeg",
    logo: WinnipegLogo,
  },
  {
    id: 53,
    abbreviation: "ARI",
    label: "Arizona Coyotes",
    location: "Arizona",
    logo: ArizonaLogo,
  },
  {
    id: 54,
    abbreviation: "VGK",
    label: "Vegas Golden Knights",
    location: "Vegas",
    logo: VegasLogo,
  },
  {
    id: 55,
    abbreviation: "SEA",
    label: "Seattle Kraken",
    location: "Seattle",
    logo: SeattleLogo,
  },
  {
    id: 59,
    abbreviation: "UTA",
    label: "Utah Hockey Club",
    location: "Salt Lake City",
    logo: "https://assets.nhle.com/logos/nhl/svg/UTA_light.svg",
  },
];

export default TeamMap;
