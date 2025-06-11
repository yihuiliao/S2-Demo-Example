import {Avatar, AvatarGroup, ActionButton, Button, ButtonGroup, Link, Tabs, TabList, TabPanel, Tab, Text} from '@react-spectrum/s2'
import ChevronLeft from '@react-spectrum/s2/icons/ChevronLeft';
import More from '@react-spectrum/s2/icons/More';
import Edit from '@react-spectrum/s2/icons/Edit';
import Add from '@react-spectrum/s2/icons/Add';
import Lightbulb from '@react-spectrum/s2/icons/Lightbulb';
import Briefcase from '@react-spectrum/s2/icons/Briefcase';
import Globe from '@react-spectrum/s2/icons/GlobeGrid';
import Prototyping from '@react-spectrum/s2/icons/Prototyping';
import {iconStyle, baseColor, style} from '@react-spectrum/s2/style' with {type: 'macro'};
import {container, hstack, vstack} from './macroComplete' with {type: 'macro'};
import React from 'react';

import {Button as RACButton} from 'react-aria-components';

export function S2Components() {
  return (
    <div className={style({...vstack(8), ...container({variant: "elevated"}), padding: 24})}>
      <div className={style({...hstack(0), justifyContent: 'space-between'})}>
        <div className={style({...hstack(16), alignItems: 'center'})}>
          <ActionButton><ChevronLeft /></ActionButton>
          <h1 className={style({font: "heading-lg", margin: 0})}>May '24 Spring Sale</h1>
        </div>
        <ButtonGroup>
          <Button variant="secondary"><More /></Button>
          <Button variant="secondary"><Edit /></Button>
          <Button><Add /></Button>
        </ButtonGroup>
      </div>
      <Tabs aria-label="May Sale Options">
        <TabList>
          <Tab id="project">Project</Tab>
          <Tab id="connections">Connections</Tab>
        </TabList>
        <TabPanel id="project">
          <div className={style({overflowX: 'auto', ...hstack(8)})}>
            <TopCard icon={<Lightbulb styles={iconStyle({color: 'white'})}/>} iconColor="orange" title="Learn how to use Data Collaboration" description="Find tutorials to help you learn basics, refine your skills, or get inspired" />
            <TopCard icon={<Briefcase styles={iconStyle({color: 'white'})} />} iconColor="fuchsia" title="All your projects in one place" description="Never lose track of your progress, each project has a home page where you can see the key details." />
            <TopCard icon={<Globe styles={iconStyle({color: 'white'})} />} iconColor="green" title="Connect with Publishers" description="Find new publishers to collaborate by exploring a catalog of Publishers ready-to-connect." />
            <TopCard icon={<Prototyping styles={iconStyle({color: 'white'})} />} iconColor="indigo" title="Collaborate to get the most" description="Find tutorials to help you learn basics, refine your skills, or get inspired" />     
          </div>
        </TabPanel>
        <TabPanel id="connections">
          Random Text
        </TabPanel>
      </Tabs>
      <CustomButton>Hello</CustomButton>
      <CustomButton isSubtle>Subtle</CustomButton>
    </div>
  );
}

interface CustomButtonProps {
  children: React.ReactNode,
  isSubtle?: boolean
}

const buttonStyles = style({
  borderRadius: 'pill',
  color: {
    default: 'gray-25',
    isSubtle: 'neutral'
  },
  backgroundColor: {
    default: baseColor('green'),
    isSubtle: baseColor('green-200')
  },
  width: 'min',
  paddingY: 4,
  paddingX: 12,
  borderStyle: 'solid',
  borderColor: {
    default: baseColor('green-900'),
    isSubtle: baseColor('green-200')
  }
})

function CustomButton(props: CustomButtonProps) {
  let {
    children,
    isSubtle
  } = props;

  return (
    <RACButton className={(renderProps) => buttonStyles({...renderProps, isSubtle})}>
      {children}
    </RACButton>
  )
}

interface TopCardProps {
  icon: React.ReactNode,
  iconColor: string,
  title: string,
  description: string
}
function TopCard(props: TopCardProps) {
  return (
    <div className={style({width: 340, ...container(), ...vstack(16), flexShrink: 0})}>
      <div className={style({
        backgroundColor: {
          iconColor: {
            orange: 'orange-600',
            fuchsia: 'fuchsia-1000',
            green: 'green-600',
            indigo: 'indigo-600'
          }
        },
        size: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'default'
      })({iconColor: props.iconColor})}>
        {props.icon}
      </div>
      <div className={style({...vstack(8)})}>
        <h4 className={style({font: "heading-sm", margin: 0})}>{props.title}</h4>
        <p className={style({font: 'body', margin: 0})}>{props.description}</p>
        <Link isQuiet isStandalone>Learn more</Link>
      </div>
    </div>
  )
}

// const SRC_URL_1 =
//   'https://mir-s3-cdn-cf.behance.net/project_modules/disp/690bc6105945313.5f84bfc9de488.png';
// const SRC_URL_2 = 'https://i.imgur.com/xIe7Wlb.png';

// function Avatars() {
//   return (
//     <AvatarGroup aria-label="Online users">
//       <Avatar alt="default adobe" src={SRC_URL_1} />
//       <Avatar alt="default adobe" src={SRC_URL_1} />
//       <Avatar alt="default adobe" src={SRC_URL_1} />
//       <Avatar alt="design provided" src={SRC_URL_2} />
//     </AvatarGroup>
//     )
// }
