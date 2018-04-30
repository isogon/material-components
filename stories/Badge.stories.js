import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import IconOverIcon from '../src/components/Badge/__demos__/IconOverIcon.js'
import IconOverText from '../src/components/Badge/__demos__/IconOverText.js'
import NumberOverIcon from '../src/components/Badge/__demos__/NumberOverIcon.js'
import NumberOverText from '../src/components/Badge/__demos__/NumberOverText.js'
import TextOverButton from '../src/components/Badge/__demos__/TextOverButton.js'

storiesOf('Badge', module)
  .addDecorator(wrapStory())
  .add('Icon Over Icon', () => <IconOverIcon />)
  .add('Icon Over Text', () => <IconOverText />)
  .add('Number Over Icon', () => <NumberOverIcon />)
  .add('Number Over Text', () => <NumberOverText />)
  .add('Text Over Button', () => <TextOverButton />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Icon Over Icon (inverse)', () => <IconOverIcon inverse />)
  .add('Icon Over Text (inverse)', () => <IconOverText inverse />)
  .add('Number Over Icon (inverse)', () => <NumberOverIcon inverse />)
  .add('Number Over Text (inverse)', () => <NumberOverText inverse />)
  .add('Text Over Button (inverse)', () => <TextOverButton inverse />)