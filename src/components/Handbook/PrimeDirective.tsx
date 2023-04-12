import { Typography, Box } from "@mui/material";
import React from "react";

const PrimeDirective: React.FC<any> = () => {
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
        <Typography
          sx={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "15px", sm: "25px", md: "40px" },
            color: "#344D67",
          }}
        >
          The Prime Directive
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
        The overarching principle that informs these guidelines is simple:
        Community events are all about the Apache Cassandra® community. This is
        our Prime Directive.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        While that may feel obvious to say, it’s an important point that will
        underpin all of the decisions you will make as an organiser - keep the
        community at the forefront, and everything else will fall into place.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Three key guidelines emerge from this Prime Directive:
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        1. All actions taken as an event organiser are with the best interest of
        the community in mind.
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
            Example: Speaker spots are not for sale. Sponsors do not
            automatically get to speak - all speakers are selected on their
            experience, the merit of their topic, and the value it will provide
            to the community
          </Typography>
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
        2. Membership in the local meetup group is open to all who wish to join,
        regardless of ability, skill, financial status or any other criteria.
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
            Example: People don’t need any prior knowledge, skills or technology
            to attend local Cassandra events.
          </Typography>
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
        3. Local meetup groups allow events to be organised by any
        reliable/trusted member of the community.
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
            Example: If someone in the community expresses an interest in
            organising events, they should be encouraged and empowered to do so.
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default PrimeDirective;
