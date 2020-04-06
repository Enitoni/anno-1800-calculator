const fs = require("fs-extra")

async function main() {
  await fs.remove("docs")
  await fs.copy("build/public", "docs")
}

main()
