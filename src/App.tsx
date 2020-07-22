import * as React from "react";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName}! Welcome to a {props.lang} project!
  </h1>
);