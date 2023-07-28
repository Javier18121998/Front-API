import { Container, Grid, Step, StepLabel, TableBody, Stepper, TextField, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableContainer, Table, TableRow, TableCell, CardMedia, Divider, Paper} from "@material-ui/core";
import useStyles from "../../theme/useStyles";
import { useState } from "react";

const ProcesoCompra = () => {
    const [activeStep, setActiveStep] = useState(1);
    const continuarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const retrocederProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envio</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Metodo de Pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar Pedido</StepLabel>
                </Step>
            </Stepper>
            {activeStep === 1 ? (
                <Grid md={6} xs={12} className={classes.gridPC}>
                    <Typography variant="h6" className={classes.text_title}>
                        ENVIO DEL PRODUCTO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Direccion"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true

                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Ciudad"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true

                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Pais"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true

                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={continuarProceso}
                                >
                                    CONTINUAR
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            ) : activeStep === 2? (
                <Grid md={3} xs={12} className={classes.gridPC}>
                    <Typography variant="h6" className={classes.text_title}>
                        METODO DE PAGO
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl}>
                                <FormLabel>
                                    Seleccione Metodo
                                </FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                        value="PayPal"
                                        control={
                                            <Radio color="primary"/>
                                        }
                                        label="PayPal o Tarjeta"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.buttonAnterior}
                                onClick={retrocederProceso}
                            >
                                ANTERIOR
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={continuarProceso}
                            >
                                CONTINUAR
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            ) : activeStep === 3 ? (
                <Grid container className={classes.gridPC}>
                    <Grid item md={8} xs={12} className={classes.gridLR}>
                        <Typography variant="h6" className={classes.text_title}>
                            ENVIO
                        </Typography>
                        <Typography>
                            Direccion: Calle 2, Cali, Colombia
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            METODO DE PAGO
                        </Typography>
                        <Typography>
                            Metodo: Paypal
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            PRODUCTOS
                        </Typography>
                        <TableContainer className={classes.gridmb}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CardMedia
                                                className={classes.imgProductoPC}
                                                image="https://th.bing.com/th/id/OIP.aeTdOU0yTCVAQ2ORxt5uQAHaHa?pid=ImgDet&rs=1"
                                                title="imagen en proceso de compra"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >Zapato SampleBrand Cafe</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >2 x $25.00 = $50.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={retrocederProceso}
                        >
                            ANTERIOR
                        </Button>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TableContainer component={Paper} square>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant="h6" className={classes.text_title}>
                                                RESUMEN DEL PEDIDO
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                Productos
                                            </Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                $50.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                Envio
                                            </Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                $2.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                Impuesto
                                            </Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                $8.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title}>
                                                $60.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                            >
                                                REALIZAR PEDIDO
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) : null}
        </Container>
    );
};

export default ProcesoCompra;