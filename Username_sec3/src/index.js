import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="sam" 
                    timeAgo="Today at 4:45PM" 
                    post="hi there" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    post="hi there" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    post="hi there" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
        
    );
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);

    // <img alt="avatar" src={faker.image.image()} />
    // <img alt="avatar" src='https://source.unsplash.com/random' />