import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "gatsby";

interface Resource {
  name: string;
  href: string;
  target?: string;
}

const Resources: Resource[] = [
  {
    name: "Events",
    href: "https://prodcassandra.wpengine.com/eventspage/",
    target: "_blank",
  },
  { name: "Apache Events", href: "https://cassandra.apache.org/_/events.html" },
];

export default function DropdownAccordion(): JSX.Element {
  return (
    <div>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<AiOutlineDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
          }}
        >
          <Typography
            style={{
              color: "5AB1BB",
              textTransform: "uppercase",
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: 22,
            }}
          >
            Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          {Resources.map((item: Resource, key: number) =>
            item.target ? (
              <a
                key={key}
                href={item.href}
                target={item.target}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: 20,
                    color: "#5AB1BB",
                  }}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Button>
              </a>
            ) : (
              <Link key={key} to={item.href}>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: 20,
                    color: "#5AB1BB",
                  }}
                  style={{
                    fontFamily: "Roboto Condensed, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            )
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
