import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
      </Head>
      <Container>
      <>
  <section id="why-us" className="why-us">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5" data-aos="fade-up">
          <div className="content">
            <h3>Why Choose Deeside Competitions? </h3>
            <p>
              We're a local charitable organisation that gives back to the
              community with competitive odds for exclusive prizes from House's
              to Holidays to Technology. We pride ourselves on donating over
              £400,000 to local causes and charitites.
            </p>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7 d-flex">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div
                className="col-xl-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="mdi--car-sports" />
                  <h4>Rare Supercars</h4>
                  <p>
                    Have you ever dreamed of having an Aston Martin like James
                    bond? Test your luck to win one of our many supercars for a
                    small price.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="game-icons--house" />
                  <h4>Dream Houses</h4>
                  <p>
                    Fancy your chances to live like a King? Our selection of
                    houses, luxury apartments and holiday homes are always up
                    for grabs.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-xl-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="fontisto--holiday-village" />
                  <h4>Exclusive Vacations</h4>
                  <p>
                    You can win trips to the Maldives, Bora Bora, Miami and
                    wherever your imagination takes you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Why Us Section */}
</>

      </Container>
      <footer className="cntr-footer">
        
      </footer>
    </Container>
  );
}
