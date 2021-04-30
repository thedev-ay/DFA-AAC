
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import duration from 'dayjs/plugin/duration.js';

dayjs.extend(localizedFormat);
dayjs.extend(duration);

export default dayjs;