import { makeStyles, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react'



const useStyles = makeStyles({
  card: {
    marginRight: '2px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  cardDetails: {
    flex: 1,

  },
  cardMedia: {
    width: '200px',

  },
})


const Bee = (props) => {

  const classes = useStyles();


  const { id, email, first_name, last_name, avatar } = props;
  return (

    <Grid item  >

      <CardActionArea component='a' href=" #">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary" >{id}</Typography>


              <Typography variant="h5" component="h2">{first_name} {last_name}</Typography>


              <Typography variant="subtitle1" color="textSecondary"> {email}</Typography>

            </CardContent>
          </div>

          <CardMedia >
            <img src={avatar} alt='vla' width='200px' />

          </CardMedia>
        </Card>
      </CardActionArea>
    </Grid>

  )
}

export default Bee
