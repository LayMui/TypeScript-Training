type CircleConfig = {
 color?: string, 
 radius?: number,
}

class Circle {
 private config: Required<CircleConfig>;

 constructor(config: CircleConfig) {
  this.config = {

   // ensure they have default values
   // Double question marks(??) or nullish coalescing operator helps us to assign default values to null or undefined variables i
   color: config.color ?? 'green',
   radius: config.radius ?? 0,
  }
 }
}