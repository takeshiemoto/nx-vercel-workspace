import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MessageProps {}

const StyledMessage = styled.div`
  color: pink;
`;

export const Message = (props: MessageProps) => {
  return (
    <StyledMessage>
      <h1>Welcome to message!</h1>
    </StyledMessage>
  );
};

export default Message;
