import Point2D from './Point2D'

export default {
	lerp(start:number, end:number, progress:number):number{
		return start + (progress * (end-start));
	},
	interpolation: {
		easeInOutQuart(x:number):number {
			return x < 0.5
				? 8 * x * x * x * x
				: 1 - Math.pow(-2 * x + 2, 4) / 2;
		},
		easeInOutSine(x:number):number {
			return -(Math.cos(Math.PI * x) - 1) / 2;
		},
		easeOutExpo(x:number):number {
			return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
		}
	},
	getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	},
	loopValueInRange(val:number, range:number):number {
		val = val % range
		if(val < 0)
			val += range
		return val
	},
	loopValueInRange2(val:number, from:number, to:number):number {
		//if(val >= from && val <= to)
		//	return val

		val = val - from;
		val %= to - from;
		if(val < 0)
			val += to - from;
		val += from;
		return val;
	},
	dist(posA:Point2D, posB:Point2D):number {
		var a = posA.x - posB.x;
		var b = posA.y - posB.y;

		return Math.sqrt( a*a + b*b );
	},
	dist1D(p1:number, p2:number):number {
		return Math.abs(p1 - p2);
	},
	multiplyVectorToMatrix(pointX:number, pointY:number, matrix:DOMMatrix):Point2D {
		return new Point2D(
			matrix.a * pointX + matrix.c * pointY + matrix.e,
			matrix.b * pointX + matrix.d * pointY + matrix.f
		)
	},
	pointIsInTriangle(p:Point2D, p0:Point2D, p1:Point2D, p2:Point2D):boolean {
		var dX = p.x-p2.x
		var dY = p.y-p2.y
		var dX21 = p2.x-p1.x
		var dY12 = p1.y-p2.y
		var D = dY12*(p0.x-p2.x) + dX21*(p0.y-p2.y)
		var s = dY12*dX + dX21*dY
		var t = (p2.y-p0.y)*dX + (p0.x-p2.x)*dY
		if (D<0) return s<=0 && t<=0 && s+t>=D
		return s>=0 && t>=0 && s+t<=D
	},
	//first box is fitted inside second
	fillBoxToAnotherBox(w1:number, h1:number, w2:number, h2:number){
		var scale = this.getScaleToFillBox(w1, h1, w2, h2)
		return {width:w1 * scale, height:h1 * scale}
	},
	getScaleToFillBox(w1:number, h1:number, w2:number, h2:number){
		var scale = w2 / w1
		var ratio = h1 / w1
		var nh = w2 * ratio
		if(nh < h2){
			scale *= h2 / nh
		}
		return scale
	},
	fitBoxToAnotherBox(w1:number, h1:number, w2:number, h2:number){
		var scale = this.getScaleToFitBox(w1, h1, w2, h2)
		return {width:w1 * scale, height:h1 * scale}
	},
	getScaleToFitBox(w1:number, h1:number, w2:number, h2:number){
		var scale = w2 / w1
		var ratio = h1 / w1
		var nh = w2 * ratio
		if(nh > h2){
			scale /= nh / h2
		}
		return scale
	},
	normalizedValueToIndex(normalizedValue:number, indexesCnt:number, offset:number = 0){
		if(normalizedValue >= 1.0){
			normalizedValue = normalizedValue - (1 / indexesCnt)
		}
		var index = Math.floor(normalizedValue * indexesCnt)
		return offset + index
	}
}