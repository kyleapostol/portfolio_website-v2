import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Fullstack Developer providing an end-to-end service, and involved in projects that engage with databases and building user-facing websites.
    </SectionText>
    <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>     {/* more projects */}
  </LeftSection>
</Section>
);

export default Hero;