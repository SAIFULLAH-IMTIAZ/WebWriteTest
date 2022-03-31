import React, { FC } from "react"
import { Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import "./Card.css"



interface CardProps {
    img?: string;
    dis?: string;
    weth?: string;
    ends?: string;
}
 const BasicCard : FC <CardProps> = (props: CardProps) => {

    return (
        <Card sx={{width: 275}} style={{backgroundColor: "#1F1D2B", margin :"10px"}}>
            <CardMedia 
            component="img"
            height="280"
            image={`${process.env.PUBLIC_URL}${props.img}`}
            alt="images"
            />
            <CardContent className="cardcontent">
                <Typography style={{color: "#BCBCBC"}}> {props.dis}</Typography>
                <Typography style={{color: "#BCBCBC"}}> {props.weth}</Typography>
            </CardContent>
            <Divider style={{background: "#BCBCBC"}} />
            <CardContent className="cardcontent">
                <Typography style={{color: "#BCBCBC"}}> {props.ends}</Typography>
                <Button style={{color: "#BCBCBC"}} variant="outlined" size="small"> Bid</Button>
            </CardContent>

        </Card>
    )
}

export default BasicCard;