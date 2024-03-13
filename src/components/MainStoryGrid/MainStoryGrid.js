import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper>
              <SecondaryStory key={story.id} {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper>
             <OpinionStory key={story.id} {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const SecondaryStoryWrapper = styled.div`
&:not(:first-of-type){
  border-top: 1px solid var(--color-gray-300);
  padding-top: 16px;
  padding-bottom: 16px;
}  
`;
const OpinionStoryWrapper = styled(SecondaryStoryWrapper)`
  
  @media (${QUERIES.tabletOnly}) {
   width:172px;
    &:not(:first-of-type){
      border-top: none;
    } 
  };
`;


const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media (${QUERIES.tabletAndUp}) {
    gap: 16px;
    grid-template-columns: 2fr 1.5fr 1fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
  };
  @media (${QUERIES.tabletOnly}) {
    gap: 16px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    'main-story secondary-stories'
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  };
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media (${QUERIES.desktopAndUp}) {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media (${QUERIES.desktopAndUp}) {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionList = styled(StoryList)`
@media (${QUERIES.tabletOnly}) {
  flex-direction: row;
  justify-content: space-between;

  
}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media (${QUERIES.tabletAndUp}) {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    
  }
`;

export default MainStoryGrid;
