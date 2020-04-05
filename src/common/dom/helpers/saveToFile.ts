export const saveToFile = (name: string, data: any) => {
  const blob = new Blob([data])

  const anchor = document.createElement("a")
  const url = URL.createObjectURL(blob)

  anchor.href = url
  anchor.download = name

  document.body.appendChild(anchor)
  anchor.click()

  document.body.removeChild(anchor)
  URL.revokeObjectURL(url)
}
