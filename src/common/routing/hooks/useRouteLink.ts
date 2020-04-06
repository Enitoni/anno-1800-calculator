import { useObserver } from "mobx-react-lite"
import { useStores } from "../../state/hooks/useStores"
import UrlPattern from "url-pattern"

export const useRouteLink = (to: string, activeTo = to) => {
  const { routingStore } = useStores()

  const safeTo = `${__webpack_public_path__}/${to}`
  const safeActiveTo = `${__webpack_public_path__}/${activeTo}`

  const click = (event: React.MouseEvent) => {
    event.preventDefault()
    routingStore.push(safeTo)
  }

  return useObserver(() => {
    const { pathname, hash } = routingStore.location

    const hasHash = activeTo.includes("#")
    const safePathName = hasHash ? `${pathname}${hash}` : pathname

    const pattern = new UrlPattern(safeActiveTo)
    const active = pattern.match(safePathName) !== null

    return [active, click] as const
  })
}
