import React from 'react';
import { 
    ListGroup, 
    ListGroupItem, 
    ListGroupItemText, 
    ListGroupItemHeading
} from 'reactstrap';

function User(props) {
    const { user } = props
    if (!user) {
        return <h3>Working hard and fetching the team&apos;s details...</h3>
      }
    
      return (
        <ListGroup style={{width:'50%'}}>
            <ListGroupItem>
                <ListGroupItemHeading>
                    {user.first_name} {user.last_name}
                </ListGroupItemHeading>
                <ListGroupItemText>
                        ~Email: {user.email} <br></br>
                        ~Terms agreement on file? True
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
      )
}

export default User;
