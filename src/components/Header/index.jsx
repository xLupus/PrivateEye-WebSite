import { AppBar, Button, Container, Drawer, Stack, Toolbar } from "@mui/material";
import { List } from "@phosphor-icons/react";
import { useState } from "react";
import WhiteLogo from '../../assets/logo/logo-white.png'

export function Header() {
    const [isOpened, setIsOpended]= useState(false)
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => window.scrollY >= 185 ? setColorchange(true) : setColorchange(false)

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <>
            <AppBar component={'header'} 
                color={!colorChange ? 'transparent' : undefined} 
                elevation={colorChange ? 5 : 0}
                sx={{
                    background: colorChange ? 'linear-gradient(to top, #212121 0%, rgba(22,22,24,1) 100%)' : undefined,
                }}
                
            >
                <Toolbar sx={{color: 'white' }}>
                    <img src={ WhiteLogo} alt="" height={80} /> {/* 80 */}

                    <Container sx={{flex: 1}} />

                    <Stack component={'ul'} direction={'row'} gap={2} display={{xs: 'none', md: 'flex'}} sx={{listStyle: "none"}}>
                        <li><Button color="inherit">Serviços</Button></li>
                        <li><Button color="inherit">Sobre</Button></li>
                        <li><Button color="inherit">Contato</Button></li>
                    </Stack>

                    <Button onClick={() => setIsOpended(true)} sx={{ display: { md: 'none'} }}>
                        <List size={32} color={"#ffffff"}/>
                    </Button>
                </Toolbar>

                <Drawer open={isOpened} onClose={() => setIsOpended(false)} anchor="right" ModalProps={{keepMounted: true}}>
                    Navegação
                </Drawer>
            </AppBar>
        </>
    )
}