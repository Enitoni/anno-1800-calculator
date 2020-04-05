export const loadFromFile = () => {
  const input = document.createElement("input")
  input.type = "file"

  document.body.appendChild(input)
  input.click()
  document.body.removeChild(input)

  const reader = new FileReader()

  return new Promise<string | undefined>((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    input.onchange = () => {
      const file = input.files ? input.files[0] : undefined

      if (!file) {
        return resolve()
      }

      reader.readAsText(file)
    }
  })
}
