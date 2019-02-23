import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            
        }
    }
    
    renderComments(dish){
        
        if(dish != null){
            // map comments into a variable
            let comments = dish.comments.map((comment) => {
                return(
                    <ListGroupItem key={comment.id} >
                        <p> {comment.comment} </p>
                        <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                    </ListGroupItem>
                );
            });
            // unordered list wich is populated with comments
            const listOfComments =  <div>
                                        <h4>Comments</h4>
                                        <ListGroup>{comments}</ListGroup>
                                    </div>;

            return listOfComments;    
            
        } else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
        console.log(dish);
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={"dish.name"} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;