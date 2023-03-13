import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from '../SearchBar/SearchBar';
import ToggleButton from '../ToggleButton/ToggleButton';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const pages = [
  { name: "What's New", route: "/" },
  { name: "Events", route: "https://devcassandra.wpengine.com/events" },
  { name: "News", route: "/news" },
  { name: "Use Cases", route: "/usecases" },
  { name: "Posts", route: "/posts" },
  { name: "Leaves", route: "/leaves" },
  { name: "Videos", route: "/videos" }
];

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
        bgcolor: '#F9F8F8',
        boxShadow: 'none',
      }}
      position="static"
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <Link to='/'>
            <StaticImage
              src="../../images/LogoWithText.png"
              alt="Planet Cassandra"
              placeholder="blurred"
              height={30}
              style={{ marginLeft: 110 }}
            />
          </Link>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
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
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
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
            flexGrow: 1,
            justifyContent: 'end',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {pages.map((page) => (
            <Link key={page.name} to={page.route} style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                className="Font_Poppins_Regular"
                sx={{ my: 2, color: 'black', fontSize: 12, display: 'block' }}
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
        <SearchBar />
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'end',
            width: 10,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Link style={{ textDecoration: "none" }} to={`/contribute`}>
            <Button
              sx={{ my: 2, color: 'black', fontSize: 12, display: 'block' }}
              className="Font_Poppins_Regular"
            >
              Contribute
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/contact`}>
            <Button
              className="Font_Poppins_Regular"
              sx={{ my: 2, color: 'black', fontSize: 12, display: 'block' }}
            >
              Contact
            </Button>
          </Link>
        </Box>
        <ToggleButton />
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
