import { Box, Button, Stack, Typography } from "@mui/material";

export function Footer() {

    return (
        <Box component={'footer'} paddingTop={5} paddingBottom={8} 
            sx={{ background: 'linear-gradient(to bottom, #212121 0%, rgba(22,22,24,1) 100%)', color: '#e4e4e4'}}
        >
            <Stack flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Stack component={'ul'} paddingX={0} width={'90%'} direction={'row'} gap={2} paddingBottom={2} justifyContent={'center'} sx={{listStyle: "none", borderBottom: 1}}>
                    <li><Button color="inherit">Sobre</Button></li>
                    <li><Button color="inherit">Serviços</Button></li>
                    <li><Button color="inherit">Contato</Button></li>
                </Stack>

                <Typography marginTop={1}>© 2024 Company, Inc</Typography>
            </Stack>
        </Box>
    )
}