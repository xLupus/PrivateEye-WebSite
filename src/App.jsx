import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import banner_image from "./assets/banner.jpg"
import audience from "./data/audience.js"
import services from "./data/services.json"
import about from "./data/about.json"
import { CaretDown } from "@phosphor-icons/react"
import LogoBanner from "./assets/logo/logo-banner.jpg"

export const App = () => {

  return (
    <Box display={'flex'} flexDirection={'column'}>
        <Header />

        <Box component={'main'} flex={1}  bgcolor={'#f9f9f9'}>
            {/* Jumbotron */}
            <Stack height={800} justifyContent={'center'}  
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
            <Stack gap={3} alignItems={'center'} paddingX={2} paddingBottom={5} marginTop={-8}>
              <Stack flexDirection={{lg: 'row'}} gap={3}>
                {audience.map(group => (
                  <Card key={group.target} 
                      sx={{maxWidth: {xs: 450, md: 1000, lg: 400}, display: 'flex', flexDirection: {xs: 'column', md: 'row', lg: 'column'},  borderRadius: 2 }} 
                  >
                      <CardMedia component={'img'} image={group.poster}/>

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
            <Stack gap={3} alignItems={'center'} paddingX={2} paddingY={5}>
                <Typography variant="h5">Serviços: </Typography>

                <Typography maxWidth={'lg'} textAlign={'center'}>
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
            <Stack maxWidth={'lg'} margin={'auto'} gap={3} alignItems={'center'} paddingX={2} paddingY={5}>
                <Box bgcolor={'black'} >
                    <img src={LogoBanner} alt="" width={'100%'} /> 
                </Box>

                <Stack gap={2} textAlign={'justify'}>
                    {about.map(b2 => <Typography key={b2.topic}>{b2.content}</Typography>)}
                </Stack>

                <Box borderTop={1} width={'10%'}/>

                <Stack flexDirection={{md: 'row'}} gap={4}>
                    <img src="https://placehold.co/300x400" alt="" /> {/* TODO - Ajeitar Depois */}

                    <Stack gap={2}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur laudantium a tempore laboriosam reiciendis et cum quaerat repellendus esse saepe numquam, voluptas deserunt, optio similique! Facilis ipsa voluptatem aliquid.
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur laudantium a tempore laboriosam reiciendis et cum quaerat repellendus esse saepe numquam, voluptas deserunt, optio similique! Facilis ipsa voluptatem aliquid.
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur laudantium a tempore laboriosam reiciendis et cum quaerat repellendus esse saepe numquam, voluptas deserunt, optio similique! Facilis ipsa voluptatem aliquid.
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur laudantium a tempore laboriosam reiciendis et cum quaerat repellendus esse saepe numquam, voluptas deserunt, optio similique! Facilis ipsa voluptatem aliquid.
                        </Typography>
                    </Stack>
                </Stack>

                <Box borderTop={1} width={'10%'}/>

                {/* Legislação */}
                <Stack gap={2}>
                    <Typography>
                        A Lei Nº 13432/17 regulamenta a profissão de detetive particular no Brasil, estabelecendo diretrizes para a atuação ética e legal da profissão. Nossa agência opera em total conformidade com esta legislação, garantindo serviços de qualidade e respeito aos direitos de todas as partes envolvidas.
                    </Typography>

                    <Typography>
                        Estamos atualizados com as leis pertinentes, incluindo a Lei Nº 13432/17. Nossos serviços são conduzidos de acordo com todas as regulamentações legais aplicáveis, garantindo a legalidade e a integridade de nossas investigações.
                    </Typography>
                </Stack>
            </Stack>

            {/* FAQ */}
            <Stack maxWidth={'lg'} marginX={'auto'} gap={2} paddingX={2} paddingY={5}>
                <Typography textAlign={'center'} variant="h5" marginBottom={5}>Perguntas Frequentes</Typography>
                
                <Grid container margin={'auto'} spacing={{xs: 0.2, sm: 1}} columns={2}>
                    <Grid item xs={2} md={1}>
                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={2} md={1}>
                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>
                        
                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<CaretDown size={23} />}>Pergunta 1</AccordionSummary>
                            <AccordionDetails>Resposta 1</AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Stack>

            {/* Contato */}
            <Stack maxWidth={'lg'} marginX={'auto'} gap={2} paddingX={2} paddingY={5}>
                <Typography textAlign={'center'} variant={'h5'} marginBottom={5}>Contato</Typography>

                <form action="#">
                  <Stack gap={1}>
                      <TextField label={'Nome'} variant={"outlined"} />
                      <TextField label={'E-mail'} variant={"outlined"} />
                      <TextField label={'Telefone'} variant={"outlined"} />
                      <TextField label={'Assunto'} variant={"outlined"} />
                      <TextField label={'Preferencia de Contato em Checkbox'} variant={"outlined"} />
                      
                      <Button>Enviar</Button>
                  </Stack>
                </form>
            </Stack>
        </Box>

        <Footer />
    </Box>
  )
}

