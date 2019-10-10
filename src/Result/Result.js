import React from "react";
import './Result.css';

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


const result = (props) => {

    return (


        <Card style={{margin:"16px 5px", display:"inline-block", width:"300px"}}>
        <CardHeader style={{width:"100%", textAlign:"center"}}>{props.title}</CardHeader>
          <CardImg
            style={{width:"95%", height:"250px"}}
            src={"https://spoonacular.com/recipeImages/" + props.image}/>
            <CardBody>
                <CardTitle>Recipe</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button>Read more &rarr;</Button>
            </CardBody>
        </Card>
    );
  }

export default result;
