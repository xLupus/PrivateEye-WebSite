import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardHeader, CardMedia,  FormControl, FormControlLabel, FormLabel, Grid, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import banner_image from "./assets/banner.jpg"
import audience from "./data/audience.js"
import services from "./data/services.json"
import info from "./data/info.js"
import faq from "./data/faq.json"
import holmes from "./assets/holmes.jpg"
import { CaretDown, User } from "@phosphor-icons/react"
import LogoBanner from "./assets/logo/logo-banner.jpg"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const contactFormSchema = z.object({
    name: z.string(),
    email: z.string(),
    cellphone: z.string(),
    service: z.string(),
    message: z.string(),
    contact_preference: z.string(),
})

export const App = () => {

    const {register, handleSubmit,/*  formState: {errors} */ } = useForm({ resolver: zodResolver(contactFormSchema) })

    const handleFormSubmit = () => {
        console.log('passou');
    }   
    
  return (
    <Box display={'flex'} flexDirection={'column'}>
        <Header />

        <Box component={'main'} flex={1}  bgcolor={'#f2f2f2'}>
            {/* Jumbotron */}
            <Stack height={800} justifyContent={'center'}  
                sx={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner_image})`, backgroundSize: {xs: '140% 100%', lg: '100% 100%'}, backgroundBlendMode: 'darken', backgroundRepeat: "no-repeat"}} 
            >
            <Stack alignItems={'center'} textAlign={'center'} gap={3} color={'white'}>
            <Typography variant="h5" fontWeight={'bold'}>
                Descubra a verdade, proteja seus interesses.
            </Typography>

            <Typography maxWidth={'lg'}>
                Com expertise e confidencialidade, solucionamos seus mistérios e garantimos a segurança das suas informações. Confie na nossa experiência para revelar o que está oculto e trazer clareza às situações mais complexas. Seja em casos pessoais ou corporativos, estamos aqui para ajudar você a encontrar respostas.
                </Typography>  

            {/* <Button variant="contained" size="large" sx={{width: 'fit-content'}}>
                Entre em Contato
            </Button> */}
            </Stack>
            {/* <img src="https://placehold.co/600x400" alt="" /> */}
            </Stack>
            
            <Box maxWidth={'lg'} marginX={'auto'} paddingX={{xs: 2, md: 3}}>
                {/* Publico Alvo */}
                <Stack gap={3} alignItems={'center'} paddingBottom={5} marginTop={-8}>
                    <Stack gap={3}>
                        {audience.map(group => (
                            <Card key={group.target} 
                                sx={{maxWidth: {xs: 450, md: 1100}, display: 'flex', flexDirection: {xs: 'column', md: 'row'}, borderRadius: 2 }} 
                            >
                                <CardMedia component={'img'} image={group.poster}
                                    sx={{ height: 300, alignSelf: 'center' }}
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
                <Stack gap={3} alignItems={'center'} paddingY={5}>
                    <Typography variant="h5">Serviços</Typography>

                    <Typography maxWidth={{xs: 1000, lg: 1100}} textAlign={'center'}>
                        Se você precisa de serviços confiáveis e discretos de investigação particular, estamos aqui para ajudar. Oferecemos uma ampla gama de serviços para atender às suas necessidades, garantindo total confidencialidade e resultados eficazes. Confira abaixo os serviços que oferecemos:  
                    </Typography>

                    <Grid container columns={2} rowSpacing={3}>
                        {services.map(job => (
                            <Grid item xs={2} md={1} padding={1}  key={job.name}>
                                <Card sx={{height: '100%', paddingY: 1, borderLeft: 8, borderColor: '#727272'}}  >
                                    <CardHeader title={job.name} sx={{paddingBottom: 0}}/>
                                    
                                    <CardContent sx={{fontSize: 18}}>
                                        <Typography textAlign={'justify'}>{job.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* Sobre  | Falta algo aqui | Legislação*/}
                <Stack gap={4} alignItems={'center'} paddingY={5}>
                    <Typography variant="h5">Sobre</Typography>

                    <Stack flexDirection={{md: 'row'}} gap={4}>
                        <Box component={'picture'}>
                            <Box component={'source'} srcset={LogoBanner} media="(max-width: 900px)"/>
                            <Box component={'img'} srcSet={holmes} 
                                maxWidth={{xs: '100%', md: 300}} 
                                height={'100%'} maxHeight={{xs: 230, sm: 300, md: 400}}
                            />
                        </Box>

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
                    
                    <Box bgcolor={'black'} >
                        <img src={LogoBanner} alt="" width={'100%'} /> 
                    </Box>

                    <Stack gap={2} textAlign={'justify'}>
                        {info.about.map(b2 => <Typography key={b2.topic}>{b2.content}</Typography>)}
                    </Stack>

                    {/* Sinto que Falta algo aqui */}
                    <Grid container columns={2} columnSpacing={2} marginY={3}>
                        {info.whyus.map(q => (
                            <Grid item xs={2} md={1} key={q.title}>
                                <Card sx={{bgcolor: 'transparent', boxShadow: 'none'}}>
                                    <CardHeader 
                                        avatar={<User size={50} weight="fill" color="#727272"/>} 
                                        title={q.title} 
                                        subheader={q.description}
                                        titleTypographyProps={{fontSize: 18}} 
                                        subheaderTypographyProps={{fontSize: 14, textAlign: 'justify' ,marginTop: 1}}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Legislação */}
                    <Stack gap={2}>
                        {info.law.map((paragraph, i) => <Typography key={i}>{paragraph}</Typography>)}
                    </Stack>
                </Stack>
                
                {/* FAQ */} 
                <Stack gap={2} marginTop={3}>
                    <Typography textAlign={'center'} variant="h5" marginBottom={5}>Perguntas Frequentes</Typography>
                    
                    <Box>
                        {faq.map(el => (
                            <Accordion key={el.question}>
                                <AccordionSummary expandIcon={<CaretDown size={23}/>}>{el.question}</AccordionSummary>
                                <AccordionDetails>{el.answer}</AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Stack>

                {/* Contato */}
                <Stack gap={2} marginY={10}>
                    <Typography textAlign={'center'} variant={'h5'} >Contato</Typography>
                    
                    <Typography maxWidth={1000} textAlign={'center'} marginBottom={3}>
                        Para mais informações ou para agendar uma consulta, entre em contato conosco pelos seguintes meios:
                    </Typography>
                    
                    <Grid container columns={9} spacing={4}>
                        <Grid item xs={9} md={4}>
                            <Stack gap={2}>
                                <Stack flexDirection={'row'}>
                                    <Typography>Telefone:</Typography>
                                    <Typography>+55 (11) 12345-6789</Typography>
                                </Stack>

                                <Stack flexDirection={'row'}>
                                    <Typography>E-mail:</Typography>
                                    <Typography>contato@privateeye.com</Typography>
                                </Stack>


                                <Stack flexDirection={'row'}>
                                    <Typography>Horario de Atendimento:</Typography>
                                    <Typography>6:00 às 18:00, Segunda a Sexta</Typography>
                                </Stack>

                                <Stack gap={1}>
                                    <Typography>Endereço do Escritorio:</Typography>
                                    <Typography>Baker Street, 221b - 01234-222, São Paulo - SP</Typography>
                                </Stack>
                                
                                <img src="https://placehold.co/1000x600" alt="" />
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={9} md={1} alignContent={'center'}>
                            <Stack flexDirection={{xs: 'row', md: 'column'}} gap={1} justifyContent={'center'} alignItems={'center'}>
                                <Box 
                                    width={{xs: '30%', md: 0}} height={{md: 150}} 
                                    borderBottom={{xs: 1, md: 0}} borderLeft={{xs: 0, md: 1}} 
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={9} md={4}>
                            <form action="#" onSubmit={handleSubmit(handleFormSubmit)}>
                                <Stack gap={3}>
                                    <FormControl>
                                        <InputLabel htmlFor="name">Nome</InputLabel>
                                        <Input {...register('name')} id="name" variant={"outlined"} />
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel htmlFor="email">E-mail</InputLabel>
                                        <Input {...register('email')} id="email" variant={"outlined"} />
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel htmlFor="cellphone">Telefone</InputLabel>
                                        <Input {...register('cellphone')} id="telefone" variant={"outlined"} />
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel htmlFor="service">Tipo de Investigação</InputLabel>

                                        <Select {...register('service')} id="service" variant="standard" value={''} onChange={''}>
                                            {services.map(job => <MenuItem key={job.name}>{job.name}</MenuItem>)}
                                            <MenuItem>Outro</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel htmlFor="message">Mensagem</InputLabel>

                                        <Input {...register('message')} multiline rows={5} maxRows={5} id="message" variant={"outlined"} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor="contact_preference">Preferencia de Contato</FormLabel>
                                        
                                        <RadioGroup id="contact_preference" {...register('contact_preference')} row defaultValue="Whatsapp" name="radio-buttons-group">
                                            <FormControlLabel value="Whatsapp" control={<Radio />} label="Whatsapp" />
                                            <FormControlLabel value="E-mail" control={<Radio />} label="E-mail" />
                                            <FormControlLabel value="Ligação" control={<Radio />} label="Ligação" />
                                        </RadioGroup>
                                    </FormControl>

                                    <Button type="submit" variant="contained">Enviar</Button>
                                </Stack>
                            </form>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Box>

        <Footer />
    </Box>
  )
}

