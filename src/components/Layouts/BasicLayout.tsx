import React from 'react';
import {Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

interface BasicLayoutProps {
  title: string;
  subtitle?: string;
  body: React.ReactElement;
}

const HeaderText = styled("h1")`
  margin-bottom: 0;
`;

const HeaderRow = styled(Row)`
  margin-bottom: 1rem;
`;

const Subtitle = styled.p.attrs(props => ({
  className: 'text-muted'
}))`
  margin-bottom: 0;
`;

const BasicLayout = ({title, subtitle, body}: BasicLayoutProps) => {
  return (
    <>
      <HeaderRow>
        <Col xs={12}>
          <HeaderText>{title}</HeaderText>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Col>
      </HeaderRow>
      <Row>
        {body}
      </Row>
    </>
  );
};

export default BasicLayout;