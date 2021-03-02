import Point2D from "./Point2D"

export default class{
	pos:Point2D
	rotation:number//in degrees*
	scale:Point2D
	
	constructor(x:number = 0, y:number = 0, rotation = 0, scaleX:number = 1, scaleY:number = 1){
		this.pos = new Point2D(x, y)
		this.rotation = rotation
		this.scale = new Point2D(scaleX, scaleY)
	}
	radians():number{
		return this.rotation * Math.PI / 180
	}
	setScale(scale:number){
		this.scale.x = scale
		this.scale.y = scale
	}
	multiplyPoint2D(point:Point2D){
		return this.multiplyPoint(point.x, point.y)
	}
	multiplyPoint(x:number, y:number){
		var abc = this.getMatrixABC()
		return new Point2D(
			abc[0] * x + abc[2] * y + abc[4],
			abc[1] * x + abc[3] * y + abc[5]
		)
	}
	toDOMMatrix():DOMMatrix{
		var matrix:DOMMatrix = new DOMMatrix()
		var abc = this.getMatrixABC()
		matrix.a = abc[0]
		matrix.b = abc[1]
		matrix.c = abc[2]
		matrix.d = abc[3]
		matrix.e = abc[4]
		matrix.f = abc[5]
		return matrix
	}
	getMatrixABC(){
		var radians:number = this.radians()
		return [
			Math.cos(radians) * this.scale.x,
			Math.sin(radians) * this.scale.x,
			-Math.sin(radians) * this.scale.y,
			Math.cos(radians) * this.scale.y,
			this.pos.x,
			this.pos.y
		]
	}
}