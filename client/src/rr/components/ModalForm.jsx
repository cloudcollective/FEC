import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
text-align: center;
width: 100%;
`;


const SubmitButton = styled.button`
margin-left: 12.5%;
margin-top: 15px;
width: 75%;
`;

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <StyledForm>
        Write Your Review!
        <form style={{width: "100%"}}>
          <br />
          <input style={{width: "100%"}} placeholder="Review Title" />
          <br />
          <br />
          <textarea style={{width: "100%"}} placeholder="Your review goes Here!" rows="10" cols="50" />
          <br />
          <br />
          <input style={{width: "100%"}} placeholder="Username" />
          <br />
          <br />
          <input style={{width: "100%"}} placeholder="Email" />
          <br />
          <SubmitButton>Submit</SubmitButton>
          <br />
          <div onClick={ this.props.close }>Close</div>
        </form>
        <br />
      </StyledForm>
    );
  }
}
export default ModalForm;
