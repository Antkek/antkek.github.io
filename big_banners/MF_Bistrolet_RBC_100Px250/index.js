(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[246,246,211,150],[0,246,244,175],[0,0,308,244]]}
];


// symbols:



(lib.COSMO = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.trails1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.trails_long = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.COSMO();
	this.instance.parent = this;
	this.instance.setTransform(-129.45,0.75,1,1,-35.7305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.4,-122.4,258.9,244.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.trails1();
	this.instance.parent = this;
	this.instance.setTransform(0,141.85,0.9984,0.9984,-35.6159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.8,283.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,185,86,0.988)","rgba(0,185,86,0)"],[0,1],-148.5,128.2,183.3,-30.3).s().p("Aj2FVQgRgIgEAFQAAgBgHAAQgGAAgBgCQgCgSAHgRQAGgOAHgEIgHACQgJACAGgWQAJgkAAgEQgBgfgHhkQgGhOACgjQA1hFBFg5QBxhcDFhrQBPACAdAkQARAVABAnQgUBHgKBmQgGA7gGBtQgHBagNArQgSA4gkAMQhgApgugHQgmgGgOgqIhCARQg8AQg6AdQgGADgHAAQgKAAgLgFg");
	this.shape.setTransform(177.0028,48.9904);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(148.8,14.4,56.39999999999998,69.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.trails_long();
	this.instance.parent = this;
	this.instance.setTransform(-51.9,177.1,0.9984,0.9984,-35.6159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-2,391.9,377.2);


(lib.slogan_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AygDjIAAj8MAlBAAAIAAD8g");
	var mask_graphics_1 = new cjs.Graphics().p("AylDjIAAj8MAlLAAAIAAD8g");
	var mask_graphics_2 = new cjs.Graphics().p("AyrDjIAAj8MAlXAAAIAAD8g");
	var mask_graphics_3 = new cjs.Graphics().p("AywDjIAAj8MAlhAAAIAAD8g");
	var mask_graphics_4 = new cjs.Graphics().p("Ay1DjIAAj8MAlrAAAIAAD8g");
	var mask_graphics_5 = new cjs.Graphics().p("Ay7DjIAAj8MAl3AAAIAAD8g");
	var mask_graphics_6 = new cjs.Graphics().p("AzADjIAAj8MAmBAAAIAAD8g");
	var mask_graphics_7 = new cjs.Graphics().p("AzGDjIAAj8MAmNAAAIAAD8g");
	var mask_graphics_8 = new cjs.Graphics().p("AzLDjIAAj8MAmXAAAIAAD8g");
	var mask_graphics_9 = new cjs.Graphics().p("AzQDjIAAj8MAmhAAAIAAD8g");
	var mask_graphics_10 = new cjs.Graphics().p("AzWDjIAAj8MAmtAAAIAAD8g");
	var mask_graphics_11 = new cjs.Graphics().p("AzbDjIAAj8MAm3AAAIAAD8g");
	var mask_graphics_12 = new cjs.Graphics().p("AzgDjIAAj8MAnBAAAIAAD8g");
	var mask_graphics_13 = new cjs.Graphics().p("AzmDjIAAj8MAnNAAAIAAD8g");
	var mask_graphics_14 = new cjs.Graphics().p("AzrDjIAAj8MAnXAAAIAAD8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-102.7,y:22.675}).wait(1).to({graphics:mask_graphics_1,x:-91.2178,y:22.675}).wait(1).to({graphics:mask_graphics_2,x:-79.7357,y:22.675}).wait(1).to({graphics:mask_graphics_3,x:-68.2535,y:22.675}).wait(1).to({graphics:mask_graphics_4,x:-56.7713,y:22.675}).wait(1).to({graphics:mask_graphics_5,x:-45.2892,y:22.675}).wait(1).to({graphics:mask_graphics_6,x:-33.807,y:22.675}).wait(1).to({graphics:mask_graphics_7,x:-22.3249,y:22.675}).wait(1).to({graphics:mask_graphics_8,x:-10.8427,y:22.675}).wait(1).to({graphics:mask_graphics_9,x:0.6395,y:22.675}).wait(1).to({graphics:mask_graphics_10,x:12.1216,y:22.675}).wait(1).to({graphics:mask_graphics_11,x:23.6038,y:22.675}).wait(1).to({graphics:mask_graphics_12,x:35.0859,y:22.675}).wait(1).to({graphics:mask_graphics_13,x:46.5681,y:22.675}).wait(1).to({graphics:mask_graphics_14,x:58.0503,y:22.675}).wait(6));

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AAvA6IAAhRIgdBRIgjAAIgdhRIAABRIgsAAIAAhzIBFAAIAVBEIAYhEIBCAAIAABzg");
	this.shape.setTransform(173.15,33.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#731982").s().p("AAoA6IAAhzIAuAAIAABzgAhUA6IAAhzIAtAAIAAAkIAVAAQAaAAANAMQAKAKABARQgBAPgKALQgOAOgZAAgAgnAgIALAAQAOAAABgOQgBgNgOAAIgLAAg");
	this.shape_1.setTransform(152.9,33.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#731982").s().p("Ag6A6IAAhzIBNAAQAVAAAKALQAIAIAAALQgBAMgIAHQgJAHgOAAQAhABAAAbQAAALgIAIQgMAMgXAAgAgNAhIAMAAQAMAAAAgLQAAgMgMAAIgMAAgAgNgKIAMAAQALAAAAgLQAAgMgLAAIgMAAg");
	this.shape_2.setTransform(136.5,33.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#731982").s().p("AhCBRIAAieIAuAAIAAARQAEgIAJgGQAJgGANAAQAXAAAPARQAOAQAAAcQAAAagPARQgOARgXAAQgNAAgJgGQgKgGgDgJIAAA9gAgQgkQgGAGAAALQAAALAGAHQAGAFAJAAQAJAAAGgFQAGgIAAgKQAAgLgGgGQgGgIgJAAQgJAAgGAIg");
	this.shape_3.setTransform(122.175,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#731982").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_4.setTransform(107.275,33.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#731982").s().p("AARA6IAAhPIghAAIAABPIgtAAIAAhzIB7AAIAABzg");
	this.shape_5.setTransform(93,33.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#731982").s().p("Ag6A6IAAhzIAuAAIAAAkIAUAAQAbAAANAMQALAKgBARQABAPgLALQgOAOgaAAgAgMAgIALAAQANAAABgOQgBgNgNAAIgLAAg");
	this.shape_6.setTransform(73.9,33.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#731982").s().p("AAiBIIAAgcIhCAAIAAAcIgtAAIAAhDIANAAQANgDAAgRIAAg4IB0AAIAABMIANAAIAABDgAgHgQQAAAPgJALIAjAAIAAgyIgaAAg");
	this.shape_7.setTransform(58.475,34.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#731982").s().p("AgtBFQgQgMAAgSIAuAAQAAAMAPAAQARAAAAgTIAAgVQgKAUgZAAQgrAAAAgxIAAg/IAuAAIAAA7QAAATAPAAQARABAAgZIAAg2IAtAAIAABrQAAAcgRAPQgRANgcAAQgeAAgPgNg");
	this.shape_8.setTransform(42.975,35.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#731982").s().p("AhCBRIAAihIB3AAIAAAkIhHAAIAAAcIAlAAQAVAAAOANQANANAAAVQAAAVgNAPQgOAOgVAAgAgSAwIASAAQAIAAAFgFQAFgFAAgHQAAgIgFgFQgFgFgIAAIgSAAg");
	this.shape_9.setTransform(28.675,31.125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AygFYIAAj9MAlBAAAIAAD9g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AygFYIAAj9MAlBAAAIAAD9g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AzTFYIAAj9MAmnAAAIAAD9g");
	var mask_1_graphics_5 = new cjs.Graphics().p("A0FFYIAAj9MAoLAAAIAAD9g");
	var mask_1_graphics_6 = new cjs.Graphics().p("A04FYIAAj9MApxAAAIAAD9g");
	var mask_1_graphics_7 = new cjs.Graphics().p("A1qFYIAAj9MArVAAAIAAD9g");
	var mask_1_graphics_8 = new cjs.Graphics().p("A2dFYIAAj9MAs7AAAIAAD9g");
	var mask_1_graphics_9 = new cjs.Graphics().p("A3PFYIAAj9MAufAAAIAAD9g");
	var mask_1_graphics_10 = new cjs.Graphics().p("A4CFYIAAj9MAwFAAAIAAD9g");
	var mask_1_graphics_11 = new cjs.Graphics().p("A41FYIAAj9MAxrAAAIAAD9g");
	var mask_1_graphics_12 = new cjs.Graphics().p("A5nFYIAAj9MAzPAAAIAAD9g");
	var mask_1_graphics_13 = new cjs.Graphics().p("A6aFYIAAj9MA01AAAIAAD9g");
	var mask_1_graphics_14 = new cjs.Graphics().p("A7MFYIAAj9MA2ZAAAIAAD9g");
	var mask_1_graphics_15 = new cjs.Graphics().p("A7/FYIAAj9MA3/AAAIAAD9g");
	var mask_1_graphics_16 = new cjs.Graphics().p("A8xFYIAAj9MA5jAAAIAAD9g");
	var mask_1_graphics_17 = new cjs.Graphics().p("A9kFYIAAj9MA7JAAAIAAD9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-101.5,y:34.375}).wait(3).to({graphics:mask_1_graphics_3,x:-101.5,y:34.375}).wait(1).to({graphics:mask_1_graphics_4,x:-87.4678,y:34.375}).wait(1).to({graphics:mask_1_graphics_5,x:-73.4356,y:34.375}).wait(1).to({graphics:mask_1_graphics_6,x:-59.4034,y:34.375}).wait(1).to({graphics:mask_1_graphics_7,x:-45.3713,y:34.375}).wait(1).to({graphics:mask_1_graphics_8,x:-31.3391,y:34.375}).wait(1).to({graphics:mask_1_graphics_9,x:-17.3069,y:34.375}).wait(1).to({graphics:mask_1_graphics_10,x:-3.2747,y:34.375}).wait(1).to({graphics:mask_1_graphics_11,x:10.7575,y:34.375}).wait(1).to({graphics:mask_1_graphics_12,x:24.7897,y:34.375}).wait(1).to({graphics:mask_1_graphics_13,x:38.8218,y:34.375}).wait(1).to({graphics:mask_1_graphics_14,x:52.854,y:34.375}).wait(1).to({graphics:mask_1_graphics_15,x:66.8862,y:34.375}).wait(1).to({graphics:mask_1_graphics_16,x:80.9184,y:34.375}).wait(1).to({graphics:mask_1_graphics_17,x:94.9506,y:34.375}).wait(3));

	// 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#731982").s().p("AAuA6IAAhRIgcBRIgiAAIgehRIAABRIgrAAIAAhzIBDAAIAWBEIAYhEIBDAAIAABzg");
	this.shape_10.setTransform(248.8,57.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#731982").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQANAAAAgOQAAgNgNAAIgMAAg");
	this.shape_11.setTransform(228.55,57.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#731982").s().p("AhCBRIAAieIAuAAIAAARQAEgIAJgGQAJgGANAAQAXAAAPARQAOAQAAAcQAAAagPARQgOARgXAAQgNAAgJgGQgKgGgDgJIAAA9gAgQgkQgGAGAAALQAAALAGAHQAGAFAJAAQAJAAAGgFQAGgIAAgKQAAgLgGgGQgGgIgJAAQgJAAgGAIg");
	this.shape_12.setTransform(211.575,59.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#731982").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_13.setTransform(197.625,57.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#731982").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_14.setTransform(184.875,57.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#731982").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQAOAAgBgOQABgNgOAAIgMAAg");
	this.shape_15.setTransform(168.15,57.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#731982").s().p("AgyA8QgSgWAAgkQAAgpAXgWQAXgVApAAIAiAAIAAAjIgjAAQgtAAgBApQADgMANgIQAMgGAOAAQAbAAAOAQQAOAPAAAYQAAAZgRARQgTASgfAAQggAAgUgXgAgNAGQgGAGABALQgBALAGAHQAGAGAJAAQAJAAAHgHQAFgGAAgLQAAgKgFgHQgHgGgJAAQgJAAgGAGg");
	this.shape_16.setTransform(151.05,55.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#731982").s().p("AAuA6IAAhRIgbBRIgkAAIgdhRIAABRIgrAAIAAhzIBDAAIAWBEIAYhEIBCAAIAABzg");
	this.shape_17.setTransform(133.15,57.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#731982").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQANAAAAgOQAAgNgNAAIgMAAg");
	this.shape_18.setTransform(112.9,57.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#731982").s().p("AAuA6IAAhRIgcBRIgiAAIgehRIAABRIgrAAIAAhzIBDAAIAWBEIAYhEIBCAAIAABzg");
	this.shape_19.setTransform(92.65,57.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#731982").s().p("Ag0AsQgOgRAAgbQAAgaAOgRQAPgRAYAAQAZAAAKAVIAAgSIAtAAIAABzIgtAAIAAgRQgFAJgJAFQgJAGgMAAQgYAAgPgRgAgNgQQgFAGgBAKQABALAFAGQAGAHAIAAQALAAAFgHQAHgGAAgLQAAgKgHgGQgFgHgLAAQgIAAgGAHg");
	this.shape_20.setTransform(74.4,57.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#731982").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_21.setTransform(60.425,57.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#731982").s().p("AACBRIAEgkIgXAAIgEAkIggAAIAFgkIgTAAIAAgfIAXAAIAFgbIgVAAIAAgfIAYAAIAGgkIAeAAIgEAkIAXAAIAFgkIAfAAIgFAkIASAAIAAAfIgWAAIgEAbIATAAIAAAfIgXAAIgFAkgAgMAOIAXAAIAEgbIgXAAg");
	this.shape_22.setTransform(46.7,54.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#731982").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_23.setTransform(27.425,57.325);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(20));

	// Layer_4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AygHBIAAj8MAlBAAAIAAD8g");
	var mask_2_graphics_5 = new cjs.Graphics().p("A2yHBIAAj8MAtlAAAIAAD8g");
	var mask_2_graphics_6 = new cjs.Graphics().p("A27HBIAAj8MAt3AAAIAAD8g");
	var mask_2_graphics_7 = new cjs.Graphics().p("A3EHBIAAj8MAuJAAAIAAD8g");
	var mask_2_graphics_8 = new cjs.Graphics().p("A3MHBIAAj8MAuZAAAIAAD8g");
	var mask_2_graphics_9 = new cjs.Graphics().p("A3VHBIAAj8MAurAAAIAAD8g");
	var mask_2_graphics_10 = new cjs.Graphics().p("A3eHBIAAj8MAu9AAAIAAD8g");
	var mask_2_graphics_11 = new cjs.Graphics().p("A3nHBIAAj8MAvPAAAIAAD8g");
	var mask_2_graphics_12 = new cjs.Graphics().p("A3vHBIAAj8MAvfAAAIAAD8g");
	var mask_2_graphics_13 = new cjs.Graphics().p("A34HBIAAj8MAvxAAAIAAD8g");
	var mask_2_graphics_14 = new cjs.Graphics().p("A4BHBIAAj8MAwDAAAIAAD8g");
	var mask_2_graphics_15 = new cjs.Graphics().p("A4KHBIAAj8MAwVAAAIAAD8g");
	var mask_2_graphics_16 = new cjs.Graphics().p("A4THBIAAj8MAwnAAAIAAD8g");
	var mask_2_graphics_17 = new cjs.Graphics().p("A4bHBIAAj8MAw3AAAIAAD8g");
	var mask_2_graphics_18 = new cjs.Graphics().p("A4kHBIAAj8MAxJAAAIAAD8g");
	var mask_2_graphics_19 = new cjs.Graphics().p("A4GHBIAAj8MAxbAAAIAAD8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-102.7,y:44.925}).wait(5).to({graphics:mask_2_graphics_5,x:-130.0527,y:44.925}).wait(1).to({graphics:mask_2_graphics_6,x:-108.9027,y:44.925}).wait(1).to({graphics:mask_2_graphics_7,x:-87.7528,y:44.925}).wait(1).to({graphics:mask_2_graphics_8,x:-66.6028,y:44.925}).wait(1).to({graphics:mask_2_graphics_9,x:-45.4529,y:44.925}).wait(1).to({graphics:mask_2_graphics_10,x:-24.303,y:44.925}).wait(1).to({graphics:mask_2_graphics_11,x:-3.153,y:44.925}).wait(1).to({graphics:mask_2_graphics_12,x:17.9969,y:44.925}).wait(1).to({graphics:mask_2_graphics_13,x:39.1469,y:44.925}).wait(1).to({graphics:mask_2_graphics_14,x:60.2968,y:44.925}).wait(1).to({graphics:mask_2_graphics_15,x:81.4467,y:44.925}).wait(1).to({graphics:mask_2_graphics_16,x:102.5967,y:44.925}).wait(1).to({graphics:mask_2_graphics_17,x:123.7466,y:44.925}).wait(1).to({graphics:mask_2_graphics_18,x:144.8966,y:44.925}).wait(1).to({graphics:mask_2_graphics_19,x:162.1215,y:44.925}).wait(1));

	// 3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAvA6IAAhRIgdBRIgjAAIgdhRIAABRIgsAAIAAhzIBFAAIAVBEIAXhEIBDAAIAABzg");
	this.shape_24.setTransform(310.85,80.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgwAsQgSgRAAgbQAAgbASgRQASgRAeAAQAeAAATARQASARAAAbQAAAbgSARQgTASgeAAQgeAAgSgSgAgPgRQgGAHAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAFgGAAgLQAAgKgFgHQgGgGgKAAQgJAAgGAGg");
	this.shape_25.setTransform(293.425,80.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_26.setTransform(280.425,80.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_27.setTransform(267.575,80.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIguAAIAAhzIAuAAIAAAoIAgAAIAAgoIAuAAIAABzg");
	this.shape_28.setTransform(253.15,80.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhCBSIAAifIAuAAIAAASQAEgKAJgFQAJgHANABQAXAAAPAQQAOASAAAbQAAAagPARQgOARgXAAQgNAAgJgHQgKgFgDgIIAAA9gAgQglQgGAHAAALQAAALAGAGQAGAHAJgBQAJABAGgHQAGgGAAgLQAAgLgGgHQgGgGgJAAQgJAAgGAGg");
	this.shape_29.setTransform(238.475,82.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_30.setTransform(223.625,80.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_31.setTransform(210.775,80.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIguAAIAAhzIAuAAIAAAoIAgAAIAAgoIAuAAIAABzg");
	this.shape_32.setTransform(197.25,80.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAQA6IAAg9IggA1IAAAIIgtAAIAAhzIAtAAIAAA/IAgg1IAAgKIAuAAIAABzg");
	this.shape_33.setTransform(182.125,80.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAuA6IAAhRIgbBRIgjAAIgehRIAABRIgrAAIAAhzIBDAAIAXBEIAWhEIBEAAIAABzg");
	this.shape_34.setTransform(158.7,80.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQAOAAgBgOQABgNgOAAIgMAAg");
	this.shape_35.setTransform(138.45,80.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIgtAAIAAhzIAtAAIAAAoIAgAAIAAgoIAuAAIAABzg");
	this.shape_36.setTransform(121.05,80.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag6A6IAAhzIAuAAIAAAkIAUAAQAaAAANAMQALAKAAARQAAAPgLALQgOAOgZAAgAgMAgIAMAAQANAAgBgOQABgNgNAAIgMAAg");
	this.shape_37.setTransform(107.4,80.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhBA7IAAglIAFAAQALAAAAgTIAAg9IBzAAIAABzIguAAIAAhOIgYAAIAAAXQAAA5gxAAg");
	this.shape_38.setTransform(92.375,80.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAQA6IAAg9IggA1IAAAIIgtAAIAAhzIAtAAIAAA/IAgg1IAAgKIAuAAIAABzg");
	this.shape_39.setTransform(77.725,80.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgyA8QgSgWAAgkQAAgpAXgWQAXgVApAAIAiAAIAAAjIgjAAQgtAAgBApQADgMANgIQAMgGAOAAQAbAAAOAQQAOAPAAAYQAAAZgRARQgTASgfAAQggAAgUgXgAgNAGQgGAGABALQgBALAGAHQAGAGAJAAQAJAAAHgHQAFgGABgLQgBgKgFgHQgHgGgJAAQgJAAgGAGg");
	this.shape_40.setTransform(62.95,78.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwAsQgSgRAAgbQAAgbASgRQASgRAeAAQAeAAATARQASARAAAbQAAAbgSARQgTASgeAAQgeAAgSgSgAgPgRQgGAHAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAFgGAAgLQAAgKgFgHQgGgGgKAAQgJAAgGAGg");
	this.shape_41.setTransform(48.375,80.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAvA6IAAhRIgdBRIgjAAIgdhRIAABRIgsAAIAAhzIBFAAIAVBEIAXhEIBDAAIAABzg");
	this.shape_42.setTransform(30.95,80.425);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(20));

	// Layer_4 copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AygI2IAAj9MAlBAAAIAAD9g");
	var mask_3_graphics_5 = new cjs.Graphics().p("A2yI2IAAj9MAtlAAAIAAD9g");
	var mask_3_graphics_6 = new cjs.Graphics().p("A11I2IAAj9MArrAAAIAAD9g");
	var mask_3_graphics_7 = new cjs.Graphics().p("A04I2IAAj9MApxAAAIAAD9g");
	var mask_3_graphics_8 = new cjs.Graphics().p("Az7I2IAAj9MAn3AAAIAAD9g");
	var mask_3_graphics_9 = new cjs.Graphics().p("Ay+I2IAAj9MAl9AAAIAAD9g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AyBI2IAAj9MAkDAAAIAAD9g");
	var mask_3_graphics_11 = new cjs.Graphics().p("AxDI2IAAj9MAiHAAAIAAD9g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AwGI2IAAj9MAgNAAAIAAD9g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AvJI2IAAj9IeTAAIAAD9g");
	var mask_3_graphics_14 = new cjs.Graphics().p("AuMI2IAAj9IcZAAIAAD9g");
	var mask_3_graphics_15 = new cjs.Graphics().p("AtPI2IAAj9IafAAIAAD9g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AsSI2IAAj9IYlAAIAAD9g");
	var mask_3_graphics_17 = new cjs.Graphics().p("ArVI2IAAj9IWrAAIAAD9g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AqYI2IAAj9IUxAAIAAD9g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AozI2IAAj9IS2AAIAAD9g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:-102.7,y:56.575}).wait(5).to({graphics:mask_3_graphics_5,x:-130.0527,y:56.575}).wait(1).to({graphics:mask_3_graphics_6,x:-115.8882,y:56.575}).wait(1).to({graphics:mask_3_graphics_7,x:-101.7238,y:56.575}).wait(1).to({graphics:mask_3_graphics_8,x:-87.5594,y:56.575}).wait(1).to({graphics:mask_3_graphics_9,x:-73.395,y:56.575}).wait(1).to({graphics:mask_3_graphics_10,x:-59.2306,y:56.575}).wait(1).to({graphics:mask_3_graphics_11,x:-45.0661,y:56.575}).wait(1).to({graphics:mask_3_graphics_12,x:-30.9017,y:56.575}).wait(1).to({graphics:mask_3_graphics_13,x:-16.7373,y:56.575}).wait(1).to({graphics:mask_3_graphics_14,x:-2.5729,y:56.575}).wait(1).to({graphics:mask_3_graphics_15,x:11.5915,y:56.575}).wait(1).to({graphics:mask_3_graphics_16,x:25.7559,y:56.575}).wait(1).to({graphics:mask_3_graphics_17,x:39.9204,y:56.575}).wait(1).to({graphics:mask_3_graphics_18,x:54.0848,y:56.575}).wait(1).to({graphics:mask_3_graphics_19,x:64.3247,y:56.575}).wait(1));

	// 3 copy
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_43.setTransform(117.575,103.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIgtAAIAAhzIAtAAIAAAoIAgAAIAAgoIAvAAIAABzg");
	this.shape_44.setTransform(103.15,103.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag0AsQgOgRAAgbQAAgaAPgRQAOgRAYAAQAZAAAKAVIAAgSIAtAAIAABzIgtAAIAAgRQgFAJgJAFQgJAGgMAAQgZAAgOgRgAgNgQQgFAGgBAKQABALAFAGQAGAHAJAAQAJAAAGgHQAHgGgBgLQABgKgHgGQgGgHgJAAQgJAAgGAHg");
	this.shape_45.setTransform(87.65,103.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhCBSIAAifIAuAAIAAASQAEgKAJgFQAJgHANAAQAXAAAPARQAOASAAAbQAAAagPARQgOARgXAAQgNAAgJgHQgKgFgDgIIAAA9gAgQglQgGAHAAALQAAALAGAGQAGAHAJgBQAJABAGgHQAGgGAAgLQAAgLgGgHQgGgGgJAAQgJAAgGAGg");
	this.shape_46.setTransform(73.375,105.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_47.setTransform(59.425,103.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_48.setTransform(46.675,103.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag6A6IAAhzIBOAAQAUAAAKALQAIAIAAALQgBAMgIAHQgJAHgPAAQAiABAAAbQAAALgJAIQgLAMgYAAgAgNAhIALAAQANAAAAgLQAAgMgMAAIgMAAgAgNgKIALAAQANAAAAgLQAAgMgNAAIgLAAg");
	this.shape_49.setTransform(27.8,103.725);

	var maskedShapeInstanceList = [this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,20.1,310.40000000000003,93.1);


(lib.round_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_01, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.megafon_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9FvIAAlMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIADgBIArAAQAMAAAIgIQAJgJAAgMIAAAAIAAlwISLAAIAALdgAsZFvIAArdIF+AAIAAFgIgBACIgDABIgtAAQgLABgIAIQgIAHAAAMIAAFegAn/iUQgNANAAASQAAATANANQANANASAAQATAAANgNQAMgNAAgTQAAgSgMgNQgNgNgTAAQgSAAgNANg");
	this.shape.setTransform(52.475,42.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_face, new cjs.Rectangle(-26.9,5.6,158.8,73.5), null);


(lib.megafon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9EgIAAg/Ig2AAQh7AAg/gzQg5gsgPhcQgGgeAAgoQAAh9A8hAQA/hDCGABID1AAQCGgBA/BDQA8BAAAB9QAAAngFAfQgQBbg4AtQhAAzh7AAIg2AAIAAA/gAA+B3IA5AAQA7AAAggVQAbgTAPgpQAHgTAAgyQAAhNgigmQgfgkg4AAIhMAAgAjgiSQgiAmAABNQAAAyAIATQAPApAaATQAgAVA7AAIA5AAIAAktIhMAAQg4AAgfAkg");
	this.shape.setTransform(96.7934,10.6832,0.3548,0.3548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUEAQiLAAg/g/Qg9g9AAiDIAAgBQAAiDA9g9QA+g/CLAAIArAAQCLAAA/A/QA8A9AACDIAAABQAACDg9A9Qg/A/iLAAgAiDhwQgfAjAABNIAAABQAABPAhAkQAiAkBMAAIAnAAQBMAAAigkQAhgkAAhPIAAgBQAAhMgggkQgigmhNAAIgnAAQhPAAghAmg");
	this.shape_1.setTransform(123.5263,12.0225,0.3548,0.3548);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjcD5IAAmnQAAgeAVgVQAVgXAgAAIFuAAIAABpIkxAAQgEAAgEADQgCADAAAFIAAF9g");
	this.shape_2.setTransform(57.5102,12.0758,0.3548,0.3548);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiSD5QgfAAgWgXQgUgWgBgdIAAldQABgeAUgVQAWgXAfAAIFuAAIAABpIkxAAQgEAAgDADQgDADAAAFIAABLIE0AAIAABlIk0AAIAABZQAAAEADAEQADADAEAAIExAAIAABpg");
	this.shape_3.setTransform(38.7954,12.0758,0.3548,0.3548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrDUIijlzIAAHDIh8AAIAAnPQAAg9AjgiQAfgeAsAAQArAAAeAYQAdAWAVAwIChF2ICil2QAVgwAdgWQAegYArAAQAtAAAeAeQAjAiAAA9IAAHPIh8AAIAAnDIijFzQgjBVhJAAQhHAAgkhVg");
	this.shape_4.setTransform(14.0228,10.5591,0.3548,0.3548);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACtD/IgthpIj/AAIgtBpIiEAAIDLm6QAPghAdgSQAbgQAeAAQAgAAAaAQQAdASAPAhIDLG6gABWAyIhMi0QgCgHgIAAQgGAAgDAHIhNC0ICsAAg");
	this.shape_5.setTransform(72.9077,11.8629,0.3548,0.3548);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB+D5IAAjJIj7AAIAADJIh8AAIAAnxIB8AAIAAC8ID7AAIAAi8IB8AAIAAHxg");
	this.shape_6.setTransform(145.3986,12.0758,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon, new cjs.Rectangle(0,0,154.3,21.1), null);


(lib.slogan_07_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AygDjIAAj8MAlBAAAIAAD8g");
	var mask_4_graphics_1 = new cjs.Graphics().p("AylDjIAAj8MAlLAAAIAAD8g");
	var mask_4_graphics_2 = new cjs.Graphics().p("AyrDjIAAj8MAlXAAAIAAD8g");
	var mask_4_graphics_3 = new cjs.Graphics().p("AywDjIAAj8MAlhAAAIAAD8g");
	var mask_4_graphics_4 = new cjs.Graphics().p("Ay1DjIAAj8MAlrAAAIAAD8g");
	var mask_4_graphics_5 = new cjs.Graphics().p("Ay7DjIAAj8MAl3AAAIAAD8g");
	var mask_4_graphics_6 = new cjs.Graphics().p("AzADjIAAj8MAmBAAAIAAD8g");
	var mask_4_graphics_7 = new cjs.Graphics().p("AzGDjIAAj8MAmNAAAIAAD8g");
	var mask_4_graphics_8 = new cjs.Graphics().p("AzLDjIAAj8MAmXAAAIAAD8g");
	var mask_4_graphics_9 = new cjs.Graphics().p("AzQDjIAAj8MAmhAAAIAAD8g");
	var mask_4_graphics_10 = new cjs.Graphics().p("AzWDjIAAj8MAmtAAAIAAD8g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AzbDjIAAj8MAm3AAAIAAD8g");
	var mask_4_graphics_12 = new cjs.Graphics().p("AzgDjIAAj8MAnBAAAIAAD8g");
	var mask_4_graphics_13 = new cjs.Graphics().p("AzmDjIAAj8MAnNAAAIAAD8g");
	var mask_4_graphics_14 = new cjs.Graphics().p("AzrDjIAAj8MAnXAAAIAAD8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:-102.7,y:22.675}).wait(1).to({graphics:mask_4_graphics_1,x:-91.2178,y:22.675}).wait(1).to({graphics:mask_4_graphics_2,x:-79.7357,y:22.675}).wait(1).to({graphics:mask_4_graphics_3,x:-68.2535,y:22.675}).wait(1).to({graphics:mask_4_graphics_4,x:-56.7713,y:22.675}).wait(1).to({graphics:mask_4_graphics_5,x:-45.2892,y:22.675}).wait(1).to({graphics:mask_4_graphics_6,x:-33.807,y:22.675}).wait(1).to({graphics:mask_4_graphics_7,x:-22.3249,y:22.675}).wait(1).to({graphics:mask_4_graphics_8,x:-10.8427,y:22.675}).wait(1).to({graphics:mask_4_graphics_9,x:0.6395,y:22.675}).wait(1).to({graphics:mask_4_graphics_10,x:12.1216,y:22.675}).wait(1).to({graphics:mask_4_graphics_11,x:23.6038,y:22.675}).wait(1).to({graphics:mask_4_graphics_12,x:35.0859,y:22.675}).wait(1).to({graphics:mask_4_graphics_13,x:46.5681,y:22.675}).wait(1).to({graphics:mask_4_graphics_14,x:58.0503,y:22.675}).wait(6));

	// 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#731982").s().p("AAvA6IAAhRIgdBRIgjAAIgdhRIAABRIgsAAIAAhzIBFAAIAVBEIAYhEIBCAAIAABzg");
	this.shape_50.setTransform(173.15,33.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#731982").s().p("AAoA6IAAhzIAuAAIAABzgAhUA6IAAhzIAtAAIAAAkIAVAAQAaAAANAMQAKAKABARQgBAPgKALQgOAOgZAAgAgnAgIALAAQAOAAABgOQgBgNgOAAIgLAAg");
	this.shape_51.setTransform(152.9,33.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#731982").s().p("Ag6A6IAAhzIBNAAQAVAAAKALQAIAIAAALQgBAMgIAHQgJAHgOAAQAhABAAAbQAAALgIAIQgMAMgXAAgAgNAhIAMAAQAMAAAAgLQAAgMgMAAIgMAAgAgNgKIAMAAQALAAAAgLQAAgMgLAAIgMAAg");
	this.shape_52.setTransform(136.5,33.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#731982").s().p("AhCBRIAAieIAuAAIAAARQAEgIAJgGQAJgGANAAQAXAAAPARQAOAQAAAcQAAAagPARQgOARgXAAQgNAAgJgGQgKgGgDgJIAAA9gAgQgkQgGAGAAALQAAALAGAHQAGAFAJAAQAJAAAGgFQAGgIAAgKQAAgLgGgGQgGgIgJAAQgJAAgGAIg");
	this.shape_53.setTransform(122.175,35.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#731982").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_54.setTransform(107.275,33.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#731982").s().p("AARA6IAAhPIghAAIAABPIgtAAIAAhzIB7AAIAABzg");
	this.shape_55.setTransform(93,33.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#731982").s().p("Ag6A6IAAhzIAuAAIAAAkIAUAAQAbAAANAMQALAKgBARQABAPgLALQgOAOgaAAgAgMAgIALAAQANAAABgOQgBgNgNAAIgLAAg");
	this.shape_56.setTransform(73.9,33.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#731982").s().p("AAiBIIAAgcIhCAAIAAAcIgtAAIAAhDIANAAQANgDAAgRIAAg4IB0AAIAABMIANAAIAABDgAgHgQQAAAPgJALIAjAAIAAgyIgaAAg");
	this.shape_57.setTransform(58.475,34.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#731982").s().p("AgtBFQgQgMAAgSIAuAAQAAAMAPAAQARAAAAgTIAAgVQgKAUgZAAQgrAAAAgxIAAg/IAuAAIAAA7QAAATAPAAQARABAAgZIAAg2IAtAAIAABrQAAAcgRAPQgRANgcAAQgeAAgPgNg");
	this.shape_58.setTransform(42.975,35.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#731982").s().p("AhCBRIAAihIB3AAIAAAkIhHAAIAAAcIAlAAQAVAAAOANQANANAAAVQAAAVgNAPQgOAOgVAAgAgSAwIASAAQAIAAAFgFQAFgFAAgHQAAgIgFgFQgFgFgIAAIgSAAg");
	this.shape_59.setTransform(28.675,31.125);

	var maskedShapeInstanceList = [this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(20));

	// Layer_6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("AygFYIAAj9MAlBAAAIAAD9g");
	var mask_5_graphics_3 = new cjs.Graphics().p("AygFYIAAj9MAlBAAAIAAD9g");
	var mask_5_graphics_4 = new cjs.Graphics().p("AzTFYIAAj9MAmnAAAIAAD9g");
	var mask_5_graphics_5 = new cjs.Graphics().p("A0FFYIAAj9MAoLAAAIAAD9g");
	var mask_5_graphics_6 = new cjs.Graphics().p("A04FYIAAj9MApxAAAIAAD9g");
	var mask_5_graphics_7 = new cjs.Graphics().p("A1qFYIAAj9MArVAAAIAAD9g");
	var mask_5_graphics_8 = new cjs.Graphics().p("A2dFYIAAj9MAs7AAAIAAD9g");
	var mask_5_graphics_9 = new cjs.Graphics().p("A3PFYIAAj9MAufAAAIAAD9g");
	var mask_5_graphics_10 = new cjs.Graphics().p("A4CFYIAAj9MAwFAAAIAAD9g");
	var mask_5_graphics_11 = new cjs.Graphics().p("A41FYIAAj9MAxrAAAIAAD9g");
	var mask_5_graphics_12 = new cjs.Graphics().p("A5nFYIAAj9MAzPAAAIAAD9g");
	var mask_5_graphics_13 = new cjs.Graphics().p("A6aFYIAAj9MA01AAAIAAD9g");
	var mask_5_graphics_14 = new cjs.Graphics().p("A7MFYIAAj9MA2ZAAAIAAD9g");
	var mask_5_graphics_15 = new cjs.Graphics().p("A7/FYIAAj9MA3/AAAIAAD9g");
	var mask_5_graphics_16 = new cjs.Graphics().p("A8xFYIAAj9MA5jAAAIAAD9g");
	var mask_5_graphics_17 = new cjs.Graphics().p("A9kFYIAAj9MA7JAAAIAAD9g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:-101.5,y:34.375}).wait(3).to({graphics:mask_5_graphics_3,x:-101.5,y:34.375}).wait(1).to({graphics:mask_5_graphics_4,x:-87.4678,y:34.375}).wait(1).to({graphics:mask_5_graphics_5,x:-73.4356,y:34.375}).wait(1).to({graphics:mask_5_graphics_6,x:-59.4034,y:34.375}).wait(1).to({graphics:mask_5_graphics_7,x:-45.3713,y:34.375}).wait(1).to({graphics:mask_5_graphics_8,x:-31.3391,y:34.375}).wait(1).to({graphics:mask_5_graphics_9,x:-17.3069,y:34.375}).wait(1).to({graphics:mask_5_graphics_10,x:-3.2747,y:34.375}).wait(1).to({graphics:mask_5_graphics_11,x:10.7575,y:34.375}).wait(1).to({graphics:mask_5_graphics_12,x:24.7897,y:34.375}).wait(1).to({graphics:mask_5_graphics_13,x:38.8218,y:34.375}).wait(1).to({graphics:mask_5_graphics_14,x:52.854,y:34.375}).wait(1).to({graphics:mask_5_graphics_15,x:66.8862,y:34.375}).wait(1).to({graphics:mask_5_graphics_16,x:80.9184,y:34.375}).wait(1).to({graphics:mask_5_graphics_17,x:94.9506,y:34.375}).wait(3));

	// 2
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#731982").s().p("AAuA6IAAhRIgcBRIgiAAIgehRIAABRIgrAAIAAhzIBDAAIAWBEIAYhEIBDAAIAABzg");
	this.shape_60.setTransform(248.8,57.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#731982").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQANAAAAgOQAAgNgNAAIgMAAg");
	this.shape_61.setTransform(228.55,57.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#731982").s().p("AhCBRIAAieIAuAAIAAARQAEgIAJgGQAJgGANAAQAXAAAPARQAOAQAAAcQAAAagPARQgOARgXAAQgNAAgJgGQgKgGgDgJIAAA9gAgQgkQgGAGAAALQAAALAGAHQAGAFAJAAQAJAAAGgFQAGgIAAgKQAAgLgGgGQgGgIgJAAQgJAAgGAIg");
	this.shape_62.setTransform(211.575,59.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#731982").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_63.setTransform(197.625,57.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#731982").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_64.setTransform(184.875,57.325);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#731982").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQAOAAgBgOQABgNgOAAIgMAAg");
	this.shape_65.setTransform(168.15,57.325);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#731982").s().p("AgyA8QgSgWAAgkQAAgpAXgWQAXgVApAAIAiAAIAAAjIgjAAQgtAAgBApQADgMANgIQAMgGAOAAQAbAAAOAQQAOAPAAAYQAAAZgRARQgTASgfAAQggAAgUgXgAgNAGQgGAGABALQgBALAGAHQAGAGAJAAQAJAAAHgHQAFgGAAgLQAAgKgFgHQgHgGgJAAQgJAAgGAGg");
	this.shape_66.setTransform(151.05,55.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#731982").s().p("AAuA6IAAhRIgbBRIgkAAIgdhRIAABRIgrAAIAAhzIBDAAIAWBEIAYhEIBCAAIAABzg");
	this.shape_67.setTransform(133.15,57.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#731982").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQANAAAAgOQAAgNgNAAIgMAAg");
	this.shape_68.setTransform(112.9,57.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#731982").s().p("AAuA6IAAhRIgcBRIgiAAIgehRIAABRIgrAAIAAhzIBDAAIAWBEIAYhEIBCAAIAABzg");
	this.shape_69.setTransform(92.65,57.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#731982").s().p("Ag0AsQgOgRAAgbQAAgaAOgRQAPgRAYAAQAZAAAKAVIAAgSIAtAAIAABzIgtAAIAAgRQgFAJgJAFQgJAGgMAAQgYAAgPgRgAgNgQQgFAGgBAKQABALAFAGQAGAHAIAAQALAAAFgHQAHgGAAgLQAAgKgHgGQgFgHgLAAQgIAAgGAHg");
	this.shape_70.setTransform(74.4,57.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#731982").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_71.setTransform(60.425,57.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#731982").s().p("AACBRIAEgkIgXAAIgEAkIggAAIAFgkIgTAAIAAgfIAXAAIAFgbIgVAAIAAgfIAYAAIAGgkIAeAAIgEAkIAXAAIAFgkIAfAAIgFAkIASAAIAAAfIgWAAIgEAbIATAAIAAAfIgXAAIgFAkgAgMAOIAXAAIAEgbIgXAAg");
	this.shape_72.setTransform(46.7,54.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#731982").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_73.setTransform(27.425,57.325);

	var maskedShapeInstanceList = [this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).wait(20));

	// Layer_4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("AygHBIAAj8MAlBAAAIAAD8g");
	var mask_6_graphics_5 = new cjs.Graphics().p("A2yHBIAAj8MAtlAAAIAAD8g");
	var mask_6_graphics_6 = new cjs.Graphics().p("A27HBIAAj8MAt3AAAIAAD8g");
	var mask_6_graphics_7 = new cjs.Graphics().p("A3EHBIAAj8MAuJAAAIAAD8g");
	var mask_6_graphics_8 = new cjs.Graphics().p("A3MHBIAAj8MAuZAAAIAAD8g");
	var mask_6_graphics_9 = new cjs.Graphics().p("A3VHBIAAj8MAurAAAIAAD8g");
	var mask_6_graphics_10 = new cjs.Graphics().p("A3eHBIAAj8MAu9AAAIAAD8g");
	var mask_6_graphics_11 = new cjs.Graphics().p("A3nHBIAAj8MAvPAAAIAAD8g");
	var mask_6_graphics_12 = new cjs.Graphics().p("A3vHBIAAj8MAvfAAAIAAD8g");
	var mask_6_graphics_13 = new cjs.Graphics().p("A34HBIAAj8MAvxAAAIAAD8g");
	var mask_6_graphics_14 = new cjs.Graphics().p("A4BHBIAAj8MAwDAAAIAAD8g");
	var mask_6_graphics_15 = new cjs.Graphics().p("A4KHBIAAj8MAwVAAAIAAD8g");
	var mask_6_graphics_16 = new cjs.Graphics().p("A4THBIAAj8MAwnAAAIAAD8g");
	var mask_6_graphics_17 = new cjs.Graphics().p("A4bHBIAAj8MAw3AAAIAAD8g");
	var mask_6_graphics_18 = new cjs.Graphics().p("A4kHBIAAj8MAxJAAAIAAD8g");
	var mask_6_graphics_19 = new cjs.Graphics().p("A4GHBIAAj8MAxbAAAIAAD8g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:-102.7,y:44.925}).wait(5).to({graphics:mask_6_graphics_5,x:-130.0527,y:44.925}).wait(1).to({graphics:mask_6_graphics_6,x:-108.9027,y:44.925}).wait(1).to({graphics:mask_6_graphics_7,x:-87.7528,y:44.925}).wait(1).to({graphics:mask_6_graphics_8,x:-66.6028,y:44.925}).wait(1).to({graphics:mask_6_graphics_9,x:-45.4529,y:44.925}).wait(1).to({graphics:mask_6_graphics_10,x:-24.303,y:44.925}).wait(1).to({graphics:mask_6_graphics_11,x:-3.153,y:44.925}).wait(1).to({graphics:mask_6_graphics_12,x:17.9969,y:44.925}).wait(1).to({graphics:mask_6_graphics_13,x:39.1469,y:44.925}).wait(1).to({graphics:mask_6_graphics_14,x:60.2968,y:44.925}).wait(1).to({graphics:mask_6_graphics_15,x:81.4467,y:44.925}).wait(1).to({graphics:mask_6_graphics_16,x:102.5967,y:44.925}).wait(1).to({graphics:mask_6_graphics_17,x:123.7466,y:44.925}).wait(1).to({graphics:mask_6_graphics_18,x:144.8966,y:44.925}).wait(1).to({graphics:mask_6_graphics_19,x:162.1215,y:44.925}).wait(1));

	// 3
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAvA6IAAhRIgdBRIgjAAIgdhRIAABRIgsAAIAAhzIBFAAIAVBEIAXhEIBDAAIAABzg");
	this.shape_74.setTransform(310.85,80.425);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgwAsQgSgRAAgbQAAgbASgRQASgRAeAAQAeAAATARQASARAAAbQAAAbgSARQgTASgeAAQgeAAgSgSgAgPgRQgGAHAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAFgGAAgLQAAgKgFgHQgGgGgKAAQgJAAgGAGg");
	this.shape_75.setTransform(293.425,80.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_76.setTransform(280.425,80.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_77.setTransform(267.575,80.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIguAAIAAhzIAuAAIAAAoIAgAAIAAgoIAuAAIAABzg");
	this.shape_78.setTransform(253.15,80.425);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhCBSIAAifIAuAAIAAASQAEgKAJgFQAJgHANABQAXAAAPAQQAOASAAAbQAAAagPARQgOARgXAAQgNAAgJgHQgKgFgDgIIAAA9gAgQglQgGAHAAALQAAALAGAGQAGAHAJgBQAJABAGgHQAGgGAAgLQAAgLgGgHQgGgGgJAAQgJAAgGAGg");
	this.shape_79.setTransform(238.475,82.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_80.setTransform(223.625,80.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_81.setTransform(210.775,80.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIguAAIAAhzIAuAAIAAAoIAgAAIAAgoIAuAAIAABzg");
	this.shape_82.setTransform(197.25,80.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAQA6IAAg9IggA1IAAAIIgtAAIAAhzIAtAAIAAA/IAgg1IAAgKIAuAAIAABzg");
	this.shape_83.setTransform(182.125,80.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAuA6IAAhRIgbBRIgjAAIgehRIAABRIgrAAIAAhzIBDAAIAXBEIAWhEIBEAAIAABzg");
	this.shape_84.setTransform(158.7,80.425);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAoA6IAAhzIAtAAIAABzgAhVA6IAAhzIAuAAIAAAkIAVAAQAZAAANAMQALAKAAARQAAAPgLALQgOAOgYAAgAgnAgIAMAAQAOAAgBgOQABgNgOAAIgMAAg");
	this.shape_85.setTransform(138.45,80.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIgtAAIAAhzIAtAAIAAAoIAgAAIAAgoIAuAAIAABzg");
	this.shape_86.setTransform(121.05,80.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag6A6IAAhzIAuAAIAAAkIAUAAQAaAAANAMQALAKAAARQAAAPgLALQgOAOgZAAgAgMAgIAMAAQANAAgBgOQABgNgNAAIgMAAg");
	this.shape_87.setTransform(107.4,80.425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhBA7IAAglIAFAAQALAAAAgTIAAg9IBzAAIAABzIguAAIAAhOIgYAAIAAAXQAAA5gxAAg");
	this.shape_88.setTransform(92.375,80.525);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAQA6IAAg9IggA1IAAAIIgtAAIAAhzIAtAAIAAA/IAgg1IAAgKIAuAAIAABzg");
	this.shape_89.setTransform(77.725,80.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgyA8QgSgWAAgkQAAgpAXgWQAXgVApAAIAiAAIAAAjIgjAAQgtAAgBApQADgMANgIQAMgGAOAAQAbAAAOAQQAOAPAAAYQAAAZgRARQgTASgfAAQggAAgUgXgAgNAGQgGAGABALQgBALAGAHQAGAGAJAAQAJAAAHgHQAFgGABgLQgBgKgFgHQgHgGgJAAQgJAAgGAGg");
	this.shape_90.setTransform(62.95,78.275);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgwAsQgSgRAAgbQAAgbASgRQASgRAeAAQAeAAATARQASARAAAbQAAAbgSARQgTASgeAAQgeAAgSgSgAgPgRQgGAHAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAFgGAAgLQAAgKgFgHQgGgGgKAAQgJAAgGAGg");
	this.shape_91.setTransform(48.375,80.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAvA6IAAhRIgdBRIgjAAIgdhRIAABRIgsAAIAAhzIBFAAIAVBEIAXhEIBDAAIAABzg");
	this.shape_92.setTransform(30.95,80.425);

	var maskedShapeInstanceList = [this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).wait(20));

	// Layer_4 copy (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("AygI2IAAj9MAlBAAAIAAD9g");
	var mask_7_graphics_5 = new cjs.Graphics().p("A2yI2IAAj9MAtlAAAIAAD9g");
	var mask_7_graphics_6 = new cjs.Graphics().p("A11I2IAAj9MArrAAAIAAD9g");
	var mask_7_graphics_7 = new cjs.Graphics().p("A04I2IAAj9MApxAAAIAAD9g");
	var mask_7_graphics_8 = new cjs.Graphics().p("Az7I2IAAj9MAn3AAAIAAD9g");
	var mask_7_graphics_9 = new cjs.Graphics().p("Ay+I2IAAj9MAl9AAAIAAD9g");
	var mask_7_graphics_10 = new cjs.Graphics().p("AyBI2IAAj9MAkDAAAIAAD9g");
	var mask_7_graphics_11 = new cjs.Graphics().p("AxDI2IAAj9MAiHAAAIAAD9g");
	var mask_7_graphics_12 = new cjs.Graphics().p("AwGI2IAAj9MAgNAAAIAAD9g");
	var mask_7_graphics_13 = new cjs.Graphics().p("AvJI2IAAj9IeTAAIAAD9g");
	var mask_7_graphics_14 = new cjs.Graphics().p("AuMI2IAAj9IcZAAIAAD9g");
	var mask_7_graphics_15 = new cjs.Graphics().p("AtPI2IAAj9IafAAIAAD9g");
	var mask_7_graphics_16 = new cjs.Graphics().p("AsSI2IAAj9IYlAAIAAD9g");
	var mask_7_graphics_17 = new cjs.Graphics().p("ArVI2IAAj9IWrAAIAAD9g");
	var mask_7_graphics_18 = new cjs.Graphics().p("AqYI2IAAj9IUxAAIAAD9g");
	var mask_7_graphics_19 = new cjs.Graphics().p("AozI2IAAj9IS2AAIAAD9g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:-102.7,y:56.575}).wait(5).to({graphics:mask_7_graphics_5,x:-130.0527,y:56.575}).wait(1).to({graphics:mask_7_graphics_6,x:-115.8882,y:56.575}).wait(1).to({graphics:mask_7_graphics_7,x:-101.7238,y:56.575}).wait(1).to({graphics:mask_7_graphics_8,x:-87.5594,y:56.575}).wait(1).to({graphics:mask_7_graphics_9,x:-73.395,y:56.575}).wait(1).to({graphics:mask_7_graphics_10,x:-59.2306,y:56.575}).wait(1).to({graphics:mask_7_graphics_11,x:-45.0661,y:56.575}).wait(1).to({graphics:mask_7_graphics_12,x:-30.9017,y:56.575}).wait(1).to({graphics:mask_7_graphics_13,x:-16.7373,y:56.575}).wait(1).to({graphics:mask_7_graphics_14,x:-2.5729,y:56.575}).wait(1).to({graphics:mask_7_graphics_15,x:11.5915,y:56.575}).wait(1).to({graphics:mask_7_graphics_16,x:25.7559,y:56.575}).wait(1).to({graphics:mask_7_graphics_17,x:39.9204,y:56.575}).wait(1).to({graphics:mask_7_graphics_18,x:54.0848,y:56.575}).wait(1).to({graphics:mask_7_graphics_19,x:64.3247,y:56.575}).wait(1));

	// 3 copy
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgvAuQgSgQAAgeQAAgcATgQQARgRAeAAQAdAAASAQQASAPAAAZIgBAPIhUAAQAAAKAGAFQAGAFAIAAQAPAAAEgJIAsAAQgDASgRAMQgRALgZAAQgfAAgSgQgAAUgMQAAgVgTAAQgJAAgGAGQgFAGAAAJIAnAAIAAAAg");
	this.shape_93.setTransform(117.575,103.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAQA6IAAgoIggAAIAAAoIgtAAIAAhzIAtAAIAAAoIAgAAIAAgoIAvAAIAABzg");
	this.shape_94.setTransform(103.15,103.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag0AsQgOgRAAgbQAAgaAPgRQAOgRAYAAQAZAAAKAVIAAgSIAtAAIAABzIgtAAIAAgRQgFAJgJAFQgJAGgMAAQgZAAgOgRgAgNgQQgFAGgBAKQABALAFAGQAGAHAJAAQAJAAAGgHQAHgGgBgLQABgKgHgGQgGgHgJAAQgJAAgGAHg");
	this.shape_95.setTransform(87.65,103.725);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhCBSIAAifIAuAAIAAASQAEgKAJgFQAJgHANAAQAXAAAPARQAOASAAAbQAAAagPARQgOARgXAAQgNAAgJgHQgKgFgDgIIAAA9gAgQglQgGAHAAALQAAALAGAGQAGAHAJgBQAJABAGgHQAGgGAAgLQAAgLgGgHQgGgGgJAAQgJAAgGAGg");
	this.shape_96.setTransform(73.375,105.75);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgWA6IAAhNIgfAAIAAgmIBrAAIAAAmIgfAAIAABNg");
	this.shape_97.setTransform(59.425,103.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AguAtQgSgRAAgcQAAgbASgRQASgRAdAAQAbAAASAOQARAOACAYIgtAAQgDgOgQAAQgJAAgFAGQgGAGAAALQAAALAGAHQAFAGAJAAQAQAAADgOIAtAAQgCAYgRAOQgSAOgbAAQgdAAgSgRg");
	this.shape_98.setTransform(46.675,103.725);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag6A6IAAhzIBOAAQAUAAAKALQAIAIAAALQgBAMgIAHQgJAHgPAAQAiABAAAbQAAALgJAIQgLAMgYAAgAgNAhIALAAQANAAAAgLQAAgMgMAAIgMAAgAgNgKIALAAQANAAAAgLQAAgMgNAAIgLAAg");
	this.shape_99.setTransform(27.8,103.725);

	var maskedShapeInstanceList = [this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,20.1,310.40000000000003,93.1);


(lib.round_04copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_04copy2, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_04copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_04copy, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_04, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVDWQhahYAAh+QAAh9BahYQBYhZB9AAQB+AABZBZQBYBYAAB9QAAB+hYBYQhZBZh+AAQh9AAhYhZg");
	this.shape.setTransform(30.35,30.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_03, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B956").s().p("AlzFzQiaiZAAjaQAAjZCaiZQCbiaDYAAQDaAACZCaQCaCZAADZQAADaiaCZQiZCajaAAQjYAAibiag");
	this.shape.setTransform(30.3152,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_02, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28B956").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape_1.setTransform(30.3348,30.3203,0.5773,0.5773);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_01_1, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AouIuQh+h+g5iaQgwiBAAiVQAAlGDnjoQDojnFGAAQFHAADnDnQDoDoAAFGQAACVgwCBQg5Cbh/B9QjnDolHAAQlGAAjojog");
	this.shape.setTransform(79,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(0,0,158,158), null);


(lib.megafon_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmGOkQi0hMiLiNQiMiMhMi0QhPi9AAjNQAAjNBPi9QBMi1CMiMQCLiMC0hNQC7hQDLAAQDMAAC7BQQC0BNCLCMQCLCMBNC1QBPC9AADNQAADNhPC9QhMC1iMCLQiLCNi0BMQi7BQjMgBQjMABi6hQg");
	this.shape.setTransform(35.6288,35.8966,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_round, new cjs.Rectangle(0,0,71.3,71.8), null);


(lib.megafon_face_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B956").s().p("AimStIAAyBQABghAWgWQAXgXAggBIB9AAQAEAAADgDQADgDAAgEIAAx/IB4AAIAASvIgBAAQAAAigXAYQgYAXgiAAIh5AAQgEAAgDAEQgEADAAAEIAAROg");
	this.shape_1.setTransform(9.567,42.4497,0.3548,0.3548);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B956").s().p("AhXBYQgkgkAAg0QAAgyAkgmQAkgkAzAAQAzAAAlAkQAkAlAAAzQAAA0gkAkQgkAlg0AAQgzAAgkglg");
	this.shape_2.setTransform(4.4138,30.5467,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_face_1, new cjs.Rectangle(0,0,15.5,84.9), null);


(lib.megafon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9EgIAAg/Ig2AAQh7AAg/gzQg5gsgPhcQgGgeAAgoQAAh9A8hAQA/hDCGABID1AAQCGgBA/BDQA8BAAAB9QAAAngFAfQgQBbg4AtQhAAzh7AAIg2AAIAAA/gAA+B3IA5AAQA7AAAggVQAbgTAPgpQAHgTAAgyQAAhNgigmQgfgkg4AAIhMAAgAjgiSQgiAmAABNQAAAyAIATQAPApAaATQAgAVA7AAIA5AAIAAktIhMAAQg4AAgfAkg");
	this.shape_7.setTransform(96.7934,10.6832,0.3548,0.3548);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUEAQiLAAg/g/Qg9g9AAiDIAAgBQAAiDA9g9QA+g/CLAAIArAAQCLAAA/A/QA8A9AACDIAAABQAACDg9A9Qg/A/iLAAgAiDhwQgfAjAABNIAAABQAABPAhAkQAiAkBMAAIAnAAQBMAAAigkQAhgkAAhPIAAgBQAAhMgggkQgigmhNAAIgnAAQhPAAghAmg");
	this.shape_8.setTransform(123.5263,12.0225,0.3548,0.3548);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjcD5IAAmnQAAgeAVgVQAVgXAgAAIFuAAIAABpIkxAAQgEAAgEADQgCADAAAFIAAF9g");
	this.shape_9.setTransform(57.5102,12.0758,0.3548,0.3548);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiSD5QgfAAgWgXQgUgWgBgdIAAldQABgeAUgVQAWgXAfAAIFuAAIAABpIkxAAQgEAAgDADQgDADAAAFIAABLIE0AAIAABlIk0AAIAABZQAAAEADAEQADADAEAAIExAAIAABpg");
	this.shape_10.setTransform(38.7954,12.0758,0.3548,0.3548);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhrDUIijlzIAAHDIh8AAIAAnPQAAg9AjgiQAfgeAsAAQArAAAeAYQAdAWAVAwIChF2ICil2QAVgwAdgWQAegYArAAQAtAAAeAeQAjAiAAA9IAAHPIh8AAIAAnDIijFzQgjBVhJAAQhHAAgkhVg");
	this.shape_11.setTransform(14.0228,10.5591,0.3548,0.3548);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACtD/IgthpIj/AAIgtBpIiEAAIDLm6QAPghAdgSQAbgQAeAAQAgAAAaAQQAdASAPAhIDLG6gABWAyIhMi0QgCgHgIAAQgGAAgDAHIhNC0ICsAAg");
	this.shape_12.setTransform(72.9077,11.8629,0.3548,0.3548);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AB+D5IAAjJIj7AAIAADJIh8AAIAAnxIB8AAIAAC8ID7AAIAAi8IB8AAIAAHxg");
	this.shape_13.setTransform(145.3986,12.0758,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_1, new cjs.Rectangle(0,0,154.3,21.1), null);


(lib.disclamer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(127.575,96.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAXQgFgGAAgLIAAgiIAKAAIAAAfQAAAQANABQAIgBAEgFQAEgFgBgHIAAgeIALAAIAAA3IgLAAIAAgKQgEAMgNAAQgKgBgGgFg");
	this.shape_1.setTransform(122.5,94.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAcIAAg3IALAAIAAAOQABgIAEgDQAEgDAGAAIAFAAIAAAKIgFgBQgIAAgDAHQgEAGAAAJIAAAYg");
	this.shape_2.setTransform(117.325,94.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_3.setTransform(113.175,96.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAcIAAgcQAAgSgOAAQgHAAgEAEQgEAGAAAIIAAAcIgKAAIAAg2IAKAAIAAAKQAFgMANABQAVAAAAAWIAAAhg");
	this.shape_4.setTransform(108.125,94.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_5.setTransform(101.375,94.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAqIAAgtIgMAAIAAgJIAMAAIAAgKQAAgLAGgFQAEgDAGAAIAJABIAAAJIgGgBQgKAAAAAKIAAAKIAQAAIAAAJIgQAAIAAAtg");
	this.shape_6.setTransform(96,93.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_7.setTransform(90.125,94.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAkQgJgGAAgKIALAAQABANAPAAQASAAAAgTIAAgIQgCAEgGADQgFAEgFAAQgNAAgHgJQgIgIAAgLQAAgNAIgJQAIgIAMAAQAFAAAGADQAFADACAGIAAgLIALAAIAAA1QAAAQgJAHQgHAGgNAAQgKAAgIgGgAgMgaQgFAGAAAJQAAAIAFAEQAFAGAHAAQAJAAAFgGQAFgEAAgIQAAgJgFgFQgFgGgJgBQgHAAgFAGg");
	this.shape_8.setTransform(83.075,95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_9.setTransform(76.625,94.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfAcIAAggQAAgPgMABQgOgBAAATIAAAcIgJAAIAAgfQAAgPgMAAQgOgBAAATIAAAcIgKAAIAAg2IAKAAIAAAKQACgEAEgEQAFgEAGABQANAAADAMQACgGAFgDQAFgEAGABQAUAAAAAVIAAAig");
	this.shape_10.setTransform(68.575,94.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_11.setTransform(61.875,96.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAcIgOgqIgOAqIgIAAIgVg3IAMAAIANAoIAOgoIAJAAIAOAoIANgoIAMAAIgVA3g");
	this.shape_12.setTransform(55.725,94.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOAcIgOgqIgOAqIgIAAIgVg3IAMAAIANAoIAOgoIAJAAIAOAoIANgoIAMAAIgVA3g");
	this.shape_13.setTransform(46.825,94.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAcIgOgqIgOAqIgIAAIgVg3IAMAAIANAoIAOgoIAJAAIAOAoIANgoIAMAAIgVA3g");
	this.shape_14.setTransform(37.925,94.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_15.setTransform(318.475,80.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_16.setTransform(311.775,80.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_17.setTransform(294.625,80.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgRAAIAAAtg");
	this.shape_18.setTransform(288.675,80.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_19.setTransform(283.025,80.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_20.setTransform(276.575,80.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_21.setTransform(269.875,80.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAgQgIgKAAgRQAAgXAJgMQAKgMAWAAIALAAIAAAKIgPAAQgNAAgHAIQgGAIgBAQQADgHAFgEQAHgEAGAAQAMAAAHAJQAHAHAAANQAAAMgHAIQgJAJgMAAQgNAAgIgLgAgMAAQgFAFAAAJQAAAIAFAGQAFAFAHAAQAJAAAFgFQAFgGgBgIQABgJgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_22.setTransform(263.15,78.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_23.setTransform(256.325,80.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_24.setTransform(249.725,81.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgYIAGAAQAFgDAAgLIAAgfIAqAAIAAAtIAGAAIAAAYgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_25.setTransform(242.475,80.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_26.setTransform(235.925,80.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAqIAAhJIgmAAIAABJIgLAAIAAhTIA7AAIAABTg");
	this.shape_27.setTransform(228.625,78.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_28.setTransform(212.525,82.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANAcIAAgSIgNAAIgLASIgMAAIANgTQgFgCgFgFQgDgEAAgGQAAgIAGgFQAFgGAIAAIAcAAIAAA3gAgKgPQgDADAAAEQAAAEADADQAEACAEAAIAPAAIAAgTIgPAAQgEAAgEADg");
	this.shape_29.setTransform(207.55,80.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaAcIAAgKIACAAQAKAAAAgOIAAgfIApAAIAAA2IgLAAIAAgsIgUAAIAAAVQAAAMgFAGQgEAGgIAAg");
	this.shape_30.setTransform(200.975,80.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_31.setTransform(194.825,80.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgRAAIAAAtg");
	this.shape_32.setTransform(189.125,80.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_33.setTransform(182.825,80.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgYIAGAAQAFgDAAgLIAAgfIAqAAIAAAtIAGAAIAAAYgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_34.setTransform(176.025,80.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_35.setTransform(169.075,80.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAcIAAgKIACAAQAKAAAAgOIAAgfIApAAIAAA2IgLAAIAAgsIgUAAIAAAVQAAAMgFAGQgEAGgIAAg");
	this.shape_36.setTransform(162.175,80.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAgQgHgKAAgRQAAgXAJgMQAKgMAWAAIAKAAIAAAKIgNAAQgOAAgHAIQgGAIgBAQQACgHAGgEQAGgEAHAAQAMAAAHAJQAHAHAAANQAAAMgIAIQgIAJgMAAQgNAAgJgLgAgNAAQgEAFAAAJQAAAIAEAGQAGAFAIAAQAIAAAFgFQAFgGAAgIQAAgJgFgFQgFgFgIAAQgIAAgGAFg");
	this.shape_37.setTransform(155.8,78.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_38.setTransform(148.975,80.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_39.setTransform(142.325,80.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAZAAQAJAAAFAFQADAEAAAGQAAAFgDADQgEAEgFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgFAGgKAAgAgLAUIAOAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAIgOAAgAgLgDIAOAAQADAAADgDQACgCAAgDQAAgDgDgDQgCgCgDAAIgOAAg");
	this.shape_40.setTransform(136.275,80.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_41.setTransform(129.425,80.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_42.setTransform(122.825,81.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOAcIAAguIgbAAIAAAuIgLAAIAAg3IAxAAIAAA3g");
	this.shape_43.setTransform(115.725,80.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AANAcIAAgSIgNAAIgLASIgMAAIANgTQgFgCgFgFQgDgEAAgGQAAgIAGgFQAFgGAIAAIAcAAIAAA3gAgKgPQgDADAAAEQAAAEADADQAEACAEAAIAPAAIAAgTIgPAAQgEAAgEADg");
	this.shape_44.setTransform(98.65,80.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_45.setTransform(92.325,80.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_46.setTransform(85.575,80.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_47.setTransform(79.075,80.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AglAcIAAg3IAKAAIAAAuIAXAAIAAguIAKAAIAAAuIAWAAIAAguIAKAAIAAA3g");
	this.shape_48.setTransform(71.25,80.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_49.setTransform(63.425,80.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_50.setTransform(57.025,81.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAYQgGgFAAgIIAKAAQAAAFAEACQADADAGAAQAMAAAAgJQAAgEgDgCQgDgCgFAAIgHAAIAAgHIAHAAQAEAAADgCQADgDAAgDQAAgEgDgCQgDgDgGAAQgLAAAAAJIgKAAQAAgHAGgFQAGgFAJAAQAKAAAGAEQAGAFAAAGQAAAMgMABQAGAAADADQAEAEAAAGQAAAHgHAFQgGAEgKAAQgKAAgGgFg");
	this.shape_51.setTransform(50.425,80.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_52.setTransform(43.825,80.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_53.setTransform(37.225,81.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_54.setTransform(319.175,65.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAVAcIAAg3IAKAAIAAA3gAgeAcIAAg3IAKAAIAAAUIAPAAQAHAAAGAFQAFAEAAAIQAAAHgGAFQgFAGgIAAgAgUATIANAAQAFAAACgCQACgDAAgEQAAgFgCgCQgCgDgEAAIgOAAg");
	this.shape_55.setTransform(294.875,65.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_56.setTransform(287.475,65.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_57.setTransform(280.975,65.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgZIAGAAQAFgCAAgLIAAgfIAqAAIAAAsIAGAAIAAAZgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_58.setTransform(274.375,66.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_59.setTransform(268.025,65.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAZAAQAJAAAFAFQADAEAAAGQAAAFgDADQgEAEgFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgFAGgKAAgAgLAUIAOAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAIgOAAgAgLgDIAOAAQADAAADgDQACgCAAgDQAAgDgDgDQgCgCgDAAIgOAAg");
	this.shape_60.setTransform(262.175,65.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgQAYQgGgFAAgIIAKAAQAAAFAEACQADADAGAAQAMAAAAgJQAAgEgDgCQgDgCgFAAIgHAAIAAgHIAHAAQAEAAADgCQADgDAAgDQAAgEgDgCQgDgDgGAAQgLAAAAAJIgKAAQAAgHAGgFQAGgFAJAAQAKAAAGAEQAGAFAAAGQAAAMgMABQAGAAADADQAEAEAAAGQAAAHgHAFQgGAEgKAAQgKAAgGgFg");
	this.shape_61.setTransform(256.225,65.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_62.setTransform(250.025,65.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_63.setTransform(243.325,65.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_64.setTransform(236.725,66.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAOAcIAAguIgbAAIAAAuIgLAAIAAg3IAxAAIAAA3g");
	this.shape_65.setTransform(229.625,65.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_66.setTransform(223.175,65.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_67.setTransform(216.725,65.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAZAAQAJAAAFAFQADAEAAAGQAAAFgDADQgEAEgFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgFAGgKAAgAgLAUIAOAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAIgOAAgAgLgDIAOAAQADAAADgDQACgCAAgDQAAgDgDgDQgCgCgDAAIgOAAg");
	this.shape_68.setTransform(210.675,65.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgPAyQAVgWAAgcQAAgbgVgWIAGgGQAZAXAAAgQAAAhgZAXg");
	this.shape_69.setTransform(188.025,65.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgBARIARgRIgRgQIAFgGIAZAWIgZAXgAgcARIATgRIgTgQIAGgGIAYAWIgYAXg");
	this.shape_70.setTransform(183.625,65.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_71.setTransform(176.875,65.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgaAcIAAgKIACAAQAKAAAAgOIAAgfIApAAIAAA2IgLAAIAAgsIgUAAIAAAVQAAAMgFAGQgEAGgIAAg");
	this.shape_72.setTransform(169.975,65.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAKAcIgWgaIAAAaIgLAAIAAg3IALAAIAAAYIACAAQAEAAADgEIAIgNQADgEACgBQADgCAEAAIAEAAIAAAJIgCAAQgEAAgDAFIgFAHQgEAGgEAAIAAAAIAZAcg");
	this.shape_73.setTransform(164.3,65.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_74.setTransform(157.725,65.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgfAfQgLgMAAgTQAAgRALgNQAMgNATAAQAUAAAMANQALANAAARQAAATgLAMQgMANgUAAQgTAAgMgNgAgWgXQgJAJAAAOQAAAPAJAJQAIAKAOAAQAPAAAJgKQAIgJAAgPQAAgOgIgJQgJgKgPAAQgOAAgIAKg");
	this.shape_75.setTransform(149.625,64.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgBAAIAYgWIAGAGIgSAQIASARIgGAGgAgcAAIAZgWIAFAGIgRAQIARARIgFAGg");
	this.shape_76.setTransform(141.825,65.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPAAQAAggAZgXIAGAGQgVAWAAAbQAAAcAVAWIgGAGQgZgXAAghg");
	this.shape_77.setTransform(137.425,65.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_78.setTransform(114.175,65.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_79.setTransform(109.475,64.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAqIgXgaIAAAaIgKAAIAAhTIAKAAIAAA1IAYgZIANAAIgaAaIAaAdg");
	this.shape_80.setTransform(105.325,64.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_81.setTransform(98.675,65.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgfAfQgLgMAAgTQAAgRALgNQAMgNATAAQAUAAAMANQALANAAARQAAATgLAMQgMANgUAAQgTAAgMgNgAgWgXQgJAJAAAOQAAAPAJAJQAIAKAOAAQAPAAAJgKQAIgJAAgPQAAgOgIgJQgJgKgPAAQgOAAgIAKg");
	this.shape_82.setTransform(90.575,64.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_83.setTransform(65.275,65.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAKAcIgWgaIAAAaIgLAAIAAg3IALAAIAAAYIACAAQAEAAADgEIAIgNQADgEACgBQADgCAEAAIAEAAIAAAJIgCAAQgEAAgDAFIgFAHQgEAGgEAAIAAAAIAYAcg");
	this.shape_84.setTransform(59.25,65.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_85.setTransform(52.725,66.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_86.setTransform(45.225,65.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAXAcIAAgsIgTAsIgHAAIgTgsIAAAsIgKAAIAAg3IAPAAIARApIARgpIAQAAIAAA3g");
	this.shape_87.setTransform(37.7,65.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_88.setTransform(318.925,51.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAVAcIAAg3IAKAAIAAA3gAgeAcIAAg3IAKAAIAAAUIAPAAQAHAAAGAFQAFAEAAAIQAAAHgGAFQgFAGgIAAgAgUATIANAAQAFAAACgCQACgDAAgEQAAgFgCgCQgCgDgEAAIgOAAg");
	this.shape_89.setTransform(311.825,51.325);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAZAAQAJAAAFAFQADAEAAAGQAAAFgDADQgEAEgFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgFAGgKAAgAgLAUIAOAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAIgOAAgAgLgDIAOAAQADAAADgDQACgCAAgDQAAgDgDgDQgCgCgDAAIgOAAg");
	this.shape_90.setTransform(305.075,51.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_91.setTransform(298.625,51.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgQAcIAAg3IAhAAIAAAKIgWAAIAAAtg");
	this.shape_92.setTransform(293.375,51.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_93.setTransform(287.525,52.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_94.setTransform(280.425,51.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgEAqIAAhJIgaAAIAAgKIA9AAIAAAKIgaAAIAABJg");
	this.shape_95.setTransform(273.975,49.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_96.setTransform(262.825,53.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgOApIARgZIgDAAQgMABgIgJQgIgIAAgMQAAgMAIgIQAIgIAMAAQANAAAIAIQAIAIAAAMQAAALgGAGIgYAkgAgNgZQgEAFAAAIQAAAJAEAFQAGAFAHAAQAJAAAEgFQAGgFAAgJQAAgIgGgFQgEgGgJAAQgHAAgGAGg");
	this.shape_97.setTransform(257.7,49.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AADApIAAg6IgQAAIAAgJQAKAAAEgDQADgDAAgIIAKAAIAABRg");
	this.shape_98.setTransform(251.75,50.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_99.setTransform(248.325,53.325);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgUAhQgIgIAAgMQAAgLAFgGIAZgkIANAAIgRAYIACAAQANAAAIAIQAIAIAAANQAAAMgIAIQgIAJgNAAQgMAAgIgJgAgNAAQgEADAAAKQAAAIAEAFQAGAGAHAAQAJAAAEgGQAGgFAAgIQAAgKgGgDQgEgGgJgBQgHABgGAGg");
	this.shape_100.setTransform(243.2,50.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgWAfQgIgKAAgVQAAgUAIgLQAIgKAOAAQAPAAAIAKQAIALAAAUQAAAVgIAKQgIALgPAAQgOAAgIgLgAgUAAQAAAgAUAAQAUAAABggQgBgggUAAQgUAAAAAgg");
	this.shape_101.setTransform(236.15,50.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_102.setTransform(230.825,53.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgWAfQgIgKAAgVQAAgUAIgLQAIgKAOAAQAPAAAIAKQAIALAAAUQAAAVgIAKQgIALgPAAQgOAAgIgLgAgUAAQAAAgAUAAQAVAAAAggQAAgggVAAQgUAAAAAgg");
	this.shape_103.setTransform(225.45,50.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgUAjQgHgHgBgNIAMAAQAAAIAEAFQAGAFAHAAQAHAAAFgEQAFgEAAgHQgBgPgRAAIgFAAIAAgJIAGAAQAOAAAAgNQAAgGgDgDQgEgEgHAAQgHAAgFAEQgDAEAAAHIgLAAQgBgLAIgGQAIgHALAAQALAAAIAGQAHAGAAAKQAAAOgPAEQAHABAFAFQAEAFABAIQAAALgIAGQgIAHgMAAQgNAAgIgHg");
	this.shape_104.setTransform(218.35,50.025);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgdAEIAAgHIA7AAIAAAHg");
	this.shape_105.setTransform(205.075,50.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOApIARgZIgDAAQgMABgIgJQgIgIAAgMQAAgMAIgIQAIgIAMAAQANAAAIAIQAIAIAAAMQAAALgFAGIgZAkgAgNgZQgEAFAAAIQAAAJAEAFQAGAFAHAAQAJAAAEgFQAGgFgBgJQABgIgGgFQgEgGgJAAQgHAAgGAGg");
	this.shape_106.setTransform(191.65,49.95);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AADApIAAg6IgQAAIAAgJQALAAADgDQADgDAAgIIAKAAIAABRg");
	this.shape_107.setTransform(185.7,50.025);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_108.setTransform(182.275,53.325);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AADApIAAg6IgQAAIAAgJQAKAAAEgDQADgDAAgIIAKAAIAABRg");
	this.shape_109.setTransform(177.85,50.025);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgWAfQgIgKAAgVQAAgUAIgLQAIgKAOAAQAPAAAIAKQAIALAAAUQAAAVgIAKQgIALgPAAQgOAAgIgLgAgUAAQABAgATAAQAVAAAAggQAAgggVAAQgTAAgBAgg");
	this.shape_110.setTransform(172.45,50.025);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_111.setTransform(167.125,53.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AADApIAAg6IgQAAIAAgJQALAAACgDQAEgDAAgIIAKAAIAABRg");
	this.shape_112.setTransform(162.7,50.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgWAfQgIgKAAgVQAAgUAIgLQAIgKAOAAQAPAAAIAKQAIALAAAUQAAAVgIAKQgIALgPAAQgOAAgIgLgAgUAAQAAAgAUAAQAUAAABggQgBgggUAAQgUAAAAAgg");
	this.shape_113.setTransform(157.3,50.025);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgZIAGAAQAFgCAAgLIAAgfIAqAAIAAAsIAGAAIAAAZgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_114.setTransform(143.825,52.05);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_115.setTransform(137.275,51.325);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_116.setTransform(130.625,51.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_117.setTransform(123.975,52.525);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_118.setTransform(117.075,51.325);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAOAcIAAguIgbAAIAAAuIgLAAIAAg3IAxAAIAAA3g");
	this.shape_119.setTransform(110.625,51.325);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAZAAQAJAAAFAFQADAEAAAGQAAAFgDADQgEAEgFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgFAGgKAAgAgLAUIAOAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAIgOAAgAgLgDIAOAAQADAAADgDQACgCAAgDQAAgDgDgDQgCgCgDAAIgOAAg");
	this.shape_120.setTransform(98.175,51.325);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgPAyQAVgWAAgcQAAgbgVgWIAGgGQAZAXAAAgQAAAhgZAXg");
	this.shape_121.setTransform(86.375,50.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgBARIARgRIgRgQIAFgGIAZAWIgZAXgAgcARIATgRIgTgQIAGgGIAYAWIgYAXg");
	this.shape_122.setTransform(81.975,50.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_123.setTransform(75.225,51.325);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgaAcIAAgKIACAAQAKAAAAgOIAAgfIApAAIAAA2IgLAAIAAgsIgUAAIAAAVQAAAMgFAGQgEAGgIAAg");
	this.shape_124.setTransform(68.325,51.35);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AALAcIgXgaIAAAaIgLAAIAAg3IALAAIAAAYIACAAQAEAAADgEIAIgNQADgEADgBQACgCAEAAIAEAAIAAAJIgCAAQgEAAgCAFIgGAHQgEAGgEAAIgBAAIAZAcg");
	this.shape_125.setTransform(62.65,51.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_126.setTransform(56.075,51.325);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgfAfQgLgMAAgTQAAgRALgNQAMgNATAAQAUAAAMANQALANAAARQAAATgLAMQgMANgUAAQgTAAgMgNgAgWgXQgJAJAAAOQAAAPAJAJQAIAKAOAAQAPAAAJgKQAIgJAAgPQAAgOgIgJQgJgKgPAAQgOAAgIAKg");
	this.shape_127.setTransform(47.975,49.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgBAAIAYgWIAGAGIgSAQIASARIgGAGgAgcAAIAZgWIAFAGIgRAQIARARIgFAGg");
	this.shape_128.setTransform(40.175,50.95);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgPAAQAAggAZgXIAGAGQgVAWAAAbQAAAcAVAWIgGAGQgZgXAAghg");
	this.shape_129.setTransform(35.775,50.825);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_130.setTransform(318.425,36.925);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_131.setTransform(313.725,35.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAKAqIgXgaIAAAaIgKAAIAAhTIAKAAIAAA1IAYgZIANAAIgaAaIAaAdg");
	this.shape_132.setTransform(309.575,35.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_133.setTransform(302.925,36.925);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgfAfQgLgMAAgTQAAgRALgNQAMgNATAAQAUAAAMANQALANAAARQAAATgLAMQgMANgUAAQgTAAgMgNgAgWgXQgJAJAAAOQAAAPAJAJQAIAKAOAAQAPAAAJgKQAIgJAAgPQAAgOgIgJQgJgKgPAAQgOAAgIAKg");
	this.shape_134.setTransform(294.825,35.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_135.setTransform(268.175,36.925);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_136.setTransform(261.475,36.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_137.setTransform(254.725,36.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_138.setTransform(247.625,36.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAOAcIAAguIgbAAIAAAuIgLAAIAAg3IAxAAIAAA3g");
	this.shape_139.setTransform(240.975,36.925);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAXAcIAAgsIgUAsIgGAAIgUgsIAAAsIgKAAIAAg3IAQAAIARApIASgpIAQAAIAAA3g");
	this.shape_140.setTransform(233.4,36.925);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_141.setTransform(225.825,36.925);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAKAcIgWgaIAAAaIgKAAIAAg3IAKAAIAAAYIACAAQAEAAADgEIAIgNQADgEACgBQADgCAEAAIAFAAIAAAJIgDAAQgDAAgDAFIgGAHQgEAGgEAAIgBAAIAaAcg");
	this.shape_142.setTransform(219.85,36.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgPAyQAVgWAAgcQAAgbgVgWIAGgGQAZAXAAAgQAAAhgZAXg");
	this.shape_143.setTransform(195.725,36.425);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgBARIARgRIgRgQIAFgGIAZAWIgZAXgAgcARIATgRIgTgQIAGgGIAYAWIgYAXg");
	this.shape_144.setTransform(191.325,36.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_145.setTransform(185.225,36.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_146.setTransform(178.725,36.925);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgTAXQgHgFAAgJIAKAAQACALAOAAQAIAAAEgFQAEgEABgHIgXAAIAAgHIAXAAQgBgHgEgEQgEgFgIAAQgOAAgCANIgKAAQAAgKAHgGQAHgGAMAAQANAAAHAJQAHAIAAALQAAAMgHAIQgHAJgNAAQgMAAgHgGg");
	this.shape_147.setTransform(172.175,36.925);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAdAcIgXgaIAAAaIgKAAIAAgaIgYAaIgNAAIAbgcIgCAAQgEAAgFgGIgEgHQgDgFgEAAIgCAAIAAgJIAEAAQAEAAACACQADABADAEIAJANQADAEAEAAIACAAIAAgYIAKAAIAAAYIABAAQAEAAAEgEIAJgNIAEgFQADgCAEAAIAFAAIAAAJIgDAAQgEAAgCAFIgGAHQgEAGgFAAIAAAAIAaAcg");
	this.shape_148.setTransform(164.5,36.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgYIAGAAQAFgDAAgLIAAgfIAqAAIAAAtIAGAAIAAAYgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_149.setTransform(156.525,37.65);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_150.setTransform(149.975,36.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgaAcIAAgKIACAAQAKAAAAgOIAAgfIApAAIAAA2IgLAAIAAgsIgUAAIAAAVQAAAMgFAGQgEAGgIAAg");
	this.shape_151.setTransform(143.025,36.95);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_152.setTransform(136.875,36.925);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgRAAIAAAtg");
	this.shape_153.setTransform(131.175,36.925);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_154.setTransform(125.225,36.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AATAqIAAg9IglA3IAAAGIgLAAIAAhTIALAAIAAA9IAlg3IAAgGIALAAIAABTg");
	this.shape_155.setTransform(117.85,35.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgRAAIAAAtg");
	this.shape_156.setTransform(92.725,36.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_157.setTransform(87.075,36.95);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_158.setTransform(80.825,36.925);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgEAcIAAgtIgRAAIAAgKIArAAIAAAKIgRAAIAAAtg");
	this.shape_159.setTransform(75.125,36.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgYIAGAAQAFgDAAgLIAAgfIAqAAIAAAtIAGAAIAAAYgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_160.setTransform(69.075,37.65);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_161.setTransform(62.525,36.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAOAcIAAguIgbAAIAAAuIgLAAIAAg3IAxAAIAAA3g");
	this.shape_162.setTransform(55.825,36.925);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgdAfQgMgLAAgUQAAgSAMgNQAMgMATAAQAQAAALAJQALAIACANIgMAAQgCgKgHgEQgIgGgLAAQgOAAgJAJQgIAKAAAOQAAAPAIAKQAJAJAOAAQALAAAHgFQAHgFADgJIAMAAQgDANgKAIQgLAIgQAAQgTAAgMgNg");
	this.shape_163.setTransform(47.825,35.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgBAAIAYgWIAGAGIgSAQIASARIgGAGgAgcAAIAZgWIAFAGIgRAQIARARIgFAGg");
	this.shape_164.setTransform(40.175,36.55);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgPAAQAAggAZgXIAGAGQgVAWAAAbQAAAcAVAWIgGAGQgZgXAAghg");
	this.shape_165.setTransform(35.775,36.425);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_166.setTransform(319.075,22.525);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_167.setTransform(312.875,22.55);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAPAcIAAgcQAAgSgOAAQgHAAgEAEQgEAGAAAIIAAAcIgKAAIAAg2IAKAAIAAAKQAFgMANABQAVAAAAAWIAAAhg");
	this.shape_168.setTransform(306.425,22.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_169.setTransform(299.875,22.525);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgSAkQgJgGAAgKIALAAQABANAPAAQASAAAAgTIAAgIQgCAEgGADQgFAEgFAAQgNAAgHgJQgIgIAAgLQAAgNAIgJQAIgIAMAAQAFAAAGADQAFADACAGIAAgLIALAAIAAA1QAAAQgJAHQgHAGgNAAQgKAAgIgGgAgMgaQgFAGAAAJQAAAIAFAEQAFAGAHAAQAJAAAFgGQAFgEAAgIQAAgJgFgGQgFgFgJgBQgHAAgFAGg");
	this.shape_170.setTransform(293.025,23.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgEApIAAg3IAJAAIAAA3gAgFgaQgDgCABgDQgBgEADgDQADgCADAAQADAAADACQACADAAAEQAAADgCACQgDADgDAAQgDAAgDgDg");
	this.shape_171.setTransform(288.3,21.225);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_172.setTransform(285.525,21.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_173.setTransform(282.725,21.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_174.setTransform(278.175,22.525);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgBAiQgGgEAAgMIAAgbIgKAAIAAgJIAKAAIAAgSIAJAAIAAASIAPAAIAAAJIgPAAIAAAZQABAHACADQACABAEAAIAHAAIAAAJIgJABQgHAAgDgDg");
	this.shape_175.setTransform(272.9,21.675);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAPAcIAAgcQAAgSgOAAQgHAAgEAEQgEAGAAAIIAAAcIgKAAIAAg2IAKAAIAAAKQAFgMANABQAVAAAAAWIAAAhg");
	this.shape_176.setTransform(267.525,22.45);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAKAAIAABTg");
	this.shape_177.setTransform(262.6,21.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgBAiQgGgEAAgMIAAgbIgKAAIAAgJIAKAAIAAgSIAKAAIAAASIANAAIAAAJIgNAAIAAAZQAAAHACADQACABAEAAIAHAAIAAAJIgJABQgHAAgDgDg");
	this.shape_178.setTransform(255.5,21.675);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgPAYQgGgGAAgIIAKAAQAAAFAEADQADADAFAAQAFAAADgCQADgCAAgEQAAgGgGgBIgOgEQgLgDgBgLQAAgHAGgFQAGgEAIAAQAKAAAGAFQAFAFAAAHIgKAAQAAgJgLAAQgEAAgCACQgDACAAADQAAAGAGABIANAEQAGACADADQADAEAAAFQAAAIgGAEQgFAFgKAAQgKAAgGgFg");
	this.shape_179.setTransform(250.725,22.525);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_180.setTransform(244.925,22.525);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgBAiQgGgEAAgMIAAgbIgKAAIAAgJIAKAAIAAgSIAKAAIAAASIANAAIAAAJIgNAAIAAAZQAAAHACADQACABAEAAIAHAAIAAAJIgJABQgHAAgDgDg");
	this.shape_181.setTransform(239.65,21.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgVAiQgHgIAAgMQAAgNAIgHQAHgJANAAQANAAAFAMIAAgGIAAghIALAAIAABTIgLAAIAAgJQgCAFgGADQgFADgFAAQgNAAgIgJgAgMAAQgFAFAAAJQAAAIAFAGQAFAFAHAAQAJAAAFgGQAFgFAAgIQAAgJgFgFQgFgFgJAAQgHAAgFAFg");
	this.shape_182.setTransform(233.875,21.175);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_183.setTransform(227.425,22.525);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAIAHQAHAHAAAMIgBAFIgpAAQAAAIAEAFQAFAEAHAAQALAAAEgIIAKAAQgBAIgHAEQgHAFgKAAQgMAAgHgIgAARgEQAAgHgFgEQgEgFgHAAQgHAAgEAFQgFAEAAAHIAgAAIAAAAg");
	this.shape_184.setTransform(221.175,22.525);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgcApIAAhQIALAAIAAAKQACgFAGgDQAFgDAGAAQAMAAAHAIQAIAIAAANQAAAMgIAIQgIAIgMAAQgFAAgFgDQgGgDgCgFIAAAjgAgNgZQgFAFAAAJQAAAJAFAEQAGAGAHAAQAIAAAFgGQAFgEAAgJQAAgIgFgGQgFgGgIAAQgHAAgGAGg");
	this.shape_185.setTransform(214.775,23.725);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgUAkQgIgHAAgOIALAAQAAAJAFAFQAGAFAIABQAQgBAAgOQAAgFgDgEQgDgDgIgCIgMgGQgSgDABgRQAAgLAHgFQAIgHAKAAQANAAAHAHQAIAHAAAMIgLAAQAAgIgFgEQgFgEgHgBQgGABgFADQgDAEAAAFQAAAKAOAFIAMAFQARAEAAARQAAALgIAGQgHAHgMAAQgNAAgJgIg");
	this.shape_186.setTransform(207.65,21.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_187.setTransform(197.175,22.525);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgQAYQgGgFAAgIIAKAAQAAAFAEACQADADAGAAQAMAAAAgJQAAgEgDgCQgDgCgFAAIgHAAIAAgHIAHAAQAEAAADgCQADgDAAgDQAAgEgDgCQgDgDgGAAQgLAAAAAJIgKAAQAAgHAGgFQAGgFAJAAQAKAAAGAEQAGAFAAAGQAAAMgMABQAGAAADADQAEAEAAAGQAAAHgHAFQgGAEgKAAQgKAAgGgFg");
	this.shape_188.setTransform(191.025,22.525);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgbAhIAAAFIgLAAIAAg3IALAAIAAAnIAbgiIAAgFIALAAIAAA3g");
	this.shape_189.setTransform(184.825,22.525);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgaAcIAAgKIACAAQAKAAAAgOIAAgfIApAAIAAA2IgLAAIAAgsIgUAAIAAAVQAAAMgFAGQgEAGgIAAg");
	this.shape_190.setTransform(177.875,22.55);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_191.setTransform(171.125,22.525);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_192.setTransform(164.425,22.525);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_193.setTransform(157.325,22.525);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAOAcIgOgVIgNAVIgNAAIAVgcIgVgbIANAAIANAUIAOgUIAMAAIgUAbIAVAcg");
	this.shape_194.setTransform(147.725,22.525);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAVAcIAAg3IAKAAIAAA3gAgeAcIAAg3IAKAAIAAAUIAPAAQAHAAAGAFQAFAEAAAIQAAAHgGAFQgFAGgIAAgAgUATIANAAQAFAAACgCQACgDAAgEQAAgFgCgCQgCgDgEAAIgOAAg");
	this.shape_195.setTransform(140.875,22.525);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_196.setTransform(133.475,22.525);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_197.setTransform(126.725,22.525);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_198.setTransform(119.625,22.525);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AATAjIAAgPIglAAIAAAPIgLAAIAAgZIAGAAQAFgCAAgLIAAgfIAqAAIAAAsIAGAAIAAAZgAgIgDQAAAJgEAFIAaAAIAAgkIgWAAg");
	this.shape_199.setTransform(112.825,23.25);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_200.setTransform(102.425,22.525);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_201.setTransform(95.725,22.525);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_202.setTransform(85.575,22.525);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_203.setTransform(78.875,22.525);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgVAVQgHgIAAgNQAAgLAIgJQAHgIANAAQANAAAFALIAAgKIALAAIAAA3IgLAAIAAgKQgCAFgGADQgFADgFAAQgNAAgIgIgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHAAQAJAAAFgGQAFgGAAgIQAAgHgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_204.setTransform(71.775,22.525);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgVAcIAAg3IAZAAQAJAAAFAFQADAEAAAGQAAAFgDADQgEAEgFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgFAGgKAAgAgLAUIAOAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAIgOAAgAgLgDIAOAAQADAAADgDQACgCAAgDQAAgDgDgDQgCgCgDAAIgOAAg");
	this.shape_205.setTransform(65.725,22.525);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAIgIAMAAQANAAAIAIQAIAJAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgNgNQgEAGAAAHQAAAJAEAFQAGAGAHAAQAJAAAFgGQAEgFAAgJQAAgIgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_206.setTransform(59.275,22.525);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAPAcIAAgYIgcAAIAAAYIgLAAIAAg3IALAAIAAAXIAcAAIAAgXIAKAAIAAA3g");
	this.shape_207.setTransform(52.575,22.525);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgSAVQgIgIAAgNQAAgMAIgIQAHgIAMAAQALAAAHAGQAGAFACALIgLAAQgCgNgNAAQgHAAgFAFQgEAGAAAIQAAAJAEAGQAFAEAHAAQANABACgMIALAAQgCAJgGAGQgHAGgLAAQgMAAgHgIg");
	this.shape_208.setTransform(46.125,22.55);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgfAfQgLgMAAgTQAAgRALgNQAMgNATAAQAUAAAMANQALANAAARQAAATgLAMQgMANgUAAQgTAAgMgNgAgWgXQgJAJAAAOQAAAPAJAJQAIAKAOAAQAPAAAJgKQAIgJAAgPQAAgOgIgJQgJgKgPAAQgOAAgIAKg");
	this.shape_209.setTransform(38.225,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.disclamer, new cjs.Rectangle(31.5,12.5,292.8,90.4), null);


(lib.card_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtAvQgSgRAAgeQAAgcASgSQASgRAcAAQAcAAARAQQASAQAAAaIgBAPIhYAAQABAZAaAAQASAAAFgMIAlAAQgDASgQALQgRAMgYAAQgdAAgSgRgAAagMQAAgMgGgHQgHgGgMAAQgLAAgHAHQgIAHAAALIAzAAIAAAAg");
	this.shape.setTransform(128.925,12.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAvQgSgRAAgeQAAgcASgSQASgRAcAAQAcAAARAQQASAQAAAaIgBAPIhYAAQABAZAaAAQASAAAFgMIAlAAQgDASgQALQgRAMgYAAQgdAAgSgRgAAagMQAAgMgGgHQgHgGgMAAQgLAAgHAHQgIAHAAALIAzAAIAAAAg");
	this.shape_1.setTransform(114.975,12.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA8IAAgtIgsAAIAAAtIgmAAIAAh3IAmAAIAAAsIAsAAIAAgsIAlAAIAAB3g");
	this.shape_2.setTransform(100.325,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBAQgSgWAAgmQAAhcBaAAIAeAAIAAAgIghAAQgaAAgNAMQgMAMgCAaQAEgNAOgIQAMgHAOAAQAbAAAPASQAPAQAAAaQAAAagSASQgSATgdAAQghAAgTgZgAgTAEQgHAIAAAOQAAAOAHAJQAIAIANABQANAAAHgKQAIgJAAgNQAAgNgIgJQgHgIgNAAQgNAAgIAIg");
	this.shape_3.setTransform(85.375,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwAtQgSgRAAgcQAAgbASgSQATgSAeAAQAdAAATASQARASAAAbQAAAcgRARQgTATgdAAQgeAAgTgTgAgUgWQgHAJAAANQAAAOAHAIQAIAJANAAQANAAAHgJQAIgIAAgOQAAgNgIgJQgHgJgNAAQgNAAgIAJg");
	this.shape_4.setTransform(70.5,12.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBBXIAAipIAmAAIAAARQAFgJAKgGQALgFAMgBQAZABAPARQAPARAAAcQAAAcgQARQgPASgZAAQgMAAgKgGQgKgFgFgKIAABEgAgVgtQgIAIAAAOQAAAOAIAJQAIAIANAAQAMAAAHgIQAIgJAAgOQAAgNgIgJQgIgJgLAAQgNAAgIAJg");
	this.shape_5.setTransform(55.925,14.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBLIAAgeIhIAAIAAAeIgmAAIAAg/IAOAAQALgGAAgSIAAg+IBsAAIAABWIAOAAIAAA/gAgLgNQAAAQgJAMIAqAAIAAg9IghAAg");
	this.shape_6.setTransform(39.625,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwAtQgRgRAAgcQAAgbARgSQATgSAdAAQAfAAASASQASASAAAbQAAAcgSARQgSATgfAAQgdAAgTgTgAgUgWQgHAJAAANQAAAOAHAIQAIAJAMAAQANAAAJgJQAHgIAAgOQAAgNgHgJQgJgJgNAAQgMAAgIAJg");
	this.shape_7.setTransform(24.65,12.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBXIAAiLIg7AAIAACLIgoAAIAAitICLAAIAACtg");
	this.shape_8.setTransform(8.725,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-7.1,142,35.6);


(lib.btn_plashka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731982").s().p("AqxD2IAAnrIVjAAIAAHrg");
	this.shape.setTransform(68.975,24.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,49.1);


(lib.bg_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("EjU8AirMAAAhFUMGp4AAAMAAABFUg");
	this.shape.setTransform(389,113.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_black, new cjs.Rectangle(-973.8,-107.9,2725.7,443.70000000000005), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("EjYlAbvMAAAg3dMGxLAAAMAAAA3dg");
	this.shape.setTransform(409.35,123.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-976.9,-54.3,2772.5,355.1), null);


(lib.trail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(202.7,14.1,1,1,0,0,0,202.7,22.7);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(147,12,60,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// Layer_1 copy
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,147.65,1,1,0,0,0,149.9,142);
	this.instance_1.alpha = 0.2891;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,304,288);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:146,alpha:0.1719},4,cjs.Ease.quadIn).to({y:147.65,alpha:0.2891},3,cjs.Ease.quadOut).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.9,142,1,1,0,0,0,149.9,142);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-32,394.9,407.2);


(lib.round_01_pulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.round_01();
	this.instance.parent = this;
	this.instance.setTransform(1.4,1.4,0.0454,0.0454,0,0,0,30.8,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.3,regY:30.3,scaleX:0.0463,scaleY:0.0463},0).wait(1).to({scaleX:0.0476,scaleY:0.0476},0).wait(1).to({scaleX:0.0493,scaleY:0.0493},0).wait(1).to({scaleX:0.0515,scaleY:0.0515},0).wait(1).to({scaleX:0.0546,scaleY:0.0546},0).wait(1).to({scaleX:0.0588,scaleY:0.0588},0).wait(1).to({regX:30.1,regY:30.1,scaleX:0.0649,scaleY:0.0649},0).wait(1).to({regX:30.3,regY:30.3,scaleX:0.0576,scaleY:0.0576,x:1.45,y:1.45},0).wait(1).to({scaleX:0.0546,scaleY:0.0546},0).wait(1).to({scaleX:0.0524,scaleY:0.0524},0).wait(1).to({scaleX:0.0508,scaleY:0.0508},0).wait(1).to({scaleX:0.0494,scaleY:0.0494},0).wait(1).to({scaleX:0.0483,scaleY:0.0483,x:1.4,y:1.4},0).wait(1).to({scaleX:0.0474,scaleY:0.0474,x:1.45,y:1.45},0).wait(1).to({scaleX:0.0467,scaleY:0.0467,x:1.4,y:1.4},0).wait(1).to({scaleX:0.0462,scaleY:0.0462},0).wait(1).to({scaleX:0.0458,scaleY:0.0458},0).wait(1).to({scaleX:0.0455,scaleY:0.0455},0).wait(1).to({regX:30.8,regY:30.8,scaleX:0.0454,scaleY:0.0454},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,3.9,3.9);


(lib.megafon_logo_animated2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		///////* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKFKQhAgagxgyQgygygbhAQgchDAAhJQAAhIAchCQAbhBAygyQAxgxBAgbQBCgdBIAAQBIAABDAdQA/AbAyAxQAxAyAbBBQAdBCgBBIQABBJgdBDQgaBAgyAyQgyAyg/AaQhDAdhIAAQhIAAhCgdgADWB3QgNANAAATQAAASANAOQANANATAAQASAAANgNQANgOABgSQgBgTgNgNQgNgNgSAAQgTAAgNANgABvB3QgOANAAATQAAASAOAOQANANASAAQAUAAAMgNQANgOAAgSQAAgTgNgNQgMgNgUAAQgSAAgNANgAAJB3QgMANgBATQABASAMAOQANANASAAQATAAAOgNQANgOgBgSQABgTgNgNQgOgNgTAAQgSAAgNANg");
	mask.setTransform(35.65,35.9);

	// Layer_2
	this.instance = new lib.megafon_face();
	this.instance.parent = this;
	this.instance.setTransform(-26.55,36.95,1,1,0,0,0,7.8,42.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({regX:52.5,regY:42.3,x:30.05,y:36.75},0).wait(1).to({x:38.35},0).wait(1).to({x:45.1},0).wait(1).to({x:50.9},0).wait(1).to({x:55.85},0).wait(1).to({x:60.15},0).wait(1).to({x:63.75},0).wait(1).to({x:66.7},0).wait(1).to({x:69.05},0).wait(1).to({x:70.95},0).wait(1).to({x:72.5},0).wait(1).to({x:73.75},0).wait(1).to({x:74.75},0).wait(1).to({x:75.55},0).wait(1).to({x:76.15},0).wait(1).to({x:76.6},0).wait(1).to({x:76.9},0).wait(1).to({x:77.05},0).wait(1).to({regX:7.8,regY:42.5,x:32.45,y:36.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,71.3,71.7);


(lib.megafon_logo_animated_horiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT
	this.instance = new lib.slogan_07_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-70.8,-280.75,2.32,2.32,0,0,0,47.8,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({startPosition:19},0).to({alpha:0},7).to({_off:true},10).wait(292));

	// Layer_3
	this.instance_1 = new lib.megafon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.1,-34.7,1.3127,1.3127,0,0,0,77.2,10.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(13).to({regX:77.1,regY:10.6,x:28.75,y:-34.85},0).wait(1).to({x:25},0).wait(1).to({x:18.9},0).wait(1).to({x:10.85},0).wait(1).to({x:1.6},0).wait(1).to({x:-7.9},0).wait(1).to({x:-16.5},0).wait(1).to({x:-23.3},0).wait(1).to({x:-27.55},0).wait(1).to({regX:77.2,regY:10.7,x:-28.85,y:-34.7},0).wait(109).to({alpha:0},7).to({_off:true},10).wait(292));

	// Layer_10
	this.instance_2 = new lib.megafon_logo_animated2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-106.5,-34.1,0.0719,0.0719,0,0,0,35.5,36.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:35.6,regY:35.9,scaleX:0.0981,scaleY:0.0981,x:-106.45,alpha:0.0338,startPosition:1},0).wait(1).to({scaleX:0.1377,scaleY:0.1377,alpha:0.0851,startPosition:2},0).wait(1).to({scaleX:0.1949,scaleY:0.1949,x:-106.4,alpha:0.1591,startPosition:3},0).wait(1).to({scaleX:0.276,scaleY:0.276,x:-106.45,alpha:0.264,startPosition:4},0).wait(1).to({scaleX:0.3916,scaleY:0.3916,x:-106.4,y:-34.15,alpha:0.4137,startPosition:5},0).wait(1).to({scaleX:0.5631,scaleY:0.5631,x:-106.35,alpha:0.6356,startPosition:6},0).wait(1).to({regY:36.1,scaleX:0.8446,scaleY:0.8446,x:-106.5,y:-33.95,alpha:1,startPosition:7},0).wait(1).to({regY:35.9,scaleX:0.7834,scaleY:0.7834,y:-34.1,startPosition:8},0).wait(1).to({scaleX:0.7335,scaleY:0.7335,y:-34.15,startPosition:9},0).wait(1).to({scaleX:0.6967,scaleY:0.6967,x:-106.55,y:-34.2,startPosition:10},0).wait(1).to({scaleX:0.6745,scaleY:0.6745,startPosition:11},0).wait(1).to({scaleX:0.6671,scaleY:0.6671,x:-106.5,y:-34.1,startPosition:12},0).wait(11).to({mode:"single",startPosition:29},0).wait(22).to({startPosition:29},0).wait(1).to({scaleX:0.6963,scaleY:0.6963,x:-106.45},0).wait(1).to({scaleX:0.7549,scaleY:0.7549,x:-106.5},0).wait(1).to({scaleX:0.8201,scaleY:0.8201,x:-106.45},0).wait(1).to({regX:35.5,scaleX:0.8625,scaleY:0.8625,x:-106.55},0).wait(1).to({regX:35.6,scaleX:0.8187,scaleY:0.8187,x:-106.4,y:-34.05},0).wait(1).to({scaleX:0.7714,scaleY:0.7714,x:-106.45},0).wait(1).to({scaleX:0.7186,scaleY:0.7186,x:-106.4},0).wait(1).to({scaleX:0.6571,scaleY:0.6571,x:-106.45},0).wait(1).to({scaleX:0.582,scaleY:0.582},0).wait(1).to({scaleX:0.4864,scaleY:0.4864,y:-34.1},0).wait(1).to({scaleX:0.3631,scaleY:0.3631,y:-34.05},0).wait(1).to({scaleX:0.2111,scaleY:0.2111,x:-106.5},0).wait(1).to({regX:35.9,scaleX:0.0391,scaleY:0.0391,y:-34.1},0).to({_off:true},1).wait(421));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_13 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_14 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBRhSB0AAIbsAAQB0AABSBSQBRBSAABzQAABzhRBRQhSBSh0AAg");
	var mask_graphics_15 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_16 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBShSBzAAIbsAAQB0AABSBSQBRBSAABzQAABzhRBRQhSBSh0AAg");
	var mask_graphics_17 = new cjs.Graphics().p("At1D4Qh0AAhShSQhRhRAAhzQAAh0BRhRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_18 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_19 = new cjs.Graphics().p("At1D4Qh0AAhShSQhRhRAAhzQAAh0BRhRQBRhSB1AAIbsAAQBzAABRBSQBTBSAABzQAABzhTBRQhRBShzAAg");
	var mask_graphics_20 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_21 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_22 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_23 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_24 = new cjs.Graphics().p("At1D4Qh0AAhShSQhRhRAAhzQAAh0BRhRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_25 = new cjs.Graphics().p("At1D4Qh0AAhShSQhShRABhzQgBh0BShRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_26 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_27 = new cjs.Graphics().p("At1D4Qh0AAhShSQhShRABhzQgBh0BShRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_28 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_29 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBRhSB0AAIbsAAQB0AABSBSQBRBSAABzQAABzhRBRQhSBSh0AAg");
	var mask_graphics_30 = new cjs.Graphics().p("At1D4Qh0AAhShSQhRhRAAhzQAAh0BRhRQBRhSB1AAIbsAAQBzAABRBSQBTBSAABzQAABzhTBRQhRBShzAAg");
	var mask_graphics_31 = new cjs.Graphics().p("At2D4QhzAAhShSQhRhRgBhzQABh0BRhRQBShSBzAAIbsAAQB0AABSBSQBRBSAABzQAABzhRBRQhSBSh0AAg");
	var mask_graphics_32 = new cjs.Graphics().p("At1D4Qh0AAhShSQhShRABhzQgBh0BShRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_33 = new cjs.Graphics().p("At1D4Qh0AAhShSQhShRABhzQgBh0BShRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_34 = new cjs.Graphics().p("At1D4Qh0AAhShSQhRhRAAhzQAAh0BRhRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_35 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_36 = new cjs.Graphics().p("At1D4Qh0AAhShSQhShRABhzQgBh0BShRQBRhSB1AAIbsAAQBzAABSBSQBSBSAABzQAABzhSBRQhSBShzAAg");
	var mask_graphics_37 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_38 = new cjs.Graphics().p("At2D4QhzAAhShSQhShRAAhzQAAh0BShRQBShSBzAAIbsAAQB0AABRBSQBSBSAABzQAABzhSBRQhRBSh0AAg");
	var mask_graphics_39 = new cjs.Graphics().p("At1D4Qh0AAhShSQhRhRAAhzQAAh0BRhRQBRhSB1AAIbsAAQBzAABRBSQBTBSAABzQAABzhTBRQhRBShzAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39,y:-30.975}).wait(13).to({graphics:mask_graphics_13,x:39,y:-30.975}).wait(1).to({graphics:mask_graphics_14,x:39.1986,y:-30.975}).wait(1).to({graphics:mask_graphics_15,x:39.3797,y:-30.975}).wait(1).to({graphics:mask_graphics_16,x:39.5452,y:-30.975}).wait(1).to({graphics:mask_graphics_17,x:39.6969,y:-30.975}).wait(1).to({graphics:mask_graphics_18,x:39.8362,y:-30.975}).wait(1).to({graphics:mask_graphics_19,x:39.9641,y:-30.975}).wait(1).to({graphics:mask_graphics_20,x:40.0817,y:-30.975}).wait(1).to({graphics:mask_graphics_21,x:40.1897,y:-30.975}).wait(1).to({graphics:mask_graphics_22,x:40.2888,y:-30.975}).wait(1).to({graphics:mask_graphics_23,x:40.3797,y:-30.975}).wait(1).to({graphics:mask_graphics_24,x:40.4628,y:-30.975}).wait(1).to({graphics:mask_graphics_25,x:40.5386,y:-30.975}).wait(1).to({graphics:mask_graphics_26,x:40.6075,y:-30.975}).wait(1).to({graphics:mask_graphics_27,x:40.6699,y:-30.975}).wait(1).to({graphics:mask_graphics_28,x:40.7261,y:-30.975}).wait(1).to({graphics:mask_graphics_29,x:40.7763,y:-30.975}).wait(1).to({graphics:mask_graphics_30,x:40.8209,y:-30.975}).wait(1).to({graphics:mask_graphics_31,x:40.8601,y:-30.975}).wait(1).to({graphics:mask_graphics_32,x:40.894,y:-30.975}).wait(1).to({graphics:mask_graphics_33,x:40.923,y:-30.975}).wait(1).to({graphics:mask_graphics_34,x:40.947,y:-30.975}).wait(1).to({graphics:mask_graphics_35,x:40.9664,y:-30.975}).wait(1).to({graphics:mask_graphics_36,x:40.9813,y:-30.975}).wait(1).to({graphics:mask_graphics_37,x:40.9918,y:-30.975}).wait(1).to({graphics:mask_graphics_38,x:40.998,y:-30.975}).wait(1).to({graphics:mask_graphics_39,x:41,y:-30.975}).wait(1).to({graphics:null,x:0,y:0}).wait(440));

	// Layer_12
	this.instance_3 = new lib.megafon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-203.9,-34.7,1.3127,1.3127,0,0,0,77.2,10.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({regX:77.1,regY:10.6,x:-179.3,y:-34.85},0).wait(1).to({x:-156.7},0).wait(1).to({x:-136},0).wait(1).to({x:-117.1},0).wait(1).to({x:-99.85},0).wait(1).to({x:-84.15},0).wait(1).to({x:-69.85},0).wait(1).to({x:-56.9},0).wait(1).to({x:-45.2},0).wait(1).to({x:-34.6},0).wait(1).to({x:-25.1},0).wait(1).to({x:-16.55},0).wait(1).to({x:-8.95},0).wait(1).to({x:-2.25},0).wait(1).to({x:3.7},0).wait(1).to({x:8.9},0).wait(1).to({x:13.4},0).wait(1).to({x:17.25},0).wait(1).to({x:20.55},0).wait(1).to({x:23.25},0).wait(1).to({x:25.45},0).wait(1).to({x:27.15},0).wait(1).to({x:28.45},0).wait(1).to({x:29.3},0).wait(1).to({x:29.8},0).wait(1).to({regX:77.2,regY:10.7,x:30.1,y:-34.7},0).to({_off:true},1).wait(440));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.4,-344.5,720,341.4);


(lib.supersign_repstay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_03
	this.instance = new lib.round_03();
	this.instance.parent = this;
	this.instance.setTransform(188.8,201.7,0.266,0.266,0,0,0,30.7,30.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(1).to({regX:30.4,regY:30.3,scaleX:0.3315,scaleY:0.3315,x:188.75,y:201.55},0).wait(1).to({scaleX:0.4097,scaleY:0.4097,x:188.7},0).wait(1).to({scaleX:0.502,scaleY:0.502,x:188.65,y:201.5},0).wait(1).to({scaleX:0.6103,scaleY:0.6103},0).wait(1).to({scaleX:0.7371,scaleY:0.7371},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,y:201.4},0).wait(1).to({scaleX:1.0642,scaleY:1.0642,x:188.6},0).wait(1).to({regX:30.7,regY:30.7,scaleX:1.2813,scaleY:1.2813,x:189,y:201.8},0).wait(1).to({regX:30.4,regY:30.3,scaleX:1.1814,scaleY:1.1814,x:188.5,y:201.2},0).wait(1).to({scaleX:1.1056,scaleY:1.1056},0).wait(1).to({scaleX:1.0556,scaleY:1.0556,x:188.45,y:201.15},0).wait(1).to({regX:30.5,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:188.75,y:201.6},0).wait(18).to({regX:30.4,regY:30.3,scaleX:1.0373,scaleY:1.0373,x:188.6,y:201.35},0).wait(1).to({scaleX:1.0476,scaleY:1.0476},0).wait(1).to({scaleX:1.0597,scaleY:1.0597},0).wait(1).to({scaleX:1.0738,scaleY:1.0738},0).wait(1).to({scaleX:1.0905,scaleY:1.0905,y:201.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:188.65},0).wait(1).to({scaleX:1.1333,scaleY:1.1333},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.1617,scaleY:1.1617,x:188.85,y:201.65},0).wait(1).to({regX:30.4,regY:30.3,scaleX:1.1091,scaleY:1.1091,x:188.55,y:201.25},0).wait(1).to({scaleX:1.0692,scaleY:1.0692},0).wait(1).to({scaleX:1.0429,scaleY:1.0429},0).wait(1).to({regX:30.5,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:188.75,y:201.6},0).wait(18).to({regX:30.4,regY:30.3,scaleX:1.0645,scaleY:1.0645,x:188.6,y:201.35},0).wait(1).to({scaleX:1.1144,scaleY:1.1144,x:188.7,y:201.4},0).wait(1).to({scaleX:1.1831,scaleY:1.1831,y:201.45},0).wait(1).to({regX:30.7,regY:30.7,scaleX:1.2813,scaleY:1.2813,x:189,y:201.8},0).wait(1).to({regX:30.4,regY:30.3,scaleX:1.0695,scaleY:1.0695,x:188.6,y:201.3,alpha:0.7913},0).wait(1).to({scaleX:0.8795,scaleY:0.8795,x:188.65,y:201.4,alpha:0.6043},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,y:201.45,alpha:0.4414},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,alpha:0.3041},0).wait(1).to({scaleX:0.4617,scaleY:0.4617,x:188.7,y:201.5,alpha:0.1927},0).wait(1).to({scaleX:0.3738,scaleY:0.3738,y:201.55,alpha:0.1062},0).wait(1).to({scaleX:0.3094,scaleY:0.3094,y:201.6,alpha:0.0427},0).wait(1).to({regX:30.7,regY:30.7,scaleX:0.266,scaleY:0.266,x:188.8,y:201.7,alpha:0},0).wait(1));

	// round_04
	this.instance_1 = new lib.round_04copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.3,201.7,0.2677,0.2677,0,0,0,30.7,30.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:0.333,scaleY:0.333,x:120.15,y:201.6},0).wait(1).to({scaleX:0.4111,scaleY:0.4111,x:120.1,y:201.55},0).wait(1).to({scaleX:0.5033,scaleY:0.5033,y:201.5},0).wait(1).to({scaleX:0.6114,scaleY:0.6114,x:120.05,y:201.45},0).wait(1).to({scaleX:0.738,scaleY:0.738,x:120},0).wait(1).to({scaleX:0.887,scaleY:0.887,x:119.95},0).wait(1).to({scaleX:1.0646,scaleY:1.0646,x:119.85,y:201.35},0).wait(1).to({regX:30.7,regY:30.7,scaleX:1.2813,scaleY:1.2813,x:120.35,y:201.8},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1814,scaleY:1.1814,x:119.8,y:201.2},0).wait(1).to({scaleX:1.1056,scaleY:1.1056},0).wait(1).to({scaleX:1.0556,scaleY:1.0556,y:201.15},0).wait(1).to({regX:30.6,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:120.25,y:201.6},0).wait(18).to({regX:30.3,regY:30.3,scaleX:1.0373,scaleY:1.0373,x:119.9,y:201.35},0).wait(1).to({scaleX:1.0476,scaleY:1.0476},0).wait(1).to({scaleX:1.0597,scaleY:1.0597},0).wait(1).to({scaleX:1.0738,scaleY:1.0738},0).wait(1).to({scaleX:1.0905,scaleY:1.0905,y:201.4},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.1333,scaleY:1.1333},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.1617,scaleY:1.1617,x:120.2,y:201.65},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1091,scaleY:1.1091,x:119.85,y:201.25},0).wait(1).to({scaleX:1.0692,scaleY:1.0692},0).wait(1).to({scaleX:1.0429,scaleY:1.0429},0).wait(1).to({regX:30.6,regY:30.5,scaleX:1.0287,scaleY:1.0287,x:120.25,y:201.6},0).wait(18).to({regX:30.3,regY:30.3,scaleX:1.0645,scaleY:1.0645,x:119.9,y:201.35},0).wait(1).to({scaleX:1.1144,scaleY:1.1144,y:201.4},0).wait(1).to({scaleX:1.1831,scaleY:1.1831,y:201.45},0).wait(1).to({regX:30.7,regY:30.7,scaleX:1.2813,scaleY:1.2813,x:120.35,y:201.8},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.0698,scaleY:1.0698,x:119.85,y:201.3,alpha:0.7913},0).wait(1).to({scaleX:0.8802,scaleY:0.8802,x:119.95,y:201.35,alpha:0.6043},0).wait(1).to({scaleX:0.7151,scaleY:0.7151,x:120,y:201.4,alpha:0.4414},0).wait(1).to({scaleX:0.5759,scaleY:0.5759,x:120.05,y:201.45,alpha:0.3041},0).wait(1).to({scaleX:0.463,scaleY:0.463,x:120.15,y:201.55,alpha:0.1927},0).wait(1).to({scaleX:0.3753,scaleY:0.3753,x:120.1,y:201.5,alpha:0.1062},0).wait(1).to({scaleX:0.311,scaleY:0.311,x:120.15,y:201.55,alpha:0.0427},0).wait(1).to({regX:30.7,regY:30.7,scaleX:0.2677,scaleY:0.2677,x:120.3,y:201.7,alpha:0},0).wait(9));

	// round_04
	this.instance_2 = new lib.round_04copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.5,201.65,0.2691,0.2691,0,0,0,30.4,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:30.3,regY:30.3,scaleX:0.3344,scaleY:0.3344,x:51.45,y:201.6},0).wait(1).to({scaleX:0.4124,scaleY:0.4124,x:51.4,y:201.55},0).wait(1).to({scaleX:0.5045,scaleY:0.5045},0).wait(1).to({scaleX:0.6124,scaleY:0.6124,y:201.5},0).wait(1).to({scaleX:0.7389,scaleY:0.7389},0).wait(1).to({scaleX:0.8878,scaleY:0.8878,x:51.35,y:201.45},0).wait(1).to({scaleX:1.0652,scaleY:1.0652,y:201.4},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.2817,scaleY:1.2817,x:51.6,y:201.6},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1816,scaleY:1.1816,x:51.2,y:201.2},0).wait(1).to({scaleX:1.1057,scaleY:1.1057,x:51.15,y:201.25},0).wait(1).to({scaleX:1.0557,scaleY:1.0557},0).wait(1).to({regX:30.4,regY:30.5,scaleX:1.0288,scaleY:1.0288,x:51.45,y:201.6},0).wait(18).to({regX:30.3,regY:30.3,scaleX:1.0373,scaleY:1.0373,x:51.3,y:201.35},0).wait(1).to({scaleX:1.0474,scaleY:1.0474,x:51.35},0).wait(1).to({scaleX:1.0593,scaleY:1.0593,x:51.3},0).wait(1).to({scaleX:1.0733,scaleY:1.0733,y:201.3},0).wait(1).to({scaleX:1.0897,scaleY:1.0897},0).wait(1).to({scaleX:1.1091,scaleY:1.1091,x:51.35,y:201.35},0).wait(1).to({scaleX:1.1321,scaleY:1.1321},0).wait(1).to({regX:30.5,regY:30.6,scaleX:1.1601,scaleY:1.1601,x:51.55,y:201.65},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1082,scaleY:1.1082,x:51.25,y:201.3},0).wait(1).to({scaleX:1.0687,scaleY:1.0687},0).wait(1).to({scaleX:1.0428,scaleY:1.0428,x:51.2},0).wait(1).to({regX:30.4,regY:30.5,scaleX:1.0288,scaleY:1.0288,x:51.45,y:201.6},0).wait(18).to({regX:30.3,regY:30.3,scaleX:1.0646,scaleY:1.0646,x:51.3,y:201.35},0).wait(1).to({scaleX:1.1145,scaleY:1.1145,y:201.3},0).wait(1).to({scaleX:1.1833,scaleY:1.1833,x:51.35,y:201.35},0).wait(1).to({regX:30.6,regY:30.6,scaleX:1.2817,scaleY:1.2817,x:51.6,y:201.6},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.0704,scaleY:1.0704,x:51.25,y:201.3,alpha:0.7913},0).wait(1).to({scaleX:0.881,scaleY:0.881,x:51.3,y:201.35,alpha:0.6043},0).wait(1).to({scaleX:0.716,scaleY:0.716,y:201.4,alpha:0.4414},0).wait(1).to({scaleX:0.577,scaleY:0.577,x:51.35,y:201.45,alpha:0.3041},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,alpha:0.1927},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,y:201.5,alpha:0.1062},0).wait(1).to({scaleX:0.3124,scaleY:0.3124,x:51.4,alpha:0.0427},0).wait(1).to({regX:30.4,regY:30.4,scaleX:0.2691,scaleY:0.2691,x:51.5,y:201.65,alpha:0},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.4,162.4,215.1,77.79999999999998);


(lib.megafon_logo_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// Layer_2
	this.instance = new lib.megafon_face_1();
	this.instance.parent = this;
	this.instance.setTransform(-26.55,36.95,1,1,0,0,0,7.8,42.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(1).to({regX:7.7,regY:42.4,x:-14.75,y:36.85},0).wait(1).to({x:-6.45},0).wait(1).to({x:0.3},0).wait(1).to({x:6.1},0).wait(1).to({x:11.05},0).wait(1).to({x:15.35},0).wait(1).to({x:18.95},0).wait(1).to({x:21.9},0).wait(1).to({x:24.25},0).wait(1).to({x:26.15},0).wait(1).to({x:27.7},0).wait(1).to({x:28.95},0).wait(1).to({x:29.95},0).wait(1).to({x:30.75},0).wait(1).to({x:31.35},0).wait(1).to({x:31.8},0).wait(1).to({x:32.1},0).wait(1).to({x:32.25},0).wait(1).to({regX:7.8,regY:42.5,x:32.45,y:36.95},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.megafon_round();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,35.9,1,1,0,0,0,35.6,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-5.5,105.6,84.9);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgEAsQgRAAgNgNQgNgNAAgSQAAgRANgNQANgNARAAIAIAAQATAAAMANQANANAAARQAAASgNANQgMANgTAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AgHBRQggAAgWgYQgXgXAAgiQAAggAXgYQAXgYAfAAIAPAAQAgAAAWAYQAXAYAAAgQAAAigXAXQgWAYggAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AgKB1QguAAgggiQgggiAAgxQAAgvAggjQAhgiAtAAIAVAAQAuAAAgAiQAgAjAAAvQAAAxggAiQggAiguAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AgNCaQg8AAgqgtQgqgtAAhAQAAg/AqgtQArgtA7AAIAbAAQA8AAAqAtQAqAtAAA/QAABAgqAtQgqAtg8AAg");
	var mask_graphics_4 = new cjs.Graphics().p("AgRC/QhJAAg0g4Qgzg4AAhPQAAhOAzg4QA1g4BIAAIAjAAQBJAAA0A4QAzA4AABOQAABQgzA3Qg0A4hJAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AgUDkQhXAAg+hDQg9hDAAheQAAhdA9hDQA+hDBXAAIApAAQBXAAA9BDQA+BDAABdQAABfg+BCQg9BDhXAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AgXEJQhlAAhIhOQhHhNAAhuQAAhsBHhOQBIhOBlAAIAvAAQBlAABHBOQBIBNAABtQAABuhIBNQhGBOhmAAg");
	var mask_graphics_7 = new cjs.Graphics().p("ADMEuQhyAAhShZQhPhYAAh9QAAh7BPhaQBShYByAAIA4AAQByAABRBYQBRBZAAB8QAAB+hRBXQhQBZhzAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AgaEiQhuAAhOhVQhNhVAAh4QAAh3BNhVQBPhVBtAAIA1AAQBuAABNBVQBOBVAAB3QAAB5hOBUQhNBVhuAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AgYEWQhqAAhLhSQhKhRAAhzQAAhyBKhSQBMhRBpAAIAyAAQBpAABKBRQBLBSAAByQAAB0hLBQQhKBShpAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AgXEKQhlAAhHhOQhIhOAAhuQAAhtBIhOQBHhOBlAAIAvAAQBlAABHBOQBIBOAABtQAABvhIBNQhGBOhmAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AgWD+QhgAAhEhKQhEhLAAhpQAAhoBEhLQBEhKBgAAIAtAAQBgAABEBKQBEBKAABpQAABqhEBKQhDBKhhAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AgVDyQhcAAhAhHQhBhHAAhkQAAhjBBhIQBBhGBbAAIArAAQBcAABABGQBBBHAABkQAABlhBBGQhABHhcAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Ag/DyQhdAAhChHQhChHAAhkQAAhjBChHQBChHBdAAIB/AAQBdAABCBHQBCBGAABkQAABlhCBGQhBBHheAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AhpDxQhfAAhDhGQhDhHAAhkQAAhjBDhHQBDhGBfAAIDUAAQBeAABDBGQBDBHAABjQAABkhDBHQhCBGhfAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AiTDxQhhAAhEhHQhEhHAAhjQAAhjBEhHQBFhGBgAAIEoAAQBgAABEBGQBEBHAABjQAABkhEBGQhEBHhgAAg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai9DxQhiAAhFhHQhGhHAAhjQAAhjBGhHQBFhGBiAAIF8AAQBiAABEBGQBGBHAABjQAABkhGBGQhEBHhiAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AjoDwQhjAAhGhGQhHhHAAhjQAAhiBHhHQBHhGBiAAIHRAAQBjAABGBGQBHBGAABjQAABkhHBGQhFBGhkAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AkSDwQhlAAhHhGQhIhHAAhjQAAhiBIhHQBIhGBkAAIIlAAQBlAABHBGQBIBGAABjQAABkhIBGQhGBGhmAAg");
	var mask_graphics_19 = new cjs.Graphics().p("Ak8DwQhmAAhJhHQhIhGAAhjQAAhiBIhHQBJhGBmAAIJ5AAQBnAABIBGQBIBGAABjQAABkhIBFQhIBHhnAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlmDvQhoAAhJhGQhKhGAAhjQAAhiBKhHQBKhFBnAAILNAAQBoAABKBFQBJBHAABiQAABjhJBGQhJBGhpAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AmQDvQhqAAhKhGQhLhGAAhjQAAhiBLhGQBLhGBpAAIMiAAQBpAABKBGQBLBGAABiQAABjhLBGQhJBGhqAAg");
	var mask_graphics_22 = new cjs.Graphics().p("Am6DuQhrAAhMhGQhMhFAAhjQAAhiBMhGQBMhFBrAAIN2AAQBrAABLBFQBMBGAABiQAABjhMBFQhLBGhrAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AnlDuQhsAAhNhGQhNhGAAhiQAAhhBNhHQBOhFBrAAIPLAAQBsAABNBFQBNBGAABiQAABjhNBFQhMBGhtAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AoPDuQhuAAhOhGQhOhGAAhiQAAhhBOhGQBPhGBtAAIQfAAQBuAABOBGQBOBFAABiQAABjhOBFQhNBGhvAAg");
	var mask_graphics_25 = new cjs.Graphics().p("Ao5DtQhvAAhPhFQhQhGAAhiQAAhhBQhGQBPhFBvAAIRzAAQBwAABPBFQBPBFAABiQAABjhPBFQhOBFhxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("ApjDtQhxAAhQhGQhRhFAAhiQAAhhBRhGQBRhFBwAAITHAAQByAABPBFQBRBGAABhQAABihRBFQhPBGhyAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AqNDtQhzAAhRhGQhRhFAAhiQAAhhBRhGQBShFByAAIUbAAQBzAABRBFQBRBGAABhQAABihRBFQhQBGh0AAg");
	var mask_graphics_28 = new cjs.Graphics().p("Aq3DsQh0AAhThFQhShFAAhiQAAhhBShFQBThFB0AAIVwAAQB0AABSBFQBSBFAABhQAABihSBFQhRBFh1AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AriDsQh1AAhThFQhUhFAAhiQAAhgBUhGQBUhFB0AAIXFAAQB2AABTBFQBTBFAABhQAABihTBFQhSBFh3AAg");
	var mask_graphics_30 = new cjs.Graphics().p("AsMDrQh3AAhUhFQhVhEAAhiQAAhgBVhGQBVhEB2AAIYZAAQB3AABVBEQBUBFAABhQAABihUBEQhUBFh4AAg");
	var mask_graphics_31 = new cjs.Graphics().p("As2DrQh4AAhWhFQhWhEAAhiQAAhgBWhGQBXhEB3AAIZtAAQB5AABVBEQBWBGAABgQAABihWBEQhUBFh6AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:77.15,y:8.825}).wait(1).to({graphics:mask_graphics_1,x:77.1036,y:8.8571}).wait(1).to({graphics:mask_graphics_2,x:77.0571,y:8.8893}).wait(1).to({graphics:mask_graphics_3,x:77.0107,y:8.9214}).wait(1).to({graphics:mask_graphics_4,x:76.9643,y:8.9536}).wait(1).to({graphics:mask_graphics_5,x:76.9179,y:8.9857}).wait(1).to({graphics:mask_graphics_6,x:76.8714,y:9.0179}).wait(1).to({graphics:mask_graphics_7,x:53.6327,y:9.0536}).wait(1).to({graphics:mask_graphics_8,x:76.905,y:9.035}).wait(1).to({graphics:mask_graphics_9,x:76.985,y:9.02}).wait(1).to({graphics:mask_graphics_10,x:77.065,y:9.005}).wait(1).to({graphics:mask_graphics_11,x:77.145,y:8.99}).wait(1).to({graphics:mask_graphics_12,x:77.225,y:8.975}).wait(1).to({graphics:mask_graphics_13,x:77.2132,y:8.9737}).wait(1).to({graphics:mask_graphics_14,x:77.2013,y:8.9724}).wait(1).to({graphics:mask_graphics_15,x:77.1895,y:8.9711}).wait(1).to({graphics:mask_graphics_16,x:77.1776,y:8.9697}).wait(1).to({graphics:mask_graphics_17,x:77.1658,y:8.9684}).wait(1).to({graphics:mask_graphics_18,x:77.1539,y:8.9671}).wait(1).to({graphics:mask_graphics_19,x:77.1421,y:8.9658}).wait(1).to({graphics:mask_graphics_20,x:77.1303,y:8.9645}).wait(1).to({graphics:mask_graphics_21,x:77.1184,y:8.9632}).wait(1).to({graphics:mask_graphics_22,x:77.1066,y:8.9618}).wait(1).to({graphics:mask_graphics_23,x:77.0947,y:8.9605}).wait(1).to({graphics:mask_graphics_24,x:77.0829,y:8.9592}).wait(1).to({graphics:mask_graphics_25,x:77.0711,y:8.9579}).wait(1).to({graphics:mask_graphics_26,x:77.0592,y:8.9566}).wait(1).to({graphics:mask_graphics_27,x:77.0474,y:8.9553}).wait(1).to({graphics:mask_graphics_28,x:77.0355,y:8.9539}).wait(1).to({graphics:mask_graphics_29,x:77.0237,y:8.9526}).wait(1).to({graphics:mask_graphics_30,x:77.0118,y:8.9513}).wait(1).to({graphics:mask_graphics_31,x:77,y:8.95}).wait(1));

	// Layer_2
	this.instance = new lib.card_text("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.2,8.75,0.9874,0.9874,0,0,0,68,11.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// Layer_4
	this.instance_1 = new lib.round_04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.1,8.85,0.1618,0.1618,0,0,0,30.3,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:30.4,regY:30.1,scaleX:1.0046,scaleY:1.0046,x:77.05},7).to({regY:30.2,scaleX:0.8077,scaleY:0.8077},5).to({x:164.6},19).wait(1));

	// Layer_3
	this.instance_2 = new lib.round_04();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.05,8.85,0.8077,0.8077,0,0,0,30.4,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:-10.15},19).wait(1));

	// Layer_5
	this.instance_3 = new lib.btn_plashka("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.05,9.05,0.0145,1,0,0,0,69,24.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({regX:68.8,scaleX:1.2664,x:76.95},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-21.4,223.8,61);


(lib.cosmo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.trail("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.65,261.25,1,1,0,0,0,149.9,142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(500));

	// Layer_1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.55,74.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-47.5,391.79999999999995,541.9);


(lib.final_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LEGAL
	this.instance = new lib.disclamer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(281,27.65,1,1,0,0,0,102.5,39.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({_off:false},0).to({alpha:1,loop:false},6).wait(40));

	// BUTTON
	this.instance_1 = new lib.button("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(621.45,44.2,0.7197,0.7197,0,0,0,73.5,7.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).wait(186));

	// TXT
	this.instance_2 = new lib.slogan_07("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(239.15,26.55,0.9893,0.9893,0,0,0,48,47.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({mode:"single",startPosition:19},20).wait(114).to({startPosition:19},0).to({alpha:0},6).to({_off:true},1).wait(44));

	// MEGAFON_word
	this.instance_3 = new lib.megafon_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.2,56.4,0.8,0.8,0,0,0,77.5,10.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(1).to({regX:77.1,regY:10.6,x:119.9,y:53.2,alpha:0.243},0).wait(1).to({y:50.9,alpha:0.4318},0).wait(1).to({y:49.1,alpha:0.5804},0).wait(1).to({y:47.65,alpha:0.6978},0).wait(1).to({y:46.55,alpha:0.7901},0).wait(1).to({y:45.65,alpha:0.8616},0).wait(1).to({y:45,alpha:0.9156},0).wait(1).to({y:44.5,alpha:0.9546},0).wait(1).to({y:44.2,alpha:0.9807},0).wait(1).to({y:44,alpha:0.9954},0).wait(1).to({regX:77.5,regY:11,x:120.2,y:44.25,alpha:1},0).wait(185));

	// SIGN_right_two
	this.instance_4 = new lib.round_02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(601.75,35.6,1.3116,1.3116,0,0,0,30.4,30.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.round_01_pulse("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(46.3,50.25,1.2145,1.2145,0,0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},42).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1436,scaleY:1.1436,x:527.2,y:37.45,alpha:0.134},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:467.95,y:39.05,alpha:0.2408},0).wait(1).to({scaleX:0.8988,scaleY:0.8988,x:418.85,y:40.35,alpha:0.3292},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:377.2,y:41.5,alpha:0.4042},0).wait(1).to({scaleX:0.7238,scaleY:0.7238,x:341.35,y:42.45,alpha:0.4688},0).wait(1).to({scaleX:0.6531,scaleY:0.6531,x:310.05,y:43.3,alpha:0.5251},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,x:282.5,y:44,alpha:0.5747},0).wait(1).to({scaleX:0.5358,scaleY:0.5358,x:258.1,y:44.65,alpha:0.6187},0).wait(1).to({scaleX:0.4867,scaleY:0.4867,x:236.35,y:45.25,alpha:0.6578},0).wait(1).to({scaleX:0.4427,scaleY:0.4427,x:216.85,y:45.75,alpha:0.6929},0).wait(1).to({scaleX:0.4033,scaleY:0.4033,x:199.4,y:46.2,alpha:0.7244},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:183.7,y:46.65,alpha:0.7527},0).wait(1).to({scaleX:0.3357,scaleY:0.3357,x:169.45,y:47,alpha:0.7782},0).wait(1).to({scaleX:0.3068,scaleY:0.3068,x:156.7,y:47.35,alpha:0.8013},0).wait(1).to({scaleX:0.2806,scaleY:0.2806,x:145.05,y:47.7,alpha:0.8222},0).wait(1).to({scaleX:0.2568,scaleY:0.2568,x:134.6,y:48,alpha:0.8412},0).wait(1).to({scaleX:0.2353,scaleY:0.2353,x:125.05,y:48.25,alpha:0.8583},0).wait(1).to({scaleX:0.2159,scaleY:0.2159,x:116.45,y:48.45,alpha:0.8738},0).wait(1).to({scaleX:0.1982,scaleY:0.1982,x:108.6,y:48.65,alpha:0.8879},0).wait(1).to({scaleX:0.1822,scaleY:0.1822,x:101.5,y:48.8,alpha:0.9006},0).wait(1).to({scaleX:0.1678,scaleY:0.1678,x:95.15,y:49.05,alpha:0.9122},0).wait(1).to({scaleX:0.1547,scaleY:0.1547,x:89.35,y:49.2,alpha:0.9226},0).wait(1).to({scaleX:0.1428,scaleY:0.1428,x:84.1,y:49.35,alpha:0.9321},0).wait(1).to({scaleX:0.1321,scaleY:0.1321,x:79.35,y:49.45,alpha:0.9406},0).wait(1).to({scaleX:0.1225,scaleY:0.1225,x:75.05,y:49.55,alpha:0.9483},0).wait(1).to({scaleX:0.1138,scaleY:0.1138,x:71.25,y:49.65,alpha:0.9552},0).wait(1).to({scaleX:0.106,scaleY:0.106,x:67.75,y:49.75,alpha:0.9614},0).wait(1).to({scaleX:0.099,scaleY:0.099,x:64.7,y:49.85,alpha:0.967},0).wait(1).to({scaleX:0.0927,scaleY:0.0927,x:61.9,y:49.9,alpha:0.972},0).wait(1).to({scaleX:0.0871,scaleY:0.0871,x:59.4,y:50,alpha:0.9765},0).wait(1).to({scaleX:0.0821,scaleY:0.0821,x:57.2,y:50.05,alpha:0.9805},0).wait(1).to({scaleX:0.0776,scaleY:0.0776,x:55.2,y:50.1,alpha:0.9841},0).wait(1).to({scaleX:0.0737,scaleY:0.0737,x:53.5,y:50.15,alpha:0.9872},0).wait(1).to({scaleX:0.0701,scaleY:0.0701,x:51.9,y:50.2,alpha:0.99},0).wait(1).to({scaleX:0.067,scaleY:0.067,x:50.55,y:50.25,alpha:0.9925},0).wait(1).to({scaleX:0.0643,scaleY:0.0643,x:49.3,alpha:0.9947},0).wait(1).to({scaleX:0.0618,scaleY:0.0618,x:48.2,alpha:0.9967},0).wait(1).to({scaleX:0.0596,scaleY:0.0596,x:47.2,y:50.3,alpha:0.9984},0).wait(1).to({regX:35.6,regY:35.6,scaleX:0.0577,scaleY:0.0577,x:46.4,y:50.35,alpha:1},0).to({_off:true},42).wait(143));

	// SIGN_right
	this.instance_6 = new lib.round_04copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(601.75,35.6,1.3116,1.3116,0,0,0,30.4,30.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1436,scaleY:1.1436,x:527.2,y:37.45},0).wait(1).to({scaleX:1.0097,scaleY:1.0097,x:467.9,y:39.05},0).wait(1).to({scaleX:0.8988,scaleY:0.8988,x:418.85,y:40.35},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:377.2,y:41.5},0).wait(1).to({scaleX:0.7238,scaleY:0.7238,x:341.35,y:42.45},0).wait(1).to({scaleX:0.6532,scaleY:0.6532,x:310.05,y:43.25},0).wait(1).to({scaleX:0.591,scaleY:0.591,x:282.45,y:44},0).wait(1).to({scaleX:0.5359,scaleY:0.5359,x:258.1,y:44.65},0).wait(1).to({scaleX:0.4868,scaleY:0.4868,x:236.3,y:45.25},0).wait(1).to({scaleX:0.4428,scaleY:0.4428,x:216.85,y:45.75},0).wait(1).to({scaleX:0.4034,scaleY:0.4034,x:199.35,y:46.2},0).wait(1).to({scaleX:0.3679,scaleY:0.3679,x:183.65,y:46.65},0).wait(1).to({scaleX:0.3358,scaleY:0.3358,x:169.45,y:47},0).wait(1).to({scaleX:0.3069,scaleY:0.3069,x:156.65,y:47.35},0).wait(1).to({scaleX:0.2807,scaleY:0.2807,x:145.05,y:47.7},0).wait(1).to({scaleX:0.2569,scaleY:0.2569,x:134.55,y:48},0).wait(1).to({scaleX:0.2354,scaleY:0.2354,x:125,y:48.25},0).wait(1).to({scaleX:0.216,scaleY:0.216,x:116.4,y:48.45},0).wait(1).to({scaleX:0.1983,scaleY:0.1983,x:108.55,y:48.65},0).wait(1).to({scaleX:0.1824,scaleY:0.1824,x:101.45,y:48.8},0).wait(1).to({scaleX:0.1679,scaleY:0.1679,x:95.1,y:49.05},0).wait(1).to({scaleX:0.1548,scaleY:0.1548,x:89.3,y:49.2},0).wait(1).to({scaleX:0.1429,scaleY:0.1429,x:84.05,y:49.35},0).wait(1).to({scaleX:0.1323,scaleY:0.1323,x:79.3,y:49.45},0).wait(1).to({scaleX:0.1226,scaleY:0.1226,x:75,y:49.55},0).wait(1).to({scaleX:0.1139,scaleY:0.1139,x:71.2,y:49.65},0).wait(1).to({scaleX:0.1061,scaleY:0.1061,x:67.7,y:49.75},0).wait(1).to({scaleX:0.0991,scaleY:0.0991,x:64.65,y:49.85},0).wait(1).to({scaleX:0.0929,scaleY:0.0929,x:61.85,y:49.9},0).wait(1).to({scaleX:0.0872,scaleY:0.0872,x:59.35,y:50},0).wait(1).to({scaleX:0.0822,scaleY:0.0822,x:57.15,y:50.05},0).wait(1).to({scaleX:0.0778,scaleY:0.0778,x:55.15,y:50.1},0).wait(1).to({scaleX:0.0738,scaleY:0.0738,x:53.4,y:50.15},0).wait(1).to({scaleX:0.0703,scaleY:0.0703,x:51.85,y:50.2},0).wait(1).to({scaleX:0.0671,scaleY:0.0671,x:50.5,y:50.25},0).wait(1).to({scaleX:0.0644,scaleY:0.0644,x:49.25},0).wait(1).to({scaleX:0.0619,scaleY:0.0619,x:48.15,y:50.3},0).wait(1).to({scaleX:0.0597,scaleY:0.0597,x:47.15},0).wait(1).to({regX:34.6,regY:35.5,scaleX:0.0578,scaleY:0.0578,x:46.35,y:50.35},0).to({_off:true},1).wait(184));

	// SIGN_center
	this.instance_7 = new lib.round_02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(511.85,35.6,1.3116,1.3116,0,0,0,30.4,30.4);
	this.instance_7._off = true;

	this.instance_8 = new lib.round_01_pulse("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(42.35,50.25,1.2145,1.2145,0,0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},36).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1436,scaleY:1.1436,x:448.85,y:37.45},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:398.7,y:39.05},0).wait(1).to({scaleX:0.8988,scaleY:0.8988,x:357.25,y:40.35},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:322.05,y:41.5},0).wait(1).to({scaleX:0.7238,scaleY:0.7238,x:291.7,y:42.45},0).wait(1).to({scaleX:0.6531,scaleY:0.6531,x:265.25,y:43.3},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,x:241.95,y:44},0).wait(1).to({scaleX:0.5358,scaleY:0.5358,x:221.35,y:44.65},0).wait(1).to({scaleX:0.4867,scaleY:0.4867,x:202.95,y:45.25},0).wait(1).to({scaleX:0.4427,scaleY:0.4427,x:186.5,y:45.75},0).wait(1).to({scaleX:0.4033,scaleY:0.4033,x:171.7,y:46.2},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:158.45,y:46.65},0).wait(1).to({scaleX:0.3357,scaleY:0.3357,x:146.45,y:47},0).wait(1).to({scaleX:0.3068,scaleY:0.3068,x:135.6,y:47.35},0).wait(1).to({scaleX:0.2806,scaleY:0.2806,x:125.8,y:47.7},0).wait(1).to({scaleX:0.2568,scaleY:0.2568,x:116.95,y:48},0).wait(1).to({scaleX:0.2353,scaleY:0.2353,x:108.9,y:48.25},0).wait(1).to({scaleX:0.2159,scaleY:0.2159,x:101.6,y:48.45},0).wait(1).to({scaleX:0.1982,scaleY:0.1982,x:95,y:48.65},0).wait(1).to({scaleX:0.1822,scaleY:0.1822,x:89,y:48.8},0).wait(1).to({scaleX:0.1678,scaleY:0.1678,x:83.6,y:49.05},0).wait(1).to({scaleX:0.1547,scaleY:0.1547,x:78.7,y:49.2},0).wait(1).to({scaleX:0.1428,scaleY:0.1428,x:74.3,y:49.35},0).wait(1).to({scaleX:0.1321,scaleY:0.1321,x:70.25,y:49.45},0).wait(1).to({scaleX:0.1225,scaleY:0.1225,x:66.65,y:49.55},0).wait(1).to({scaleX:0.1138,scaleY:0.1138,x:63.4,y:49.65},0).wait(1).to({scaleX:0.106,scaleY:0.106,x:60.45,y:49.75},0).wait(1).to({scaleX:0.099,scaleY:0.099,x:57.85,y:49.85},0).wait(1).to({scaleX:0.0927,scaleY:0.0927,x:55.5,y:49.9},0).wait(1).to({scaleX:0.0871,scaleY:0.0871,x:53.4,y:50},0).wait(1).to({scaleX:0.0821,scaleY:0.0821,x:51.55,y:50.05},0).wait(1).to({scaleX:0.0776,scaleY:0.0776,x:49.85,y:50.1},0).wait(1).to({scaleX:0.0737,scaleY:0.0737,x:48.4,y:50.15},0).wait(1).to({scaleX:0.0701,scaleY:0.0701,x:47.05,y:50.2},0).wait(1).to({scaleX:0.067,scaleY:0.067,x:45.9,y:50.25},0).wait(1).to({scaleX:0.0643,scaleY:0.0643,x:44.85},0).wait(1).to({scaleX:0.0618,scaleY:0.0618,x:43.9},0).wait(1).to({scaleX:0.0596,scaleY:0.0596,x:43.1,y:50.3},0).wait(1).to({regX:34.7,regY:35.6,scaleX:0.0577,scaleY:0.0577,x:42.4,y:50.35},0).to({_off:true},36).wait(149));

	// SIGN_left
	this.instance_9 = new lib.round_01_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(422.15,35.6,1.3116,1.3116,0,0,0,30.4,30.4);
	this.instance_9._off = true;

	this.instance_10 = new lib.round_01_pulse("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(38.45,50.45,1.2145,1.2145,0,0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},15).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},30).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:1.1435,scaleY:1.1435,x:370.6,y:37.45},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:329.65,y:39.05},0).wait(1).to({scaleX:0.8988,scaleY:0.8988,x:295.7,y:40.35},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:266.95,y:41.5},0).wait(1).to({scaleX:0.7237,scaleY:0.7237,x:242.15,y:42.45},0).wait(1).to({scaleX:0.6531,scaleY:0.6531,x:220.55,y:43.3},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,x:201.5,y:44},0).wait(1).to({scaleX:0.5358,scaleY:0.5358,x:184.65,y:44.65},0).wait(1).to({scaleX:0.4866,scaleY:0.4866,x:169.6,y:45.25},0).wait(1).to({scaleX:0.4427,scaleY:0.4427,x:156.15,y:45.75},0).wait(1).to({scaleX:0.4032,scaleY:0.4032,x:144.05,y:46.2},0).wait(1).to({scaleX:0.3677,scaleY:0.3677,x:133.2,y:46.65},0).wait(1).to({scaleX:0.3357,scaleY:0.3357,x:123.4,y:47},0).wait(1).to({scaleX:0.3067,scaleY:0.3067,x:114.55,y:47.4},0).wait(1).to({scaleX:0.2805,scaleY:0.2805,x:106.55,y:47.7},0).wait(1).to({scaleX:0.2568,scaleY:0.2568,x:99.3,y:48},0).wait(1).to({scaleX:0.2353,scaleY:0.2353,x:92.7,y:48.25},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:86.75,y:48.45},0).wait(1).to({scaleX:0.1982,scaleY:0.1982,x:81.35,y:48.65},0).wait(1).to({scaleX:0.1822,scaleY:0.1822,x:76.4,y:48.8},0).wait(1).to({scaleX:0.1677,scaleY:0.1677,x:72.05,y:49.05},0).wait(1).to({scaleX:0.1546,scaleY:0.1546,x:68,y:49.2},0).wait(1).to({scaleX:0.1428,scaleY:0.1428,x:64.4,y:49.35},0).wait(1).to({scaleX:0.1321,scaleY:0.1321,x:61.1,y:49.45},0).wait(1).to({scaleX:0.1224,scaleY:0.1224,x:58.15,y:49.55},0).wait(1).to({scaleX:0.1138,scaleY:0.1138,x:55.5,y:49.65},0).wait(1).to({scaleX:0.106,scaleY:0.106,x:53.1,y:49.75},0).wait(1).to({scaleX:0.099,scaleY:0.099,x:51,y:49.85},0).wait(1).to({scaleX:0.0927,scaleY:0.0927,x:49.05,y:49.9},0).wait(1).to({scaleX:0.0871,scaleY:0.0871,x:47.35,y:50},0).wait(1).to({scaleX:0.082,scaleY:0.082,x:45.8,y:50.05},0).wait(1).to({scaleX:0.0776,scaleY:0.0776,x:44.45,y:50.1},0).wait(1).to({scaleX:0.0736,scaleY:0.0736,x:43.25,y:50.15},0).wait(1).to({scaleX:0.0701,scaleY:0.0701,x:42.1},0).wait(1).to({scaleX:0.067,scaleY:0.067,x:41.2,y:50.25},0).wait(1).to({scaleX:0.0642,scaleY:0.0642,x:40.35},0).wait(1).to({scaleX:0.0617,scaleY:0.0617,x:39.55},0).wait(1).to({scaleX:0.0595,scaleY:0.0595,x:38.9,y:50.3},0).wait(1).to({regX:35.6,regY:35.6,scaleX:0.0576,scaleY:0.0576,x:38.35,y:50.35},0).to({_off:true},30).wait(155));

	// BIG_WHITE
	this.instance_11 = new lib.megafon_logo_animated("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(361.8,43.4,10.6943,10.6943,0,0,0,35.3,35.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(1).to({regX:18.5,regY:36.9,scaleX:9.3138,scaleY:9.3138,x:161.8,y:59.4,startPosition:1},0).wait(1).to({scaleX:8.2133,scaleY:8.2133,x:145.6,y:57.65,startPosition:2},0).wait(1).to({scaleX:7.3023,scaleY:7.3023,x:132.2,y:56.2,startPosition:3},0).wait(1).to({scaleX:6.53,scaleY:6.53,x:120.8,y:54.95,startPosition:4},0).wait(1).to({scaleX:5.8642,scaleY:5.8642,x:110.95,y:53.95,startPosition:5},0).wait(1).to({scaleX:5.2836,scaleY:5.2836,x:102.4,y:53,startPosition:6},0).wait(1).to({scaleX:4.7725,scaleY:4.7725,x:94.9,y:52.2,startPosition:7},0).wait(1).to({scaleX:4.3196,scaleY:4.3196,x:88.2,y:51.45,startPosition:8},0).wait(1).to({scaleX:3.916,scaleY:3.916,x:82.25,y:50.8,startPosition:9},0).wait(1).to({scaleX:3.5549,scaleY:3.5549,x:76.9,y:50.25,startPosition:10},0).wait(1).to({scaleX:3.2307,scaleY:3.2307,x:72.15,y:49.7,startPosition:11},0).wait(1).to({scaleX:2.9388,scaleY:2.9388,x:67.85,y:49.3,startPosition:12},0).wait(1).to({scaleX:2.6754,scaleY:2.6754,x:64,y:48.85,startPosition:13},0).wait(1).to({scaleX:2.4374,scaleY:2.4374,x:60.5,y:48.5,startPosition:14},0).wait(1).to({scaleX:2.2222,scaleY:2.2222,x:57.3,y:48.15,startPosition:15},0).wait(1).to({scaleX:2.0272,scaleY:2.0272,x:54.4,y:47.8,startPosition:16},0).wait(1).to({scaleX:1.8506,scaleY:1.8506,x:51.85,y:47.55,startPosition:17},0).wait(1).to({scaleX:1.6906,scaleY:1.6906,x:49.5,y:47.3,startPosition:18},0).wait(1).to({scaleX:1.5456,scaleY:1.5456,x:47.35,y:47.05,startPosition:19},0).wait(1).to({scaleX:1.4142,scaleY:1.4142,x:45.4,y:46.85,startPosition:20},0).wait(1).to({scaleX:1.2953,scaleY:1.2953,x:43.65,y:46.65,startPosition:21},0).wait(1).to({scaleX:1.1877,scaleY:1.1877,x:42.05,y:46.45,startPosition:22},0).wait(1).to({scaleX:1.0904,scaleY:1.0904,x:40.6,y:46.3,startPosition:23},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:39.35,y:46.15,startPosition:24},0).wait(1).to({scaleX:0.9234,scaleY:0.9234,x:38.2,y:46,startPosition:25},0).wait(1).to({scaleX:0.852,scaleY:0.852,x:37.1,y:45.9,startPosition:26},0).wait(1).to({scaleX:0.7879,scaleY:0.7879,x:36.2,y:45.8,startPosition:27},0).wait(1).to({scaleX:0.7303,scaleY:0.7303,x:35.3,y:45.7,startPosition:28},0).wait(1).to({scaleX:0.6787,scaleY:0.6787,x:34.55,y:45.65,startPosition:29},0).wait(1).to({scaleX:0.6326,scaleY:0.6326,x:33.85,y:45.55,startPosition:30},0).wait(1).to({scaleX:0.5914,scaleY:0.5914,x:33.3,y:45.45,startPosition:31},0).wait(1).to({scaleX:0.5547,scaleY:0.5547,x:32.7,y:45.4,startPosition:32},0).wait(1).to({scaleX:0.5221,scaleY:0.5221,x:32.25,y:45.35,startPosition:33},0).wait(1).to({scaleX:0.4931,scaleY:0.4931,x:31.8,startPosition:34},0).wait(1).to({scaleX:0.4674,scaleY:0.4674,x:31.45,y:45.3,startPosition:35},0).wait(1).to({scaleX:0.4447,scaleY:0.4447,x:31.15,y:45.25,startPosition:36},0).wait(1).to({scaleX:0.4245,scaleY:0.4245,x:30.8,y:45.2,startPosition:37},0).wait(1).to({scaleX:0.4065,scaleY:0.4065,x:30.5,startPosition:38},0).wait(1).to({regX:36.4,regY:36.8,scaleX:0.3905,scaleY:0.3905,x:36.9,y:44.55},0).wait(185));

	// BIG_WHITE_MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgqGA1GQpfpgkTroQjopuAArPQAA4qRaxcQRcxZYqAAQYpAARcRZQRcRcAAYqQAALPjoJwQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_1 = new cjs.Graphics().p("EgqGAudQpfpfkTrpQjopuAArPQAA4pRaxdQRcxZYqAAQYpAARcRZQRcRdAAYpQAALPjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_2 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYoAARdRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxdRc4oAAQ4qAAxcxcg");
	var mask_graphics_3 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_4 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_5 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_6 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_7 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_8 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_9 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_10 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_11 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_12 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_13 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_14 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:361.8674,y:451.3924}).wait(1).to({graphics:mask_graphics_1,x:362.616,y:408.9169}).wait(1).to({graphics:mask_graphics_2,x:363.2603,y:363.8443}).wait(1).to({graphics:mask_graphics_3,x:363.8123,y:301.202}).wait(1).to({graphics:mask_graphics_4,x:364.2822,y:247.8781}).wait(1).to({graphics:mask_graphics_5,x:364.6789,y:202.861}).wait(1).to({graphics:mask_graphics_6,x:365.0102,y:165.2612}).wait(1).to({graphics:mask_graphics_7,x:365.2831,y:134.2888}).wait(1).to({graphics:mask_graphics_8,x:365.5039,y:109.2364}).wait(1).to({graphics:mask_graphics_9,x:365.6781,y:89.4648}).wait(1).to({graphics:mask_graphics_10,x:365.811,y:74.392}).wait(1).to({graphics:mask_graphics_11,x:365.9071,y:63.4837}).wait(1).to({graphics:mask_graphics_12,x:365.9709,y:56.2459}).wait(1).to({graphics:mask_graphics_13,x:366.0064,y:52.2179}).wait(1).to({graphics:mask_graphics_14,x:366.0174,y:50.9674}).wait(1).to({graphics:null,x:0,y:0}).wait(224));

	// SIGNS
	this.instance_12 = new lib.round_04copy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(601.3,35,1.3339,1.3339,0,0,0,30.5,30.4);

	this.instance_13 = new lib.round_02();
	this.instance_13.parent = this;
	this.instance_13.setTransform(511.75,35,1.3339,1.3339,0,0,0,30.3,30.4);

	this.instance_14 = new lib.round_01_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(422.85,35,1.3339,1.3339,0,0,0,30.4,30.4);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).to({state:[]},15).wait(224));

	// BIG_WHITE
	this.instance_15 = new lib.round();
	this.instance_15.parent = this;
	this.instance_15.setTransform(361.85,521.9,4.8211,4.8211,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({x:362.6,y:436.9},0).wait(1).to({x:363.25,y:363.85},0).wait(1).to({x:363.8,y:301.2},0).wait(1).to({x:364.3,y:247.9},0).wait(1).to({x:364.7,y:202.85},0).wait(1).to({x:365,y:165.25},0).wait(1).to({x:365.3,y:134.3},0).wait(1).to({x:365.5,y:109.25},0).wait(1).to({x:365.7,y:89.45},0).wait(1).to({x:365.8,y:74.4},0).wait(1).to({x:365.9,y:63.5},0).wait(1).to({x:366,y:56.25},0).wait(1).to({y:52.25},0).wait(1).to({y:50.95},0).to({_off:true},1).wait(224));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,185,86,0)").s().p("Eh0tAPeIAA+8MDpbAAAIAAe8g");
	this.shape.setTransform(364,45.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B956").s().p("Eh7rARvMAAAgjdMD3WAAAMAAAAjdg");
	this.shape_1.setTransform(364.05,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427.5,-332.9,1583.1,1235.6999999999998);


(lib.all_movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FINAL
	this.instance = new lib.final_block("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).wait(307).to({startPosition:238},0).to({_off:true},1).wait(1));

	// COSMO
	this.instance_1 = new lib.cosmo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(485.2,182.25,0.4877,0.4877,35.0794,0,0,105.4,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.548,scaleY:0.548,rotation:35.0804,x:638.85,y:8.35,startPosition:60},60,cjs.Ease.cubicInOut).to({regX:105.7,regY:74.7,scaleX:0.599,scaleY:0.599,rotation:35.0608,x:651.95,y:-2.65,startPosition:244},118,cjs.Ease.get(0.74)).to({_off:true},14).wait(289));

	// COSMO_right
	this.instance_2 = new lib.cosmo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(559.75,214.3,0.2406,0.2406,24.9982,0,0,106.8,74.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:106.4,regY:74.2,scaleX:0.295,scaleY:0.295,rotation:24.9997,x:636.5,y:93.75,startPosition:60},60,cjs.Ease.cubicInOut).to({regX:106.8,regY:74.5,scaleX:0.2956,scaleY:0.2956,rotation:24.9774,x:652.5,y:75.05,startPosition:244},110,cjs.Ease.get(0.74)).to({_off:true},8).wait(289));

	// COSMO_left
	this.instance_3 = new lib.cosmo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(368.8,165.85,0.3381,0.3381,51.7472,0,0,106.2,74.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({regX:106.1,regY:74,scaleX:0.4146,scaleY:0.4146,x:515.35,y:78.35,startPosition:60},60,cjs.Ease.cubicInOut).to({regX:106.3,regY:74.5,scaleX:0.4154,scaleY:0.4154,rotation:51.7261,x:536.75,y:64.6,startPosition:244},107,cjs.Ease.get(0.74)).to({_off:true},1).wait(289));

	// SIGNS
	this.instance_4 = new lib.supersign_repstay("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(513.05,33.8,1.3,1.3,0,0,0,120.6,200.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(55).to({mode:"single",startPosition:57},0).to({_off:true},118).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427.5,-332.9,1583.1,1235.6999999999998);


// stage content:
(lib.MF_Bistrolet_960x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FADE
	this.instance = new lib.bg_black();
	this.instance.parent = this;
	this.instance.setTransform(640,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},21).to({_off:true},1).wait(458));

	// BIG
	this.instance_1 = new lib.all_movie("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(996.85,125.25,1.3322,1.3322,0,0,0,361.7,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(480));

	// LOGO
	this.lego = new lib.megafon_logo_animated_horiz();
	this.lego.name = "lego";
	this.lego.parent = this;
	this.lego.setTransform(579.9,211.55,0.6071,0.6071,0,0,0,-72.9,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.lego).wait(480));

	// BG
	this.instance_2 = new lib.bg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(480));

	// resize
var self = this;
function resize() {
var bannerWidth = 2000;
var minWidth = 960;
var windowWidth = Math.min(bannerWidth, Math.max(minWidth, window.innerWidth));

var legoLeft = 60;
var legoOffset = bannerWidth/2 - windowWidth/2 + legoLeft;
self.lego.x = legoOffset;
self.lego.x = legoOffset;
}
window.addEventListener('resize', resize);
resize();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(543.1,-253.4,1772.5,1521.2);
// library properties:
lib.properties = {
	id: 'DCB3AE0CF1455D46A559CA06964E9367',
	width: 2000,
	height: 250,
	fps: 30,
	color: "#00B956",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DCB3AE0CF1455D46A559CA06964E9367'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;