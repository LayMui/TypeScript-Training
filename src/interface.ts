interface iPoint2D {
 x: number,
 y: number
}

interface iPoint3D extends iPoint2D {
 z: number,
}

export const point1: Point3D = {
 x: 0,
 y: 0,
 z: 0
}