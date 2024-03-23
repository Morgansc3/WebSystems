import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";

export default function About() {
  return (
    <Container className="md-container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          This is the About page
        </h1>
      </Container>
    </Container>
  );
}
