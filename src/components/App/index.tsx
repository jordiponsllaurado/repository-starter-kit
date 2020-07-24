import * as React from 'react';

import '../../styles/App.scss';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  const { userName, lang } = props;
  return (
    <h1>
      Hi {userName}! Welcome to a {lang} project!
    </h1>
  );
};
