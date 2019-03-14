import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    // componentDidMount() {
    //     console.log('Dishdetail Component componentDidMount is invoked');
    // }
    // componentDidUpdate(){
    //     console.log('Dishdetail Component componentDidUpdate is invoked');
    // }
    
    function RenderComments({comments}){
        
        if(comments != null){
            // map comments into a variable
            let commentsArr = comments.map((comment) => {
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
                                        <ListGroup>{commentsArr}</ListGroup>
                                    </div>;

            return listOfComments;
            
        } else{
            return(
                <div></div>
            );
        }
    }

    function RenderDish({dish}){
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

    const DishDetail = (props) => {
        // console.log(props.dish.comments);
        if( props.dish !== undefined ){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 m-1">
                            <RenderDish dish = {props.dish} />
                        </div>
                        <div className="col-md-5 col-sm-12 m-1">
                            <RenderComments comments = {props.comments} />
                        </div>
                    </div>
                </div>
            );
        } else{
            return(
                <div></div>
            );
        }
        
    }

export default DishDetail;