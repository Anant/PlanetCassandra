import { Typography, Box } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const SelectingSpeakers: React.FC<any> = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          marginTop: 6,
        }}
      >
        <StaticImage
          src="../../images/handbook/HandbookLogo5.png"
          alt="HandbookLogo"
          style={{
            height: "100%",
            marginRight: "20px",
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "15px", sm: "25px", md: "40px" },
            color: "#344D67",
          }}
        >
          Selecting Speakers
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Anyone can apply to speak at a local Cassandra event. Organisers can
        publish a formal Call For Papers (CFP) or just make sure the community
        knows they can reach out to apply at any time. Speakers and topics can
        be anything relevant to the local community, and organisers can select
        what they will is in the best interests of the community.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        After you launch your local meetup group, we will review your first
        three events before you announce them - that will ensure that the
        content remains relevant and follows the program’s guidelines. After
        that, you won’t need to check in with us before announcing any events,
        but we will continue to support you and answer any questions you may
        have.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Once your event is published on your platform of choice, submit the
        details via this form to be added to the central Cassandra calendar. If
        the platform allows for automated posting, then we will look into
        enabling that so you don’t need to submit each event individually.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Here are some things to consider when selecting speakers and topics:
      </Typography>
      <Box>
        <Typography sx={{ marginLeft: 5 }} component="ul">
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Speaking spots cannot be bought by sponsors under any circumstances
            - speakers on selected solely on their merit and the value of their
            content.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Sessions must never be purely a sales pitch.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Focus on new content - if something is already published elsewhere,
            it will be less attractive to community members.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Favour new speakers where possible - new voices are interesting to
            listen to, provide new points of view, and facilitate diversity in
            the community.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Make an effort to find and encourage speakers from underrepresented
            groups where possible - diverse viewpoints make everyone richer.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Speakers don’t have to be active in the local community, and they
            can be from out-of-town, but familiarity with existing community
            members generally means they will be more well-received than others.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Sessions can be presented in any format that is relevant or useful
            for the topic - we encourage you to be creative and mix up your
            event formats.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Slides must use a plain Cassandra deck that doesn’t include
            excessive vendor info and branding - if you aren’t sure whether
            slides are appropriate, please contact Planet Cassandra staff to ask
            about it.
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default SelectingSpeakers;
