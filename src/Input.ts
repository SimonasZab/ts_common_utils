import Point2D from './Point2D'

export default {
	getPointerPosition(e:Event, relativeToElement:Element | null = null):Point2D | null {
		let pointerPos:Point2D | null = null
		if(e instanceof MouseEvent){
			pointerPos = new Point2D(e.clientX , e.clientY)
		}else if(e instanceof TouchEvent){
			let touch:Touch = e.touches[0] || e.changedTouches[0]
			pointerPos = new Point2D(touch.clientX , touch.clientY)
		}
		if(pointerPos == null)
			return null
		if(relativeToElement){
			let rect:DOMRect = relativeToElement.getBoundingClientRect()
			pointerPos.x -= rect.left
			pointerPos.y -= rect.top
		}
		return pointerPos
	}
}
