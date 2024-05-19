import { AppBar, Button, Container, Drawer, Stack, Toolbar } from "@mui/material";
import { List } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
    const [isOpened, setIsOpended]= useState(false)

    return (
        <>
            <AppBar component={'header'} sx={{bgcolor: 'white'}}>
                <Toolbar sx={{color: 'black'}}>
                    <h2>Private Eye</h2>
                    
                    <Container sx={{flex: 1}} />

                    <Stack component={'ul'} direction={'row'} gap={2} display={{xs: 'none', md: 'flex'}} sx={{listStyle: "none"}}>
                        <li><Button color="inherit">Serviços</Button></li>
                        <li><Button color="inherit">Sobre</Button></li>
                        <li><Button color="inherit">Contato</Button></li>
                    </Stack>

                    <Button onClick={() => setIsOpended(true)} sx={{ display: { md: 'none'} }}>
                        <List size={32} color="ff0000"/>
                    </Button>
                </Toolbar>

                <Drawer open={isOpened} onClose={() => setIsOpended(false)} anchor="right" ModalProps={{keepMounted: true}}>
                    Navegação
                </Drawer>
            </AppBar>

            <Container sx={{height: 59}} />
        </>

    )
}