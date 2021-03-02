export default class Timer{
	#currentTime:number
	#totalTime:number

	constructor(time:number) {
		this.#totalTime = time;
		this.reset();
	}
	reset(){
		this.#currentTime = 0
	}
	update(dt:number):number{
		this.#currentTime += dt
		if(this.#currentTime >= this.#totalTime)
			this.#currentTime = this.#totalTime
		return this.#currentTime / this.#totalTime
	}
	get ended():boolean{
		return this.#currentTime === this.#totalTime
	}
	set progress(progress:number){
		this.#currentTime = this.#totalTime * progress
	}
}