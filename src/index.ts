import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-fairyfloss-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-fairyfloss-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-fairyfloss-theme is activated!');
    const style = 'jupyterlab-fairyfloss-theme/index.css';

    manager.register({
      name: 'jupyterlab-fairyfloss-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
