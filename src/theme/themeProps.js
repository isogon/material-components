import set from 'lodash/fp/set'

import lookupValue from './lookupValue'

const themeKeys = [
  'preferredFont',
  'primary',
  'primaryLight',
  'primaryDark',
  'secondary',
  'secondaryLight',
  'secondaryDark',
  'text.dark.primary',
  'text.dark.secondary',
  'text.dark.hint',
  'text.dark.disabled',
  'text.dark.icon',
  'text.light.primary',
  'text.light.secondary',
  'text.light.hint',
  'text.light.disabled',
  'text.light.icon',
  'textPrimaryOnPrimary',
  'textSecondaryOnPrimary',
  'textHintOnPrimary',
  'textDisabledOnPrimary',
  'textIconOnPrimary',
  'textPrimaryOnPrimaryLight',
  'textSecondaryOnPrimaryLight',
  'textHintOnPrimaryLight',
  'textDisabledOnPrimaryLight',
  'textIconOnPrimaryLight',
  'textPrimaryOnPrimaryDark',
  'textSecondaryOnPrimaryDark',
  'textHintOnPrimaryDark',
  'textDisabledOnPrimaryDark',
  'textIconOnPrimaryDark',
  'textPrimaryOnSecondary',
  'textSecondaryOnSecondary',
  'textHintOnSecondary',
  'textDisabledOnSecondary',
  'textIconOnSecondary',
  'textPrimaryOnSecondaryLight',
  'textSecondaryOnSecondaryLight',
  'textHintOnSecondaryLight',
  'textDisabledOnSecondaryLight',
  'textIconOnSecondaryLight',
  'textPrimaryOnSecondaryDark',
  'textSecondaryOnSecondaryDark',
  'textHintOnSecondaryDark',
  'textDisabledOnSecondaryDark',
  'textIconOnSecondaryDark',
  'textPrimaryOnBackground',
  'textSecondaryOnBackground',
  'textHintOnBackground',
  'textDisabledOnBackground',
  'textIconOnBackground',
  'textPrimaryOnLight',
  'textSecondaryOnLight',
  'textHintOnLight',
  'textDisabledOnLight',
  'textIconOnLight',
  'textPrimaryOnDark',
  'textSecondaryOnDark',
  'textHintOnDark',
  'textDisabledOnDark',
  'textIconOnDark',
]

export default themeKeys.reduce((aggr, k) => set(k, lookupValue(k), aggr), {})
