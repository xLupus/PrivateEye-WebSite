import { AppBar, Button, Container, Drawer, Stack, Toolbar } from "@mui/material";
import { List } from "@phosphor-icons/react";
import { useState } from "react";
import WhiteLogo from '../../assets/logo/logo-white.png'
import BlackLogo from '../../assets/logo/logo-black.png'

export function Header() {
    const [isOpened, setIsOpended]= useState(false)
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => window.scrollY >= 185 ? setColorchange(true) : setColorchange(false)

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <>
            <AppBar component={'header'} 
                color={!colorChange ? 'transparent' : undefined} 
                sx={{bgcolor: colorChange ? 'white' : undefined}}
            >
                <Toolbar sx={{color: colorChange ? 'black' : 'white' }}>
                    <img src={colorChange ? BlackLogo : WhiteLogo} alt="" height={80} /> {/* 80 */}

                    <Container sx={{flex: 1}} />

                    <Stack component={'ul'} direction={'row'} gap={2} display={{xs: 'none', md: 'flex'}} sx={{listStyle: "none"}}>
                        <li><Button color="inherit">Serviços</Button></li>
                        <li><Button color="inherit">Sobre</Button></li>
                        <li><Button color="inherit">Contato</Button></li>
                    </Stack>

                    <Button onClick={() => setIsOpended(true)} sx={{ display: { md: 'none'} }}>
                        <List size={32} color={colorChange ? '#000000' : "#ffffff"}/>
                    </Button>
                </Toolbar>

                <Drawer open={isOpened} onClose={() => setIsOpended(false)} anchor="right" ModalProps={{keepMounted: true}}>
                    Navegação
                </Drawer>
            </AppBar>
        </>
    )
}