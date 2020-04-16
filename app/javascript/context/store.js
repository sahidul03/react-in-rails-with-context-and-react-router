import React, { useState } from "react";

const InitialState = {
  tasks: [
    { title: 'Prepare a demo for react-rails', status: 0 },
    { title: 'Pleas use react context', status: 1 },
    { title: 'Show an example of react-router', status: 0 },
  ]
};
const { Provider: AppProvider, Consumer: AppConsumer } = React.createContext(InitialState);

export { AppProvider, AppConsumer, InitialState }