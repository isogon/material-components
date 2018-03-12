import { setDisplayName } from 'recompose';
import styled from 'styled-components';

import { getters as g } from '../../util';
import { typoButton } from '../../mixins';

export const SnackbarAction = setDisplayName('SnackbarAction')(styled.button`
  background: transparent;
  border: none;
  color: ${g.snackbarActionColor};
  float: right;
  text-transform: uppercase;
  padding: 14px 24px 14px 12px;
  ${typoButton()}
  overflow: hidden;
  outline: none;
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  align-self: center;
  flex-shrink: 0;
  font-weight: 600;
  line-height: inherit;

  &::-moz-focus-inner {
    border: 0;
  }
  &:not([aria-hidden]) {
    opacity: 1;
    pointer-events: auto;
  }
`);
