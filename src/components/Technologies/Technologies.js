import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with various technologies under Robotics, Engineering Simulations & Mechatronics.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages, OS</ListTitle>
          <ListParagraph>
            Python <br /> 
            C++ <br />
            Matlab <br />
            Linux <br />
            Go <br />
            JavaScript <br />
            Arduino <br />  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Softwares</ListTitle>
          <ListParagraph>
            Autodesk AutoCAD <br /> 
            Autodesk Inventor<br />
            Autodesj Fusion360 <br />
            Ansys <br />
            Matlab & Simulink <br />
            ROS & Gazebo <br />
            LtSpice 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            OpenCV <br /> 
            OpenFoam<br />
            Gmsh <br />
            Pytorch <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
