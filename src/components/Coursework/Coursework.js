import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './CourseworkStyles';

const Coursework = () =>  (
  <Section id="Course">
    <SectionDivider />
    <br />
    <SectionTitle>CourseWork</SectionTitle>
    <SectionText>
      My course have been a mix of software, mechanical and electrical. I have mentioned a few of them below
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>University Courses</ListTitle>
          <ListParagraph>
            Mechanics & Oscillations<br /> 
            Thermodynamics <br />
            Electrical Sciences<br />
            Computer Programming <br />
            Linear Algebra <br />
            Permutations & Statistics <br />
            Engineering Graphics <br />
            Mechanics of Solids <br />
            Material Sciences <br />
            Transport Phenomena <br />
            Mechanism of Machines <br />
            Design Of Machine Elements <br />
            Casting, Forming & Welding <br />
            Sustainable Manufacturing <br />
            Numerical Fluid Flow & Heat Transfer <br />
            Digital Image Processesing <br />
            Machine Drawing <br />
            Non-Traditional Processes <br />
            Automation & Control <br />
            Non-Conventional Manufacturing Processes <br />
            CAD/CAM <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Online Courses</ListTitle>
          <ListParagraph>
            Robotics Specialization(Coursera) <br />
            Self Driving Car Specialization(Coursera) <br />
            Deep Learning Specialization(Coursera) <br />
            Engineering Simulations(Ansys)(EDx) <br />
            Computational Fluid Dynamics(NPTEL) <br />
            Automotive Systems(NPTEL) <br />
            Mapping(Univeristy of Freiburg) <br />
            Control Engineering <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>

);

export default Coursework;
