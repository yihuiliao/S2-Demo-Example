import './App.css';
import {ActionButton, ButtonGroup, Button, Link, Tabs, Tab, TabList, TabPanel, Text} from '@react-spectrum/s2';
import Add from '@react-spectrum/s2/icons/Add';
import {baseColor, iconStyle, style} from '@react-spectrum/s2/style' with {type: 'macro'};
import Briefcase from '@react-spectrum/s2/icons/Briefcase';
import {Button as RACButton} from 'react-aria-components';
import ChevronLeft from '@react-spectrum/s2/icons/ChevronLeft';
import {container, hstack, vstack,} from './macro' with {type: 'macro'};
import Edit from '@react-spectrum/s2/icons/Edit';
import Globe from '@react-spectrum/s2/icons/GlobeGrid';
import Lightbulb from '@react-spectrum/s2/icons/Lightbulb';
import More from '@react-spectrum/s2/icons/More';
import Play from '@react-spectrum/s2/icons/Play';
import Prototyping from '@react-spectrum/s2/icons/Prototyping';
import '@react-spectrum/s2/page.css'
import { S2Components } from './AppComplete';


export function App() {
  return (
    <>
     <S2Components />
    </>
  );
}
