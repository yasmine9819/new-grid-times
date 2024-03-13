import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupMain>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroupMain>
        <Logo />
        <SubscribeWrapper>
          <SubscribeButton>Subscribe</SubscribeButton>
          <Sublink>Already a subscriber?</Sublink>

        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media (${QUERIES.desktopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;
const ActionGroupMain = styled.div`
  display: none;
  
  @media (${QUERIES.desktopAndUp}) {
    display: flex;
    gap: 24px;

    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */
    svg {
      display: block;
    }
    
  }
`;

const SubscribeButton = styled(Button)`

`;
const Sublink = styled.a`
  font-size: 0.8rem;
  align-self: center;
`;


const SubscribeWrapper = styled.div`
    display: none;
    @media (${QUERIES.desktopAndUp}) {
      display: flex;
      flex-direction: column;
      justify-self:end;
      gap: 8px;
    }

`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (${QUERIES.desktopAndUp}) {
    // justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

export default Header;
