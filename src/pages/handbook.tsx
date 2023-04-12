import React from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import Layout from "../components/Layout/Layout";
import HandbookHeroSection from "../components/Handbook/HandbookHeroSection";
import HandbookContribute from "../components/Handbook/HandbookContribute";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const HandbookPage = () => {
  const sections = [
    {
      title: "The Prime Directive",
      content:
        "The Prime Directive\n\nThe overarching principle that informs these guidelines is simple: Community events are all about the Cassandra community. This is our Prime Directive.\n\nWhile that may feel obvious to say, it’s an important point that will underpin all of the decisions you will make as an organiser - keep the community at the forefront, and everything else will fall into place.\n\nThree key guidelines emerge from this Prime Directive:\n\n1. All actions taken as an event organiser are with the best interest of the community in mind.\nExample: Speaker spots are not for sale. Sponsors do not automatically get to speak - all speakers are selected on their experience, the merit of their topic, and the value it will provide to the community.\n2. Membership in the local meetup group is open to all who wish to join, regardless of ability, skill, financial status or any other criteria.\nExample: People don’t need any prior knowledge, skills or technology to attend local Cassandra events.\n3. Local meetup groups allow events to be organised by any reliable/trusted member of the community.\nExample: If someone in the community expresses an interest in organising events, they should be encouraged and empowered to do so.",
    },
    {
      image: "HandbookLogo1",
      title: "Become an Organiser",
      content:
        "Any community member can organise events for their local Cassandra meetup. Organisers need to have some familiarity with data on Kubernetes, and they need to agree to the guidelines and expectations outlined below. Anyone interested in starting a new local Cassandra meetup group must fill in the application form. If you are already a member of a local Cassandra meetup group and would like to get involved as an organiser, talk to the current organisers, and they will gladly accept your assistance. Organising team members cannot all be from the same company (see the Building an Organising Team section below).\n\nOnce your meetup group is live, we will add your group to the Cassandra meetup directory. See the Promoting Events section below for more information about promoting individual events.",
    },
    {
      image: "HandbookLogo2",
      title: "Organising Cassandra Events in an External Group",
      content: `If you are an organiser for another meetup group that isn’t exclusively about Cassandra but you are facilitating Cassandra-focused topics, then we would still love to promote your events to the Cassandra community. You can submit event details via this form, and we will add them to the central events calendar.`,
    },
    {
      image: "HandbookLogo3",
      title: "Building an Organising Team",
      content:
        "A diverse organising team is important for building a diverse and inclusive community; it also helps distribute the work of organising amongst more people. Remember the Prime Directive - Cassandra events are organised for the benefit of the community and not a single person or organisation. This means that your organising team must include people from more than one company or organisation, reducing the risk of people using the community to promote themselves or their business.\n\nYou can find additional organisers for your team in the Planet Cassandra Discord, by posting on social media, or by asking people you know who are interested in data on Kubernetes.",
    },
    {
      image: "HandbookLogo4",
      title: "Promoting Events",
      content:
        "It is strongly recommended that you finalise your event details (date, venue, speakers, etc.) at least one month before the event. The earlier you can start promoting your event, the better, so it’s best to get those details finalised well in advance.\n\nYou can use any platform you like for your group’s local events. If the platform incurs fees, then you should find local sponsors to cover your costs (see the Finding Sponsors section below). You may use any advertising platform or format you like for promoting your event, provided you use the correct Cassandra and sponsor branding where appropriate.\n\nOnce your event is published on your platform of choice, submit the details via this form to be added to the central Cassandra calendar. If the platform allows for automated posting, then we will look into enabling that so you don’t need to submit each event individually.",
    },
    {
      image: "HandbookLogo5",
      title: "Selecting Speakers",
      content: `Anyone can apply to speak at a local Cassandra event. Organisers can publish a formal Call For Papers (CFP) or just make sure the community knows they can reach out to apply at any time. Speakers and topics can be anything relevant to the local community, and organisers can select what they will is in the best interests of the community.\n\nAfter you launch your local meetup group, we will review your first three events before you announce them - that will ensure that the content remains relevant and follows the program’s guidelines. After that, you won’t need to check in with us before announcing any events, but we will continue to support you and answer any questions you may have.\n\nHere are some things to consider when selecting speakers and topics:\n- Speaking spots cannot be bought by sponsors under any circumstances - speakers on selected solely on their merit and the value of their content.\n- Sessions must never be purely a sales pitch.\n- Focus on new content - if something is already published elsewhere, it will be less attractive to community members.\n- Favour new speakers where possible - new voices are interesting to listen to, provide new points of view, and facilitate diversity in the community.\n- Make an effort to find and encourage speakers from underrepresented groups where possible - diverse viewpoints make everyone richer.\n- Speakers don’t have to be active in the local community, and they can be from out-of-town, but familiarity with existing community members generally means they will be more well-received than others.\n- Sessions can be presented in any format that is relevant or useful for the topic - we encourage you to be creative and mix up your event formats.\n- Slides must use a plain Cassandra deck that doesn’t include excessive vendor info and branding - if you aren’t sure whether slides are appropriate, please contact Planet Cassandra staff to ask about it.`,
    },
    {
      image: "HandbookLogo6",
      title: "Finding Sponsors",
      content: `If you need a sponsor for your events, any company can come on board as a sponsor for your local Cassandra meetup; however, it is best to select sponsors that offer relevant products or services to Cassandra community members. Sponsors can come on board to cover any financial costs related to your events - venue hire, refreshments, etc. - or they can provide material sponsorship - venue, workshop materials, etc.\n\nIn return for sponsorship, sponsors should receive some benefits. Some ideas for this are:\nPromotion in event communications\nBranding posted at the event\nDiscount codes for products/services provided to attendees\nDistribution of company swag\n\nOrganisers can be creative with the benefits they provide to sponsors, but please bear in mind the following non-negotiable restrictions:\nSpeaking spots are not provided to sponsors in return for their sponsorship under any circumstances.\nA list of attendee names or contact details may not be given to sponsors (or anyone else) - aggregate demographic data is fine to share, but specific details about attendees are not.`,
    },
    {
      image: "HandbookLogo7",
      title: "Finding a Venue",
      content: `Organisers can use any venue that is appropriate for the event and the people attending it. Here are some things to consider when selecting a venue:
        Ensure that the venue has adequate accessibility features for all potential attendees.
        The venue should be able to accommodate the number of expected attendees with seating for everyone, as well as include any features that are required for the format of the event (e.g. desks/tables for workshops that require attendees to use their laptops)
        Avoid venues that could be potentially problematic for some attendees - this could include political or religious venues.
        `,
    },
    {
      image: "HandbookLogo8",
      title: "Running Online Events",
      content: `Organisers may choose to run online events. The same guidelines apply to online events as to in-person ones. When selecting a platform to use for online events, ensure you select a platform that has adequate accessibility features for all attendees, as well as any features that the event format requires.
        `,
    },
    {
      image: "HandbookLogo9",
      title: "Producing Swag",
      content: `You may produce an event or community-related swag for your community members at your discretion. While there are no restrictions on this, here are some guidelines to help organisers make good choices:\nOnly produce swag that you are certain will be useful to the majority of attendees - conference and event swag is routinely discarded into landfills, so be conscious of the environment when selecting swag. You could even poll your local community on what swag they want in order to ensure real interest in the items.\nIf you are producing t-shirts as swag, make sure to select a vendor that provides shirts in fitted and straight cuts from size XS to 5XL - this ensures that you will be able to cater to all members of the community.\nAlso, if you are producing t-shirts, experience has shown that people generally don’t want to continue wearing shirts that are covered in sponsor logos. It is better to stick to designs related to Cassandra or the community
        `,
    },
    {
      image: "HandbookLogo10",
      title: "Recording Content",
      content: `Organisers are encouraged to record sessions at their local Cassandra meetups and publish the recordings online, either as audio or video (or both). All recorded content is licensed under the Creative Commons Attribution-ShareAlike 4.0 License - in practice, this means that anyone can redistribute the content, provided they provide attribution to the Cassandra community, use the same licence (and link to it), and indicate any changes they may have made.
        `,
    },
    {
      image: "HandbookLogo11",
      title: "Code of Conduct",
      content: `The code of conduct applies to all Cassandra community spaces, including events: https://constantia.io/code-of-conduct/
        `,
    },
  ];
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "handbook" } }
        sort: { name: ASC }
      ) {
        nodes {
          name
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);
  const images = data.allFile.nodes;
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <HandbookHeroSection />
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="xl" className="training_section_container">
            <Grid
              container
              sx={{
                mx: "auto",
                paddingY: { xs: "50px", sm: "100px", lg: "250px" },
              }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  fontFamily="Poppins, sans-serif"
                  sx={{
                    color: "#1E1E1E",
                    fontSize: { xs: 30, sm: 45, xl: 60 },
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Cassandra Meetup Organiser Handbook
                </Typography>
              </Grid>
              {sections.map((section, index) => (
                <Grid item xs={12} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 3,
                      marginTop: 6,
                    }}
                  >
                    {index > 0 && (
                      <GatsbyImage
                        className="thumbnail"
                        image={
                          images.find((img: any) => img.name === section.image)
                            ?.childrenImageSharp[0].gatsbyImageData
                        }
                        alt="logo"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          marginRight: "20px",
                        }}
                      />
                    )}
                    <Typography
                      sx={{
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "15px", sm: "25px", md: "40px" },
                        color: "#344D67",
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: 400,
                        fontSize: "22px",
                      }}
                    >
                      {section.content}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <HandbookContribute />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HandbookPage;
