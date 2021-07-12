class Rope {
	constructor(body1,body2, pointA, pointB){
		this.pointA = pointA
		this.pointB = pointB
		var options= {
			bodyA:body1,
			bodyB:body2,
			pointA:{x:this.pointA, y:this.pointB},
		}

		//rope constraint created here
		this.rope = Constraint.create(options);
		World.add(world,this.rope);
	}



	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		line(pointA.x+this.pointA, pointA.y+this.pointB, pointB.x, pointB.y);
		strokeWeight(2);

	}
}