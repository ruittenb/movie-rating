import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCirclePlus, faMoneyBillWave, faNewspaper, faPencil, faRotateLeft, faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export function useIcons() {
  // prepare icons
  library.add(faBars, faCirclePlus, faMoneyBillWave, faNewspaper, faPencil, faRotateLeft, faStar, faTrashCan)
}
