import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    renderComments(selectedDish){
        
        if(selectedDish != null){
            
            selectedDish.comments.map((comment) => {
                console.log(comment.comment);
                return(
                    <ListGroupItem id={comment.id} >
                        <p> {comment.comment} </p>
                        <span> {comment.author} {comment.date} </span>
                    </ListGroupItem>
                );
            });
        } else{
            return(
                <div></div>
            );
        }
    }

    renderDish(selectedDish){
        if(selectedDish != null){
            return(
                <Card>
                    <CardImg width="100%" src={selectedDish.image} alt={"selectedDish.name"} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
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

        // const comments = this.props.selectedDish.comments.map((comment) => {
        //     return(
        //         <ListGroupItem>
        //             <p> {comment.comment} </p>
        //             <span> {comment.author} {comment.date} </span>
        //         </ListGroupItem>
        //     )
        // });
        
        return(
            <div className="row">
                <div className="col-md-5 col-sm-12 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-md-5 col-sm-12 m-1">
                    <ListGroup>
                        {this.renderComments(this.props.selectedDish)}
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default DishDetail;