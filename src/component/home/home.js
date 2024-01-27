import { Header } from '../header/header';
import { Login } from '../login/login';
import { BirthCirtificate } from '../services/BirthCertificate';
import { DeathCirtificate } from '../services/DeathCertificate';
import { FireService } from '../services/FireService';
import { LitterCollection } from '../services/LitterCollection';
import { MarriageCertificate } from '../services/MarriageCertificate';
import { PublicGarden } from '../services/PublicGarden';
import { SewerageCleaning } from '../services/SewerageCleaning';
import { WaterConnection } from '../services/WaterConnection';
import { Signup } from '../signup/signup';
// import { Signup } from '../signup/signup';
import './home.css';
export function HomePage() {
    return (
        <div>
            <header>
                < Header />
            </header>
            <section>
                {/* < Login /> */}
                {/* <Signup /> */}
                {/* < MarriageCertificate /> */}
                {/* < BirthCirtificate /> */}
                {/* < DeathCirtificate /> */}
                {/* < PublicGarden /> */}
                {/* < SewerageCleaning /> */}
                {/* < LitterCollection /> */}
                {/* < FireService /> */}
                < WaterConnection />
            </section>

        </div>
    )
}