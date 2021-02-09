
import React,{Component} from 'react';
import { Link, Route } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

class Detailed_img extends Component{

     dataList =[{qId:101,cat:"html",que:"what is html",option1:"Hypertext Language",option2:"Hypertext Markup Language",option3:"Hyperactive Markup Language",option4:"Hyperactive Markup Language"},
     {qId:102,cat:"css",que:"what is css",option1:"css",option2:"styleshhet",option3:"Cascading Style sheet",option4:"Hyperactive Markup Language"},
     {qId:102,cat:"css",que:"what is css",option1:"Hypertext Language",option2:"Hypertext Markup Language",option3:"Hyperactive Markup Language",option4:"Hyperactive Markup Language"},
     {qId:102,cat:"css",que:"what is css",option1:"Hypertext Language",option2:"Hypertext Markup Language",option3:"Hyperactive Markup Language",option4:"Hyperactive Markup Language"},
     {qId:103,cat:"css",que:"what is html5",option1:"Hypertext Language",option2:"Hypertext Markup Language",option3:"Hyperactive Markup Language",option4:"Hyperactive Markup Language"},
     {qId:104,cat:"bootstrap",que:"what is bootstrap",option1:"RWD",option2:"framework",option3:"js",option4:"Hyperactive Markup Language"}
     ];
  
      

    getImagewithId(){
        var imageId=this.dataList.find((d)=>{
          console.log(this.props.match.params.cat1);
           return d.cat == this.props.match.params.cat1;
    
        });
        return imageId;
      };
  
    render(){
       
       // this.dataList.map((d) =>{
        return(
           <div>

{/*{
          dataList.map((d) =>{
            return(
            */}
         <div className="jumbotron">
             <h1>{this.props.match.params.cat1}</h1>
            <Card className="card-style">
   
    <Card.Body>
      <Card.Title id="title"> {this.getImagewithId().que}</Card.Title>
      <Card.Text>
    <button type="button" class="btn btn-info" >{this.getImagewithId().option1}</button></Card.Text>
    <Card.Text> <button type="button" class="btn btn-info" >{this.getImagewithId().option2}</button></Card.Text>
    <Card.Text>  <button type="button" class="btn btn-info" >{this.getImagewithId().option3}</button></Card.Text>
    <Card.Text>  <button type="button" class="btn btn-info" >{this.getImagewithId().option1}</button></Card.Text>
    
      
      <Button variant="primary" >Show</Button>
     
    
    </Card.Body>
  </Card>
  </div>
  );
 {/*}})
}*/}
         
          </div>
         
        );
       // })
    }
}
export default Detailed_img;
