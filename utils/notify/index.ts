import { Notify as notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/src/notiflix.css';
import './index.css';

notify.init({
  ID: 'notiflix_notify_' + new Date().getTime()
});

export default notify;