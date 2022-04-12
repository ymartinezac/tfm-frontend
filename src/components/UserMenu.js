import { useAuth0 } from "@auth0/auth0-react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from 'react-router-dom';
import LoginButton from "./Login";
import LogoutButton from "./Logout";
const settings = ["Profile", "Account", "Dashboard"];


export const UserMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        const getToken = async () => {
          try {
            const accessToken = await getAccessTokenSilently({
                audience: "https://tfm-backend.com",
                scope: "read:pets",
            });
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getToken();
      }, [getAccessTokenSilently, user?.sub]);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
                        <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} />

                        
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to="/">
                                     <Typography textAlign="center">Home</Typography>
                             </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link to="pets">
                                     <Typography textAlign="center">Pets</Typography>
                             </Link>
                        </MenuItem>
                           
                        </Menu>
                    </Box>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                       
                            <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                                <Link to="/">
                                        <Typography textAlign="center">Home</Typography>
                                </Link>
                            </Button>
                            <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                                <Link to="/pets">
                                        <Typography textAlign="center">Pets</Typography>
                                </Link>
                            </Button>
                     
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        
                                { isAuthenticated ? 
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt={user.name} src={user.picture} />  
                                        </IconButton>
                                    </Tooltip>
                                    : <LoginButton />
                                }
                                
                           
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}

                            <MenuItem key={settings.length} onClick={handleCloseUserMenu}>
                                 <LogoutButton /> 
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
