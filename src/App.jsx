import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Stack, Typography } from "@mui/material"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import banner_image from "./assets/banner.jpg"
import audience from "./data/audience.js"
import services from "./data/services.json"
import about from "./data/about.json"

export const App = () => {

  return (
    <Box display={'flex'} flexDirection={'column'}>
        <Header />

        <Box component={'main'} flex={1}  bgcolor={'#f9f9f9'}>
            {/* Jumbotron */}
            <Stack height={750} justifyContent={'center'}  
            sx={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner_image})`, backgroundSize: {xs: '140% 100%', lg: '100% 100%'}, backgroundBlendMode: 'darken', backgroundRepeat: "no-repeat"}} 
            >
            <Stack alignItems={'center'} textAlign={'center'} paddingX={3} gap={3} color={'white'}>
              <Typography variant="h5" fontWeight={'bold'}>
                  Descubra a verdade, proteja seus interesses.
              </Typography>

              <Typography maxWidth={1200}>
                  Com expertise e confidencialidade, solucionamos seus mistérios e garantimos a segurança das suas informações. Confie na nossa experiência para revelar o que está oculto e trazer clareza às situações mais complexas. Seja em casos pessoais ou corporativos, estamos aqui para ajudar você a encontrar respostas.
                </Typography>  

              <Button variant="contained" size="large" sx={{width: 'fit-content'}}>
                  Entre em Contato
              </Button>
            </Stack>
            {/* <img src="https://placehold.co/600x400" alt="" /> */}
            </Stack>

            {/* Publico Alvo */}
            <Stack paddingX={2} paddingY={5} marginTop={-15} marginBottom={-5} gap={3} alignItems={'center'}  >
              <Typography>
                  Nossa agência de investigação particular atende a uma ampla gama de clientes, incluindo:
              </Typography>

              <Stack flexDirection={{lg: 'row'}} gap={3}>
                {audience.map(group => (
                  <Card key={group.target} 
                      sx={{maxWidth: {xs: 450, md: 1000, lg: 450}, display: 'flex', flexDirection: {xs: 'column', md: 'row', lg: 'column'},  borderRadius: 2, }} 
                  >
                      <CardMedia component={'img'} image={group.poster} 
                          sx={''}
                      />

                      <Box>
                          <CardHeader title={group.target} titleTypographyProps={{fontSize: 22, fontWeight: 'semibold'}}
                            sx={{paddingBottom: 0}}
                          />

                          <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1}} paddingTop={0}>
                              {group.description.map((paragraph, i) => <Typography textAlign={'justify'} key={i}>{paragraph}</Typography>)}
                          </CardContent>
                      </Box>
                  </Card>
                ))}
              </Stack>
            </Stack>

            {/* Serviços */}
            <Stack gap={3} alignItems={'center'} paddingX={2} paddingY={4} marginTop={5}>
                <Typography variant="h5">Serviços: </Typography>

                <Typography maxWidth={1100} textAlign={'center'}>
                    Se você precisa de serviços confiáveis e discretos de investigação particular, estamos aqui para ajudar. Oferecemos uma ampla gama de serviços para atender às suas necessidades, garantindo total confidencialidade e resultados eficazes. Confira abaixo os serviços que oferecemos:  
                </Typography>

                <Stack flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={4} marginTop={3}>
                      {services.map(job => (
                        <Card sx={{maxWidth: 500, paddingY: 2}} key={job.name} >
                            <CardHeader title={job.name} sx={{paddingBottom: 0}}/>
                            
                            <CardContent sx={{fontSize: 18}}>
                                <Typography textAlign={'justify'}>{job.description}</Typography>
                            </CardContent>
                        </Card>
                      ))}
                </Stack>
            </Stack>

            {/* Sobre */}
            <Stack gap={2} marginY={5}>
              {about.map(b2 => (
                <Container display={'flex'} gap={3} key={b2.topic}>
                  <Typography>{b2.content}</Typography>
                </Container>
              ))}
            </Stack>

            {/* Legislação */}

            {/* Contato & FAQ */}
            <Box>

            </Box>

            <form action="#">

            </form>
        </Box>

        <Footer />
    </Box>
  )
}

