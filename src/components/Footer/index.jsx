import { Box, Button, Stack, Typography } from "@mui/material";

export function Footer() {

    return (
        <Box component={'footer'} padding={5}
            sx={{ background: 'linear-gradient(to bottom, #212121 0%, rgba(22,22,24,1) 100%)', color: '#e4e4e4'}}
        >
            <Stack flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Typography marginTop={1}>© 2024 Company, Inc</Typography>
            </Stack>
        </Box>
    )
}