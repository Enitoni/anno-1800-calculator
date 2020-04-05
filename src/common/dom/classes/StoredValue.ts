export class StoredValue<V> {
  constructor(private name: string, private defaultValue: V) {}

  public save(newValue: V) {
    localStorage.setItem(this.name, JSON.stringify(newValue))
  }

  public restore() {
    const existing = localStorage.getItem(this.name)

    if (!existing) return this.defaultValue
    return JSON.parse(existing) as V
  }
}
