/* eslint-disable @typescript-eslint/camelcase */
/**
 * Every icon used in the application must be individually imported
 */
import { logger } from '@jetstream/shared/client-logger';
import { IconType } from '@jetstream/icon-factory';
import classNames from 'classnames';
import React from 'react';
import { StandardIconObj, UtilityIconObj } from './icon-types';
import StandardIcon_Activations from './icons/standard/Activations';
import StandardIcon_Entity from './icons/standard/Entity';
import StandardIcon_DataStreams from './icons/standard/DataStreams';
import StandardIcon_Opportunity from './icons/standard/Opportunity';
import StandardIcon_Record from './icons/standard/Record';
import StandardIcon_RelatedList from './icons/standard/RelatedList';
import UtilityIcon_Add from './icons/utility/Add';
import UtilityIcon_ApexPlugin from './icons/utility/ApexPlugin';
import UtilityIcon_Arrowdown from './icons/utility/Arrowdown';
import UtilityIcon_Arrowup from './icons/utility/Arrowup';
import UtilityIcon_Back from './icons/utility/Back';
import UtilityIcon_Chart from './icons/utility/Chart';
import UtilityIcon_Check from './icons/utility/Check';
import UtilityIcon_Chevrondown from './icons/utility/Chevrondown';
import UtilityIcon_Chevronright from './icons/utility/Chevronright';
import UtilityIcon_Clear from './icons/utility/Clear';
import UtilityIcon_Close from './icons/utility/Close';
import UtilityIcon_CollapseAll from './icons/utility/CollapseAll';
import UtilityIcon_ComponentCustomization from './icons/utility/ComponentCustomization';
import UtilityIcon_Copy from './icons/utility/Copy';
import UtilityIcon_Dash from './icons/utility/Dash';
import UtilityIcon_DateTime from './icons/utility/DateTime';
import UtilityIcon_Delete from './icons/utility/Delete';
import UtilityIcon_Down from './icons/utility/Down';
import UtilityIcon_Download from './icons/utility/Download';
import UtilityIcon_Error from './icons/utility/Error';
import UtilityIcon_Event from './icons/utility/Event';
import UtilityIcon_ExpandAll from './icons/utility/ExpandAll';
import UtilityIcon_Fallback from './icons/utility/Fallback';
import UtilityIcon_Favorite from './icons/utility/Favorite';
import UtilityIcon_Forward from './icons/utility/Forward';
import UtilityIcon_Help from './icons/utility/Help';
import UtilityIcon_Info from './icons/utility/Info';
import UtilityIcon_Left from './icons/utility/Left';
import UtilityIcon_Logout from './icons/utility/Logout';
import UtilityIcon_Moneybag from './icons/utility/Moneybag';
import UtilityIcon_NewWindow from './icons/utility/NewWindow';
import UtilityIcon_Notification from './icons/utility/Notification';
import UtilityIcon_Play from './icons/utility/Play';
import UtilityIcon_Refresh from './icons/utility/Refresh';
import UtilityIcon_Right from './icons/utility/Right';
import UtilityIcon_Search from './icons/utility/Search';
import UtilityIcon_Settings from './icons/utility/Settings';
import UtilityIcon_Success from './icons/utility/Success';
import UtilityIcon_Switch from './icons/utility/Switch';
import UtilityIcon_Sync from './icons/utility/Sync';
import UtilityIcon_Undo from './icons/utility/Undo';
import UtilityIcon_Upload from './icons/utility/Upload';
import UtilityIcon_Warning from './icons/utility/Warning';

const standardIcons: StandardIconObj = {
  activations: StandardIcon_Activations,
  entity: StandardIcon_Entity,
  opportunity: StandardIcon_Opportunity,
  record: StandardIcon_Record,
  related_list: StandardIcon_RelatedList,
  data_streams: StandardIcon_DataStreams,
};

const utilityIcons: UtilityIconObj = {
  add: UtilityIcon_Add,
  apex_plugin: UtilityIcon_ApexPlugin,
  arrowdown: UtilityIcon_Arrowdown,
  arrowup: UtilityIcon_Arrowup,
  back: UtilityIcon_Back,
  chart: UtilityIcon_Chart,
  check: UtilityIcon_Check,
  chevrondown: UtilityIcon_Chevrondown,
  chevronright: UtilityIcon_Chevronright,
  clear: UtilityIcon_Clear,
  close: UtilityIcon_Close,
  collapse_all: UtilityIcon_CollapseAll,
  component_customization: UtilityIcon_ComponentCustomization,
  copy: UtilityIcon_Copy,
  dash: UtilityIcon_Dash,
  date_time: UtilityIcon_DateTime,
  delete: UtilityIcon_Delete,
  down: UtilityIcon_Down,
  download: UtilityIcon_Download,
  error: UtilityIcon_Error,
  event: UtilityIcon_Event,
  expand_all: UtilityIcon_ExpandAll,
  fallback: UtilityIcon_Fallback,
  favorite: UtilityIcon_Favorite,
  forward: UtilityIcon_Forward,
  help: UtilityIcon_Help,
  info: UtilityIcon_Info,
  left: UtilityIcon_Left,
  logout: UtilityIcon_Logout,
  moneybag: UtilityIcon_Moneybag,
  new_window: UtilityIcon_NewWindow,
  notification: UtilityIcon_Notification,
  play: UtilityIcon_Play,
  refresh: UtilityIcon_Refresh,
  right: UtilityIcon_Right,
  search: UtilityIcon_Search,
  settings: UtilityIcon_Settings,
  success: UtilityIcon_Success,
  switch: UtilityIcon_Switch,
  sync: UtilityIcon_Sync,
  undo: UtilityIcon_Undo,
  upload: UtilityIcon_Upload,
  warning: UtilityIcon_Warning,
};

export function getIcon(type: IconType, icon: string, className?: string) {
  let found = false;
  let IconOrFallback = UtilityIcon_Fallback;
  switch (type) {
    case 'standard':
      if (standardIcons[icon]) {
        IconOrFallback = standardIcons[icon];
        found = true;
      }
      break;
    case 'utility':
      if (utilityIcons[icon]) {
        IconOrFallback = utilityIcons[icon];
        found = true;
      }
      break;
    default:
      break;
  }
  if (!found) {
    logger.warn('[ICON NOT FOUND]', `icon ${type}-${icon} not found, providing fallback`);
  }
  return <IconOrFallback className={classNames(className || 'slds-icon')} />;
}