import { Box, Button, Stack, Typography } from "@mui/material";

export function Footer() {

    return (
        <Box component={'footer'} paddingTop={2} paddingBottom={5} sx={{ bgcolor: 'green'}}>
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