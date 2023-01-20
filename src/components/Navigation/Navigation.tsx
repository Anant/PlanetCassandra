import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "../SearchBar/SearchBar";
import ToggleButton from "../ToggleButton/ToggleButton";
const pages = ["What's New", "Events", "Use Cases"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#F9F8F8",
        boxShadow: "none",
      }}
      position="static"
    >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            marginLeft: 5,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
          }}
        >
          Planet Cassandra
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 300,
            fontSize: 20,
            letterSpacing: ".1rem",
            color: "black",
            textDecoration: "none",
          }}
        >
          Planet Cassandra
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "end",
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", fontSize: 12, display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <SearchBar />
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "end",
            width: 10,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", fontSize: 12, display: "block" }}
          >
            Contribute
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", fontSize: 12, display: "block" }}
          >
            Contact
          </Button>
        </Box>
        <ToggleButton />
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
