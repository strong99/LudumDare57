export type BoundingBoxEdge = {
    a: {
        x: number;
        y: number;
    },
    b: {
        x: number;
        y: number;
    }
};

export type ObjectSpawner = {
    id: string;
    creatureId: string;
    position: {
        x: number;
        y: number;
    };
    startAmount: number;
    maxAmount: number;
    respawnInterval: number;
};

export type StaticObject = {
    id: string;
    image: string;
    layer: "back" | "middle" | "front";
    position: {
        x: number;
        y: number;
    };
    locked?: boolean;
}

export type UpgradeItem = {
    id: string;
    name: string;
    description: string;
    improves: string;
    cost: number[];
};

export type Item = {
    id: string;
    name: string;
    description: string;
    cost: number;
    depth: number;
};

export type Creature = {
    id: string;
    speed: number;
    range: number;
};

export type Scene = {
    id: string;
    events: Array<SceneEntry>
}

export type SceneEntry = {
    type: 'dialog';
    actor: string;
    text: string;
    duration: number;
} | {
    type: 'credits'
}