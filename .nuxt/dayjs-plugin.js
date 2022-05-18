import dayjs from 'dayjs'

import 'dayjs/locale/es'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('es')

dayjs.tz.setDefault('Europe/Madrid')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
