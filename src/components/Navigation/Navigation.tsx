import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "../SearchBar/SearchBar";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { AiFillCaretDown } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
const pages = [
  { name: "Home", route: "/" },
  { name: "Events", route: "https://prodcassandra.wpengine.com/eventspage/" },
  { name: "News", route: "/news" },
  { name: "Use Cases", route: "/usecases" },
  { name: "Posts", route: "/posts" },
  { name: "Resources", route: "/leaves" },
  { name: "Videos", route: "/videos" },
];

function ResponsiveAppBar({ openNav, setOpenNav }: any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenNav(!openNav);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Dropdown for event
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenEvent = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEvent = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#F9F8F8",
        boxShadow: "none",
      }}
      position="static"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
          marginX: 1,
        }}
        disableGutters
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link to="/">
            <StaticImage
              src="../../images/LogoWithText.png"
              alt="Planet Cassandra"
              placeholder="blurred"
              height={30}
              style={{ marginLeft: 10 }}
            />
          </Link>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            display: { xs: "flex", md: "none" },
          }}
        >
          <Link to="/">
            <StaticImage
              height={35}
              width={35}
              src="../../images/icon.png"
              alt="Illustration Image"
            />
          </Link>
          {!openNav ? (
            <Button onClick={handleOpenNavMenu}>
              <AiOutlineMenu
                style={{ width: "33px", height: "23px" }}
                color="black"
              />
            </Button>
          ) : (
            <Button onClick={handleOpenNavMenu}>
              <AiOutlineClose
                style={{ width: "33px", height: "23px" }}
                color="black"
              />
            </Button>
          )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map(({ name, route }) => (
              <MenuItem key={name} onClick={handleCloseNavMenu}>
                <Link key={name} to={route} style={{ textDecoration: "none" }}>
                  <Typography textAlign="center">{name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => {
            if (page.name === "Events") {
              return (
                <Box key={page.name}>
                  <Button
                    onClick={handleOpenEvent}
                    sx={{
                      my: 2,
                      color: "#1E1E1E",
                      fontSize: 12,
                      display: "flex",
                      fontFamily: "'Inter', sans-serif",
                      textTransform: "capitalize",
                      fontWeight: 400,
                    }}
                    endIcon={<AiFillCaretDown size={12} />}
                  >
                    {page.name}
                  </Button>
                  <Menu
                    onClose={handleCloseEvent}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    sx={{ p: 0 }}
                  >
                    <Link to={page.route} style={{ textDecoration: "none" }}>
                      <MenuItem
                        sx={{
                          color: "#1E1E1E",
                          fontSize: 12,
                          display: "block",
                          fontFamily: "'Inter', sans-serif",
                          textTransform: "capitalize",
                          fontWeight: 400,
                        }}
                        onClick={handleCloseEvent}
                      >
                        Events
                      </MenuItem>
                    </Link>
                    <Link
                      to={"https://cassandra.apache.org/_/events.html"}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem
                        sx={{
                          color: "#1E1E1E",
                          fontSize: 12,
                          display: "block",
                          fontFamily: "'Inter', sans-serif",
                          textTransform: "capitalize",
                          fontWeight: 400,
                        }}
                        onClick={handleCloseEvent}
                      >
                        Handbook
                      </MenuItem>
                    </Link>
                  </Menu>
                </Box>
              );
            } else {
              return (
                <Link
                  key={page.name}
                  to={page.route}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#1E1E1E",
                      fontSize: 12,
                      display: "block",
                      fontFamily: "'Inter', sans-serif",
                      textTransform: "capitalize",
                      fontWeight: 400,
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              );
            }
          })}
        </Box>
        <Box display={{ xs: "none", sm: "flex" }}>
          <SearchBar />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link style={{ textDecoration: "none" }} to={`/contact`}>
            <Button
              sx={{
                my: 2,
                color: "black",
                fontSize: 12,
                fontFamily: "'Inter', sans-serif",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
            >
              Contribute
            </Button>
          </Link>
        </Box>
      </Toolbar>
      {openNav ? <MobileNav /> : null}
    </AppBar>
  );
}
export default ResponsiveAppBar;
