import * as React from "react";
import { Typography, Stack } from "@mui/material";
import Section from "../components/section";
import FilledButton from "../components/filled-button";
import Carousel, { CarouselChild } from "../components/carousel";

const Home: React.FC = () => {
  return (
    <Section>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Stack direction="column" alignItems={"center"}>
          <Typography
            fontSize={"3.3em"}
            width={"45vw"}
            textAlign="center"
            sx={{
              background: "-webkit-linear-gradient(white, grey)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              pt: "50px",
            }}
          >
            Discover the Future of Gaming, Environment conservation and
            Governance with <span style={{ fontWeight: "bold" }}>TriÉlan</span>.
          </Typography>
          <Typography
            color={"grey"}
            pt="30px"
            width={"40vw"}
            textAlign="center"
            fontSize={"1.1em"}
          >
            Explore a wide variety of unique and user created NFT's and assets,
            verified on the blockchain for true ownership and scarcity
          </Typography>
        </Stack>
        <FilledButton
          onClick={() => {}}
          text="Get started"
          props={{ mt: "40px" }}
        />
        <Carousel>
          <CarouselChild
            image="/images/1.jpg"
            text="Hello there"
            color="pink"
          />
          <CarouselChild image="/images/2.jpg" text="Hello there" color="red" />
          <CarouselChild
            image="/images/3.jpg"
            text="Hello there"
            color="teal"
          />
          <CarouselChild
            image="/images/4.jpg"
            text="Hello there"
            color="blue"
          />
          <CarouselChild
            image="/images/5.jpg"
            text="Hello there"
            color="violet"
          />
          <CarouselChild
            image="/images/6.png"
            text="Hello there"
            color="yellow"
          />
        </Carousel>
      </Stack>
    </Section>
  );
};

export default Home;
