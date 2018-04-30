import React from 'react'
import styled from 'styled-components'

import Fill from '../../Fill'
import { shadow2dp } from '../../../mixins'
import Button from '../../Button'
import Card from '..'
import Icon from '../../Icon'

// prettier-ignore
const EventCard = styled(Card)`
  ${shadow2dp()}
  width: 256px;
  height: 256px;
  background: #3e4eb8;
  align-self: flex-start;
`

const EventInfo = styled(Card.TitleText)`
  margin-top: 0;
  align-self: flex-start;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`

const EventActions = styled(Card.Actions)`
  border-color: rgba(255, 255, 255, 0.2);
  display: flex;
  box-sizing: border-box;
  align-items: center;
`

const EventIcon = styled(Icon)`
  padding-right: 10px;
  color: #fff;
`

const WhiteButton = styled(Button)`
  color: #fff;
`

export default () => (
  <EventCard>
    <Card.Title expand>
      <EventInfo>
        Featured event:<br />
        May 24, 2016<br />
        7-11pm
      </EventInfo>
    </Card.Title>
    <EventActions border>
      <WhiteButton colored>Add to calenar</WhiteButton>
      <Fill />
      <EventIcon name="event" size="24" />
    </EventActions>
  </EventCard>
)