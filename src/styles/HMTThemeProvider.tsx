import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { ReactNode } from 'react';
import DesignTokens from './HMTDesignTokens';
import HMTThemedComponents from './HMTThemedComponents';

type HMTThemeProviderAlias = {
  children: ReactNode;
};

export default function HMTThemeProvider({ children }: HMTThemeProviderAlias) {
  // user defiend color palette (theme) object construction
  const designTokens = DesignTokens();

  // create a predefined theme object; components set as {}
  const appTheme = createTheme(designTokens);

  // merge predefined mui components into appTheme
  const theme = createTheme(deepmerge(appTheme, HMTThemedComponents(appTheme)));

  // note: ThemeProvider provides theme prop down the React tree via context
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
