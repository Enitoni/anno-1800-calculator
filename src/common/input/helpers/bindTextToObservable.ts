/** Returns props to bind a text input to an observable string */
export const bindTextToObservable = <K extends string>(
  obj: Record<K, string>,
  key: K,
) => {
  return {
    value: obj[key],
    onInput: (text: string) => {
      obj[key] = text
    },
  }
}
