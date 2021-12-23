const center2 = {
 x: 0,
 y: 0,
 z: 0,
};

type Point2 = typeof center2;

// Later
const unit: Point2 = {
 x: center2.x + 1,
 y: center2.y + 1,
 z: center2.z + 1
}


// use it inline
const unit2: typeof center2 = {
  x: center2.x + 1,
  y: center2.y + 1,
  z: center2.z + 1,
}