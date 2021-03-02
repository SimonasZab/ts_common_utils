export default class Point2D{
	x:number
	y:number

	constructor(x:number, y:number) {
		this.x = x
		this.y = y
	}

	copy():Point2D{
		return new Point2D(this.x, this.y)
	}
	set(x:number, y:number){
		this.x = x
		this.y = y
	}
	add(point:Point2D):Point2D{
		var cp = this.copy()
		cp.x += point.x
		cp.y += point.y
		return cp
	}
	substract(point:Point2D):Point2D{
		var cp = this.copy()
		cp.x -= point.x
		cp.y -= point.y
		return cp
	}
}