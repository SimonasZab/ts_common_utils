import RectTransform2D from "./RectTransform2D"
import Transform2D from "./Transform2D"

export default {
	clearColor(ctx:CanvasRenderingContext2D, color:string){
		ctx.fillStyle = color
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
	},
	translate(context:CanvasRenderingContext2D, transform:Transform2D){
		context.translate(transform.pos.x, transform.pos.y)
		context.rotate(transform.radians())
		context.scale(transform.scale.x, transform.scale.y)
	},
	drawImage(context:CanvasRenderingContext2D, img:HTMLImageElement, transform:RectTransform2D, path2D:Path2D | null = null){
		context.save()
		if(path2D)
			context.clip(path2D)
		this.translate(context, transform)
		context.drawImage(img, -transform.width/2, -transform.height/2, transform.width, transform.height)
		context.restore()
	},
	getDOMMatrix(context:CanvasRenderingContext2D, transform:Transform2D):DOMMatrix{
		context.save()
		this.translate(context, transform)
		var matrix:DOMMatrix = context.getTransform()
		context.restore()
		return matrix
	}
}