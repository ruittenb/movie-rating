import { library } from '@fortawesome/fontawesome-svg-core'
import { faNewspaper, faPencil, faStar } from '@fortawesome/free-solid-svg-icons'

export function useIcons() {
  // prepare icons
  library.add(faNewspaper, faPencil, faStar)
}
