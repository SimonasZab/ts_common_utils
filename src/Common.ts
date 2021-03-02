export class AnimationData{
	currentFrame:number | undefined = undefined

	stop(){
		if(!this.currentFrame)
			return

		window.cancelAnimationFrame(this.currentFrame)
		this.currentFrame = undefined
	}
}

export default {
	framedAnimation(frame:(dt:number) => boolean, animationData:AnimationData | null = null){
		let previousFrameTime:number
		var frameNr = window.requestAnimationFrame(step)
		if(animationData)
			animationData.currentFrame = frameNr
		
		function step(timestamp:number){
			if(previousFrameTime === undefined)
				previousFrameTime = timestamp
			const dt:number = (timestamp - previousFrameTime) * 0.001
			previousFrameTime = timestamp
			if(frame(dt))
				return
			frameNr = window.requestAnimationFrame(step)
			if(animationData)
				animationData.currentFrame = frameNr
		}
	}
}