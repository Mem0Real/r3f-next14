import tunnel from 'tunnel-rat'

export const r3f = tunnel()

class BuildingData {
  constructor(title, description) {
    this.title = title
    this.description = description
  }
}

const buildingText1 = new BuildingData(
  'Building 1',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lorem, suscipit id erat nec, porttitor egestas risus. Nunc lobortis ullamcorper arcu at tempor.',
)

const buildingText2 = new BuildingData(
  'Building 2',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lorem, suscipit id erat nec, porttitor egestas risus. Nunc lobortis ullamcorper arcu at tempor.',
)
const buildingText3 = new BuildingData(
  'Building 3',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lorem, suscipit id erat nec, porttitor egestas risus. Nunc lobortis ullamcorper arcu at tempor.',
)

export { buildingText1, buildingText2, buildingText3 }
