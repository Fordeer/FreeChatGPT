import React from 'react';

import FordeerAdv from '@components/FordeerAdv';
import Account from './Account';
import ClearConversation from './ClearConversation';
import Api from './Api';
import Me from './Me';
import AboutMenu from '@components/AboutMenu';
import ImportExportChat from '@components/ImportExportChat';
import SettingsMenu from '@components/SettingsMenu';

const MenuOptions = () => {
  return (
    <>
      <FordeerAdv />
      <AboutMenu />
      <ClearConversation />
      <ImportExportChat />
      <SettingsMenu />
      <Me />
    </>
  );
};

export default MenuOptions;
