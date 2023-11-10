import Head from "next/head";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";

// const DEFAULT_CENTER = [38.907132, -77.036546];
const DEFAULT_CENTER = [34.7728, -98.9838];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Aperture Space</title>
        <meta name="description" content="Mapping App using Next.js Leaflet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Hydroblocks Data Visualizer</h1>

          <Map
            className={styles.homeMap}
            width="800"
            height="400"
            center={DEFAULT_CENTER}
            zoom={12}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          <p className={styles.description}>
            <code className={styles.code}>
              Centered at {`${DEFAULT_CENTER[0]}, ${DEFAULT_CENTER[1]}`}
            </code>
          </p>

          <p className={styles.view}>
            <Button href="https://github.com/ApertureSpace23">
              Vew on GitHub
            </Button>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
