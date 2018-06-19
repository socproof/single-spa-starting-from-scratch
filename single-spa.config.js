
import { registerApplication, start } from 'single-spa';

registerApplication('navBar', () => import('./src/navBar/navBar.app.js').then(mod => mod.navBar), () => true);
registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('angular1', () => import('./src/angular1/angular1.app.js'), pathPrefix('/angular1'));

start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}