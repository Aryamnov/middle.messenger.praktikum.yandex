import { compile } from 'handlebars';
import main from './index.hbs?raw';
import login from './pages/login/index.hbs?raw';
import chats from './pages/chats/index.hbs?raw';
import serverError from './pages/server-error/index.hbs?raw';
import settings from './pages/settings/index.hbs?raw';
import signin from './pages/signin/index.hbs?raw';
import notFound from './pages/404/index.hbs?raw';
import './pages/404/not-found.scss';
import './pages/chats/chats.scss';
import './pages/login/login.scss';
import './pages/server-error/server-error.scss';
import './pages/settings/settings.scss';
import './pages/signin/signin.scss';

const url = window.location.pathname;
let template;

switch (url) {
    case '/':
        template = compile(main); break;
    case '/login':
        template = compile(login); break;
    case '/chats':
        template = compile(chats); break;
    case '/error':
        template = compile(serverError); break;
    case '/settings':
        template = compile(settings); break;
    case '/signin':
        template = compile(signin); break;
    default:
        template = compile(notFound);
}

const app = document.getElementById('app');

app.innerHTML = template({});
