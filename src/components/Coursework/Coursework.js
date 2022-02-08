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
            Electrical Sciences<br />
            Computer Programming <br />
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
            Self Driving Car Specialization(Coursera)
            Deep Learning Specialization(Coursera)
            Engineering Simulations(Ansys)(EDx)
            Computational Fluid Dynamics(NPTEL)
            Automotive Systems(NPTEL)
            Mapping(Univeristy of Freiburg)
            <li>Autodesk</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>

);

export default Coursework;
