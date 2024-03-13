import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from "../../constants";


const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0,1fr);
  @media (${QUERIES.desktopAndUp}) {
   grid-template-columns: repeat(2,minmax(0,1fr));
   gap:16px;
  }
`;

const MarketsSection = styled.section`
border-right: 1px solid var(--color-gray-300);
padding-right: 16px;
 
`;

const MarketCards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
gap: 16px;
`;

const SportsSection = styled.section`
  max-width: 100%;
`;


const SportsStories = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
gap: 16px;
@media (${QUERIES.tabletAndUp}) {
  display: flex;
  max-width: 100%;
  // grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
  overflow: auto;  
}
`;

export default SpecialtyStoryGrid;
