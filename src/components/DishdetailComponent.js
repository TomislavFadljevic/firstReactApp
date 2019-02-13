import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: this.props.selectedDish
        }
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }
    
    renderComments(dishComments){
        console.log(dishComments);
        if(dishComments != null){
            return(
                <ListGroup>
                    <ListGroupItem>
                        <p> {dishComments.comment} </p>
                        <span> {dishComments.author} {dishComments.date} </span>
                    </ListGroupItem>
                </ListGroup>
            )
        } else{
            return(
                <div></div>
            )
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
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;