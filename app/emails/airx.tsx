import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import TailwindWrapper from "@/tailwind-wrapper";

// interface AirXEmailProps {
//   loginCode?: string;
// }

// cons= process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

// export const AirXEmail = ({ loginCode }: AirXEmailProps) => {
export const AirXEmail = () => {
  return (
    <Html style={html}>
      <Head />
      <Preview>Log in with this magic link</Preview>

      {/* ATTENTION: Tailwind config  */}
      <TailwindWrapper>
        <Body style={main}>
          <Container style={container}>
            <Img
              src={`/static/airx.png`}
              alt="Notion's Logo"
              className="object-contain h-10"
            />

            <Heading style={h1}>⏱️ Шинэ захиалга үүслээ</Heading>
            <Row>
              <Text style={h3}>
                Та <span className="text-black mx-1">FCMW2A</span>
                <span className="text-nowrap">дугаартай захиалгаа</span>
                <span className="text-black mx-1">2025-12-15 10:14:00</span>
                цагаас өмнө баталгаажуулаарай.
              </Text>
            </Row>

            <Section className="border-2 border-accent p-6 rounded-xl w-full bg-white">
              <Row>
                <Text style={{ ...h3, margin: 0, marginBottom: 16 }}>
                  Төлбөр төлөх сүүлийн хугацаа
                </Text>
                <Row>
                  <Text
                    style={{
                      ...h2,
                      ...blue_text,
                      display: "flex",
                      margin: "0 0",
                      fontWeight: "bold",
                      textWrap: "nowrap",
                    }}
                  >
                    12 сар 15
                    <span style={{ margin: "0 4px", color: "black" }}>
                      Даваа гариг
                    </span>
                    10:14
                  </Text>
                </Row>
                <Hr style={{ margin: "32px 0" }} />
                <Row className="w-full">
                  <Column style={blue_text} className="text-left w-1/2">
                    2 талын нислэг
                  </Column>
                  <Column style={blue_text} className="text-right w-1/2">
                    1 зорчигч
                  </Column>
                </Row>
                <Row>
                  <div className="flex gap-2 items-center my-5">
                    <Img
                      src={`/static/arrow.png`}
                      className="h-6 object-contain w-fit"
                    />

                    <Heading className="text-2xl my-0">Singapore</Heading>
                  </div>
                </Row>

                <Row>
                  <Row className="w-full">
                    <Column style={blue_text} className="text-left w-1/2 my-0">
                      <Text
                        style={{
                          ...h3,
                          display: "flex",
                          margin: "0 0",
                        }}
                      >
                        <span style={{ ...blue_text, marginRight: "24px" }}>
                          ULN
                        </span>
                        <span className="text-gray-500 font-semibold">
                          Ulaanbaatar
                        </span>
                      </Text>
                    </Column>
                    <Column style={span} className="text-right w-1/2">
                      2025-12-19
                    </Column>
                  </Row>
                  <Row className="w-full">
                    <Column style={blue_text} className="text-left w-1/2 my-0">
                      <Text
                        style={{
                          ...h3,
                          display: "flex",
                          margin: "0 0",
                        }}
                      >
                        <span style={{ ...blue_text, marginRight: "24px" }}>
                          SIN
                        </span>
                        <span className="text-gray-500 font-semibold">
                          Singapore
                        </span>
                      </Text>
                    </Column>
                    <Column style={span} className="text-right w-1/2">
                      2025-12-21
                    </Column>
                  </Row>
                </Row>
              </Row>
            </Section>
            <Button
              style={button}
              href="https://react.email/docs/getting-started/manual-setup"
            >
              Төлбөр төлөх
            </Button>
          </Container>
        </Body>
      </TailwindWrapper>
    </Html>
  );
};

// AirXEmail.PreviewProps = {
//   loginCode: "sparo-ndigo-amurt-secan",
// } as AirXEmailProps;

export default AirXEmail;

const html = {
  margin: 0,
  padding: 0,
};

const main = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  margin: "0 0",
};

const container = {
  padding: "12px",
  margin: "0 auto",
  maxWidth: "37.5rem",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0",
};
const h2 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "1.375rem",
  fontWeight: "bold",
  padding: "0",
};
const h3 = {
  fontSize: "18px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  lineHeight: "24px",
  color: "#8c97aa",
  fontWeight: "regular",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const blue_text = {
  color: "#0052bd",
};

const button = {
  backgroundColor: "#5b38d7",
  color: "#ffffff",
  fontSize: "18px",
  padding: "16px 24px",
  borderRadius: "10px",
  margin: "40px 0",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const span = {
  color: "#031d4080",
  margin: "0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

// import * as React from "react";
// import { Html, Button } from "@react-email/components";

// export function Email(props) {
//   const { url } = props;

//   return (
//     <Html lang="en">
//       <Button href={url}>Click me</Button>
//     </Html>
//   );
// }

// export default Email;
