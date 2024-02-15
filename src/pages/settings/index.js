import { compile } from 'handlebars';
import './settings.scss';
import template from './index.hbs?raw';

const app = document.getElementById('app');

const navigate = compile(template);

app.innerHTML = navigate({});
