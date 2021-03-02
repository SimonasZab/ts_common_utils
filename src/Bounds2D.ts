export default class Bounds2D{
	left:number
	top:number
	right:number
	bottom:number

	constructor(left:number, top:number, right:number, bottom:number){
		this.left = left
		this.top = top
		this.right = right
		this.bottom = bottom
	}

	get x(){
		return this.left
	}

	get y(){
		return this.top
	}

	get width(){
		return this.right - this.left
	}

	get height(){
		return this.bottom - this.top
	}

	get centerX(){
		return this.left + (this.right - this.left) / 2
	}

	get centerY(){
		return this.top + (this.bottom - this.top) / 2
	}

	get heightToWidthRatio(){
		return this.height / this.width
	}

	get widthToHeightRatio(){
		return this.width / this.height
	}

	get longerSide(){
		return this.width > this.height ? this.width : this.height
	}

	get shorterSide(){
		return this.width > this.height ? this.height : this.width
	}

	combine(other:Bounds2D){
		if(other.left < this.left){
			this.left = other.left
		}
		if(other.right > this.right){
			this.right = other.right
		}
		if(other.top < this.top){
			this.top = other.top
		}
		if(other.bottom > this.bottom){
			this.bottom = other.bottom
		}
	}
}