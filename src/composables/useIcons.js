import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowDown19,
  faArrowDownAZ,
  faBackwardFast,
  faBackwardStep,
  faBars,
  faCirclePlus,
  faMoneyBillWave,
  faNewspaper,
  faPencil,
  faRotateLeft,
  faSquareXmark,
  faStar,
  faTrashCan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

export function useIcons() {
  // prepare icons
  library.add(
    faArrowDown19,
    faArrowDownAZ,
    faBackwardFast,
    faBackwardStep,
    faBars,
    faCirclePlus,
    faMoneyBillWave,
    faNewspaper,
    faPencil,
    faRotateLeft,
    faSquareXmark,
    faStar,
    faTrashCan,
    faXmark
  )
}
