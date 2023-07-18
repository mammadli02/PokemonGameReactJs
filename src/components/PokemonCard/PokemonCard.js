import React, { Component } from "react";
import { convertItemImage } from "../../shared/utils/convertImageItem";
import { Card } from 'antd';
import { Typography } from "@mui/material";
const { Meta } = Card;
export class PokemonCard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;

    return (
        <>
        
        
        
        <Card
    hoverable
    style={{
      width: 240,
    }}
    
    cover={<img alt={name} src={convertItemImage(id)} />}
  >
    <Typography gutterBottom variant="h5" component="div"  style={{textAlign:"center", color:"blue", fontWeight:"bolder"}}>
    {name}
        </Typography>
    <Typography paragraph style={{textAlign:"center", color:"blue", fontWeight:"bolder"}} >Type:{type}</Typography>
    <Typography paragraph style={{textAlign:"center", color:"blue", fontWeight:"bolder"}} > EXP:{base_experience} </Typography>
    
  </Card>
  
  
  
 
  </>
);
  }
}

export default PokemonCard;