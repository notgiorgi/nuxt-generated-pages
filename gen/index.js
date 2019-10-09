const fs = require('fs')
const path = require('path')
const mustache = require('mustache')

main()
async function main() {
  // comes from request
  const masterPages = [
    {
      id: 1,
      name: 'Default',
      section_ids: [1, 2, 4]
    },
    {
      id: 2,
      name: 'Product',
      section_ids: [1, 3, 2]
    },
    {
      id: 4,
      name: 'Foobar',
      section_ids: [1, 2, 3]
    }
  ]

  const template = await fs.readFileSync(
    path.join(__dirname, './MasterPageTemplate.mustache')
  )

  if (!fs.existsSync(path.join(__dirname, '../pages/MasterPage'))) {
    fs.mkdirSync(path.join(__dirname, '../pages/MasterPage'))
  }

  masterPages.map((masterPage) => {
    const rendered = mustache.render(template.toString(), {
      sections: getMasterPageSections(masterPage)
    })
    fs.writeFileSync(
      path.join(__dirname, `../pages/MasterPage/${masterPage.id}.vue`),
      rendered
    )
  })
}

function getMasterPageSections(masterPage) {
  const sectionsMap = [
    {
      id: 1,
      name: 'Header'
    },
    {
      id: 2,
      name: 'Footer'
    },
    {
      id: 3,
      name: 'Content'
    },
    {
      id: 4,
      name: 'Slider'
    }
  ]

  return masterPage.section_ids.map((id) =>
    sectionsMap.find((section) => section.id === id)
  )
}
