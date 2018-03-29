import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Checkbox from '../src/components/Checkbox/__demos__/Checkbox.js'

storiesOf('Checkbox', module)
  .addDecorator(wrapStory())
  .add('Checkbox', () => <Checkbox />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Checkbox (inverse)', () => <Checkbox inverse />)
