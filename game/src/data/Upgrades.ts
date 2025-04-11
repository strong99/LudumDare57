import { UpgradeItem } from "../models/Types";

const upgrades: Array<UpgradeItem> = [{
    id: 'maxDepth',
    name: 'depth upgrade',
    description: 'improves depth',
    cost: [150, 300, 450, 600],
    improves: 'maxDepth'
}, {
    id: 'speed',
    name: 'speed upgrade',
    description: 'improves speed',
    cost: [100, 250, 550, 800],
    improves: 'maxSpeed'
}, {
    id: 'radarRadius',
    name: 'Radar radius',
    description: 'improves radar radius',
    cost: [80, 160, 320, 600],
    improves: 'radarRadius'
}, {
    id: 'lightStrength',
    name: 'Light strength',
    description: 'improves submarine lights',
    cost: [40, 60, 80, 120],
    improves: 'lightStrength'
}];

export default upgrades;