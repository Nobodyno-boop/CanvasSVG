let canvas =  document.getElementById("canvas")
let ctx = canvas.getContext("2d");
let data = "M-200,681.1c-17.8-7.7-34.8-15.2-53-23.1c0.7,2.3,1.1,3.7,1.6,5.1c4.7,13.5,9.6,26.9,14.1,40.5c0.9,2.6,0.9,5.9,0.2,8.5c-2.6,9.6-5.6,19.1-8.7,29.2c10.3,0.7,20.2,1.3,30.1,1.9c8.5,0.5,11.9,4.1,13.6,12.8c1.9,10.2-1.8,18.9-5.8,28.5c-4.6-4.8-8.7-9.5-13.3-13.7c-1.8-1.6-4.4-2.6-6.8-3.3c-2.9-0.8-5.9-0.8-8.9-1.1c-5.1-0.5-10.8-2.6-15.2-1.1c-7.9,2.6-15,7.5-23.1,11.7c5.5,2.8,10.4,5.3,15.9,8.1c-2.4,2.1-4.4,4-6.9,6.1c-10.8-8.7-21.6-17.4-32.5-26.1c-18.2-14.6-36.3-29.3-54.5-43.9c-2.1-1.7-4.8-3-7.4-3.8c-14.5-4.4-29-8.6-43.6-12.6c-4.8-1.3-9.8-1.7-14.7-2.3c-3.6-0.4-7.3-0.5-10.9-0.7c-1.8-5.4-0.3-9,3.9-12.4c7.8-6.4,7.6-6.6,3.2-15.5c-5.7-11.3-11.3-22.6-17-33.9c-1.5-3-0.1-13.8,2.2-16c0.8-0.7,2.4-0.8,3.7-0.9c3.6-0.1,7.2,0,11.5,0c-1.7-6.2-3.2-11.6-4.7-17c-3.2-11-6-22.2-9.6-33c-5-15.2-3.5-31-5-46.5c-0.6-6.1-0.6-12.3-0.9-19.1c8.1,0.5,16-1,24,2.5c34.8,15.4,69.9,30.3,104.9,45.2c2.6,1.1,6.2,1.2,8.9,0.3c17.5-5.4,34.6-11.9,52.3-16.6c7.3-1.9,15.4-0.5,23.2-0.4c0.9,0,2,1.6,2.5,2.7c9.1,19.9,21.9,37.6,34,55.8c1.7,2.5,2.4,5.8,3,8.8c2.2,10.6,4.2,21.2,6.2,31.8c0.2,1.3,0.5,2.7,0,3.8z"

let p = new SVG.GPoint2D(data);
p.initPath();


canvas.addEventListener("click", (e) => {
	p.moveTo(e.clientX, e.clientY);
})

function draw(){
	ctx.clearRect(0,0, 600, 600);
	ctx.fill(p.compil())
	ctx.stroke();
	window.requestAnimationFrame(draw);
}

draw()