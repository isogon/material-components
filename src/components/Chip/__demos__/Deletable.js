import React from 'react'
import { action } from '@storybook/addon-actions'

import Chip from '..'

/* eslint-disable no-alert */
export default () => (
  <Chip>
    Basic Chip
    <Chip.Icon right name="cancel" onClick={action('delete-click')} />
  </Chip>
)
