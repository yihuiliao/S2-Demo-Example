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
    <div className={style({...vstack(16)})}>
      <div className={style({...hstack(0), justifyContent: 'space-between'})}>
        <div className={style({...hstack(16), alignItems: 'center'})}>
          <ActionButton aria-label="Chevron Left"><ChevronLeft /></ActionButton>
          <h1 className={style({font: "heading-lg", margin: 0})}>May '24 Spring Sale</h1>
        </div>
        <ButtonGroup>
          <Button variant="secondary" fillStyle="outline" aria-label="More"><More /></Button>
          <Button variant="secondary" fillStyle="outline" aria-label="Edit"><Edit /></Button>
          <Button aria-label="Add"><Add /></Button>
        </ButtonGroup>
      </div>
      <div className={style({...hstack(16), overflowX: 'auto'})}>
        <TopCard icon={<Lightbulb styles={iconStyle({color: 'white'})} />} background="orange" title="Learn how to use Data Collaboration" description="Find tutorials to help you learn basics, refine your skills, or get inspired" />
        <TopCard icon={<Briefcase styles={iconStyle({color: 'white'})} />} background="fuchsia" title="All your projects in one place" description="Never lose track of your progress, each project has a home page where you can see the key details." />
        <TopCard icon={<Globe styles={iconStyle({color: 'white'})} />} background="green" title="Connect with Publishers" description="Find new publishers to collaborate by exploring a catalog of Publishers ready-to-connect." />
        <TopCard icon={<Prototyping styles={iconStyle({color: 'white'})} />} background="indigo" title="Collaborate to get the most" description="Find tutorials to help you learn basics, refine your skills, or get inspired" />     
      </div>
    </div>
  );
} 
interface TopCardProps {
  icon: React.ReactNode,
  background: 'orange' | 'fuchsia' | 'green' | 'indigo',
  title: string,
  description: string
}

const containerStyles = style({
  backgroundColor: 'layer-1',
  padding: 24,
  width: 340,
  borderRadius: 'default',
  flexShrink: 0,
  ...vstack(16)
})


function TopCard(props: TopCardProps) {
  return (
    <div className={containerStyles}> 
      <div className={style({
        backgroundColor: {
          background: {
            orange: 'orange-600',
            fuchsia: 'fuchsia',
            green: 'green-600',
            indigo: 'indigo-600'
          }
        },
        size: 48, 
        borderRadius: 'default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      })({background: props.background})}>
        {props.icon}
      </div>
      <div className={style({...vstack(8)})}>
        <h4 className={style({font: "heading-xs", margin: 0})}>{props.title}</h4>
        <p className={style({font: "body-sm", margin: 0})}>{props.description}</p>
        <Link isQuiet isStandalone>Learn more</Link>
      </div>
    </div>
  )
}