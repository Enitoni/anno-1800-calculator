import { observable, computed } from "mobx"
import { InitializableStore } from "../../state/types/InitializableStore"

export type ModalItem = {
  key: string
  visible?: boolean
  render: () => JSX.Element
}

export class ModalStore implements InitializableStore {
  public init() {}

  @observable public items: ModalItem[] = []

  public spawn(item: ModalItem) {
    const existingItem = this.getByKey(item.key)

    if (existingItem) {
      existingItem.visible = true
      return
    }

    const safeItem = {
      visible: true,
      ...item,
    }

    this.items = [...this.items, safeItem]
  }

  public dismiss(key: string, destroy = false) {
    if (destroy) {
      this.items = this.items.filter((x) => x.key !== key)
      return
    }

    const item = this.getByKey(key)

    if (item) {
      item.visible = false
    }
  }

  private getByKey(key: string) {
    return this.items.find((x) => x.key === key)
  }

  @computed
  public get hasItems() {
    return this.items.length > 0
  }
}

export const modalStore = () => new ModalStore()
