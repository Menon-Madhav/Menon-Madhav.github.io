import React from 'react';
import Image from 'next/image'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, 
        I'm Madhav Menon
      </SectionTitle>
      <SectionText>
        Pre-Final year student looking for thesis/internship opportunities
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/drive/folders/1fGiloZ7V1G0T6JiHvrAD4-V0itsHavba?usp=sharing'}>My Résumé</Button>
    </LeftSection>
  </Section>
);

export default Hero;