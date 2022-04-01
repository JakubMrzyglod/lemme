import { AppBarBox } from './app-bar-box';
import { AppBarItem } from './app-bar-item';

export const AppBar = () => (
  <AppBarBox>
    <AppBarItem
      {...{ text: 'aaaaaaa', onClick: () => console.log('clicked') }}
    />
    <AppBarItem {...{ text: 'aaaaaaa' }} />
  </AppBarBox>
);
