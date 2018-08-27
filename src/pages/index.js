import React from "react"
import styled, { injectGlobal } from "styled-components";
import Link from "gatsby-link";
import Typography from '@material-ui/core/Typography';

injectGlobal`
    body{
        font-family: 'typeface-roboto';
    }
    a{
        text-decoration: none;
    }
`;

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const LinkSite = styled.a`
    margin-right: 2%;
    margin-bottom: 5px;
`
const LinkContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Separate = styled.div`
    background-color: grey;
    opacity: 0.7;
    height: 2px;
    width: 500px;
    border-radius: 90px;
    margin-bottom: 5px;
`

const Name = styled.div`
    margin-bottom: 5px;
`

export default () => <div>
    <Container>
        <Name>
            <Typography variant="display2">
                <div>Santiago Serrano Márquez</div>
            </Typography>
        </Name>
        <Separate>
        </Separate>
        <LinkContainer>
            <LinkSite href="https://www.facebook.com/" target="blank">
                <Typography variant="display1">
                    <div>Facebook</div>
                </Typography>
            </LinkSite>
            <LinkSite href="https://www.instagram.com/santiago.sm_/?hl=es-la" target="blank">
                <Typography variant="display1">
                        <div>Instagram</div> 
                </Typography>
            </LinkSite>
            <LinkSite href="https://github.com/StgoSm" target="blank">
                <Typography variant="display1">
                    <div>Github</div>
                </Typography>
            </LinkSite>
            <LinkSite href="https://twitter.com/stgo_sm" target="blank">
                <Typography variant="display1">
                    <div>Twitter</div>
                </Typography>
            </LinkSite>
        </LinkContainer>
    </Container>
</div>
