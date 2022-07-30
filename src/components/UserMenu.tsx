import { useAuth0 } from '@auth0/auth0-react'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './Login'
import LogoutButton from './Logout'

export const UserMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
    const { user, isAuthenticated, getAccessTokenSilently, getIdTokenClaims } = useAuth0()
    const [isAuthorized, setIsAuthorized] = React.useState(false)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('🚀 ~ file: UserMenu.tsx ~ line 29 ~ handleOpenUserMenu ~ event', event)
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    React.useEffect(() => {
        const getToken = async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: 'https://tfm-backend.com',
                    scope: 'read:pets',
                })
            } catch (e) {
                // console.log(e?.message)
            }
        }

        getToken()
    }, [])

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
                        </Typography>
                    </Link>

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
                            onClick={() => handleOpenNavMenu}
                            color="inherit"
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
                            <Link to="/">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Home</Typography>{' '}
                                </MenuItem>
                            </Link>
                            <Link to="pets">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Pets</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/">
                                <Typography textAlign="center">Home</Typography>
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/pets">
                                <Typography textAlign="center">Pets</Typography>
                            </Link>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {isAuthenticated ? (
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user?.name} src={user?.picture} />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <LoginButton />
                        )}

                        <Menu
                            className="usermenu"
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key="Account" onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Account</Typography>
                            </MenuItem>
                            <MenuItem key="Dashboard" onClick={handleCloseUserMenu}>
                                <Link to="/admin" className="usermenu__link">
                                    <Typography textAlign="center">Dashboard</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key="Logout" onClick={handleCloseUserMenu}>
                                <LogoutButton />
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
