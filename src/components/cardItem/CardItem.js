import React from 'react';
//TODO: import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CardItem.css'

const CardItem = (props) => {
  const {
    image,
    heading,
    overView,
    primaryLabel,
    primaryContent,
    secondaryLabel,
    secondaryContent,
    terthiaryLabel,
    terthiaryContent,
    detailButton,
    handleClick,
    isSeasonsList
  } = props;

  return (
      <Card className="card">
        <CardMedia
          className="cardMedia"
          image={image}
          title="Image title"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="title" component="h2">
            {heading}
          </Typography>
          <Typography gutterBottom>
            {overView}
          </Typography>
          <div>
            <Typography
              color="secondary"
              gutterBottom
            >
              {primaryLabel}: {primaryContent}
            </Typography>
            <Typography
              color="secondary"
              gutterBottom
            >
              {secondaryLabel}: {secondaryContent}
            </Typography>
            <Typography
              color="secondary"
              gutterBottom
            >
              {terthiaryLabel}: {terthiaryContent}
            </Typography>
          </div>
        </CardContent>
        {
          isSeasonsList ?
          null
          :
          <CardActions>
            <Button size="medium" color="primary" onClick={handleClick}>
              {detailButton}
            </Button>
          </CardActions>
        }

      </Card>
  )
}

export default CardItem;

