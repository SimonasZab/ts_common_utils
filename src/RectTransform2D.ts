import MathUtils from "./MathUtils";
import Point2D from "./Point2D";
import Transform2D from "./Transform2D";

export default class extends Transform2D{
	width:number
	height:number

	constructor(width:number, height:number, x:number = 0, y:number = 0, rotation = 0, scaleX:number = 1, scaleY:number = 1){
		super(x, y, rotation, scaleX, scaleY)
		this.width = width
		this.height = height
	}

	pointIsInside(p:Point2D){
		var halfWidth:number = this.width / 2
		var halfHeight:number = this.height / 2
		var topLeftPoint:Point2D = this.multiplyPoint(-halfWidth, -halfHeight)
		var topRightPoint:Point2D = this.multiplyPoint(halfWidth, -halfHeight)
		var bottomLeftPoint:Point2D = this.multiplyPoint(-halfWidth, halfHeight)
		var bottomRightPoint:Point2D = this.multiplyPoint(halfWidth, halfHeight)
		return MathUtils.pointIsInTriangle(p, topLeftPoint, topRightPoint, bottomLeftPoint)
			|| MathUtils.pointIsInTriangle(p, bottomRightPoint, topRightPoint, bottomLeftPoint)
	}
}