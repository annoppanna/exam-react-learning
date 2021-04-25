import React from 'react';


const ApprovalCard = (props) =>{
    console.log(props.children);
    return (
        <div className="ui cards">
              <div className="card"> 
                    <div className="content">{props.children}</div>

                    <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">Approve</div>
                                <div className="ui basic red button">Reject</div>
                            </div>
                    </div>   
              </div> 
        </div>
    );

    }

export default ApprovalCard;


{/* <div className="ui container comments">
                            <CommentDetail 
                                author="sam" 
                                timeAgo="Today at 4:45PM" 
                                post="hi there" 
                                avatar = {faker.image.avatar()}
                            />
                            <CommentDetail 
                                author="Alex" 
                                timeAgo="Today at 2:00AM" 
                                post="hi there" 
                                avatar = {faker.image.avatar()}
                            />
                            <CommentDetail 
                                author="Jane" 
                                timeAgo="Yesterday at 5:00PM" 
                                post="hi there" 
                                avatar = {faker.image.avatar()}
                            /> 
                    </div> */}