import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Data from '../Data';
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    customButton: {
        float: 'right',
    },
    customButtonleft: {
      float: 'left',
    },
    CardActions: {
        display: 'block !important',
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
  
const Home = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              { Data.map((value, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={value.imgsrc}
                      title={value.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {value.title}
                      </Typography>
                      <Typography>
                      Price: {value.price}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.CardActions}>
                      <Button size="small" color="primary" className={classes.customButton} onClick={()=>
                        props.addToCartHandler({id: value.id, price: value.price, name: value.title})
                      }>
                        Add To Cart
                      </Button>
                      <Button size="small" color="primary" className={classes.customButtonleft} onClick={(e)=>
                        props.removeToCartHandler(index)
                      }>
                        Remove To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
            
        </React.Fragment>
    )
}
export default Home;
