import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 20,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props?.Text}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {props?.Num} {' '}
            {props?.Unit ? props?.Unit : ''}
            <div style={{ position: 'absolute', right: '20px', top: '40px' }}>
              {props?.Icon ? props?.Icon : ''}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}