import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowDown19,
  faArrowDownAZ,
  faArrowDownWideShort,
  faArrowLeft,
  faBackwardFast,
  faBackwardStep,
  faBars,
  faCirclePlus,
  faEye,
  faMoneyBillWave,
  faNewspaper,
  faPencil,
  faRotateLeft,
  faSquareXmark,
  faStar,
  faTrashCan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCircleLeft,
} from '@fortawesome/free-regular-svg-icons'

export function useIcons() {
  // prepare icons
  library.add(
    faArrowDown19,
    faArrowDownAZ,
    faArrowDownWideShort,
    faArrowLeft,
    faBackwardFast,
    faBackwardStep,
    faBars,
    faCircleLeft,
    faCirclePlus,
    faEye,
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
