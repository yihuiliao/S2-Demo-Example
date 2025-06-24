import './App.css';
import {ActionButton, ButtonGroup, Button, Link} from '@react-spectrum/s2';
import Add from '@react-spectrum/s2/icons/Add';
import {iconStyle, style} from '@react-spectrum/s2/style' with {type: 'macro'};
import Briefcase from '@react-spectrum/s2/icons/Briefcase';
import ChevronLeft from '@react-spectrum/s2/icons/ChevronLeft';
import {hstack, vstack} from './macro' with {type: 'macro'};
import Edit from '@react-spectrum/s2/icons/Edit';
import Globe from '@react-spectrum/s2/icons/GlobeGrid';
import Lightbulb from '@react-spectrum/s2/icons/Lightbulb';
import More from '@react-spectrum/s2/icons/More';
import Prototyping from '@react-spectrum/s2/icons/Prototyping';
import '@react-spectrum/s2/page.css'

export function App() {
  return ( 
    <>
      <div>
        <div>
        </div>
        {/* <ButtonGroup>
          <Button><More /></Button>
          <Button><Edit /></Button>
          <Button><Add /></Button>
        </ButtonGroup> */}
      </div>
      <div>
        {/* <TopCard icon={<Lightbulb />} background="orange" title="Learn how to use Data Collaboration" description="Find tutorials to help you learn basics, refine your skills, or get inspired" />
        <TopCard icon={<Briefcase />} background="fuchsia" title="All your projects in one place" description="Never lose track of your progress, each project has a home page where you can see the key details." />
        <TopCard icon={<Globe />} background="green" title="Connect with Publishers" description="Find new publishers to collaborate by exploring a catalog of Publishers ready-to-connect." />
        <TopCard icon={<Prototyping />} background="indigo" title="Collaborate to get the most" description="Find tutorials to help you learn basics, refine your skills, or get inspired" />      */}
      </div>
    </>
  );
} 

interface TopCardProps {
  icon: React.ReactNode,
  background: 'orange' | 'fuchsia' | 'green' | 'indigo',
  title: string,
  description: string
}


function TopCard(props: TopCardProps) {
  return (
    <div> 
      <div>
        {props.icon}
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}