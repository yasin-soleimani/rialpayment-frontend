<template>
  <div class="control">
    <label for="blocks">Blocks (<span id="count"></span>)</label>
    <input type="range" id="blocks" min="0" max="20" value="0" step="2" />
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    xml:space="preserve"
  >
    <defs>
      <linearGradient id="Gradient">
        <stop offset="0%" id="mainCol" stop-opacity="0.1" />
        <stop offset="5px" stop-opacity="0.5" />
        <stop offset="30px" stop-opacity="0.75" />
        <stop offset="40px" stop-opacity="0.35" />
        <stop offset="50px" stop-opacity="0.45" />
        <stop offset="60px" stop-opacity="0.25" />
        <stop offset="70px" stop-opacity="0" />
      </linearGradient>
    </defs>
    <g class="art"></g>
  </svg>
</template>

<script>
export default {
  name: "AmountByCharge",

  data() {
      return {
          var svg = document.querySelector("svg"),
		art = document.querySelector(".art"),
		body = document.querySelector("body"),
		mainCol = document.querySelector("#mainCol"),
		eblocks = document.querySelector("#blocks"),
		count = document.querySelector("#count"),
		x1 = 0,
		y1 = 0,
		x2 = 100,
		y2 = 100,
		xmax = window.screen.width,
		ymax = window.screen.height,
		xmaxstep = xmax / 4,
		ymaxstep = ymax / 8,
		dx = 1,
		dy = 1,
		mx = 10,
		my = 10,
		blocks = 100;
svg.setAttribute("height", ymax);
svg.setAttribute("width", xmax);
blocks = eblocks.value;
eblocks.onchange = function() {
		blocks = eblocks.value;
		andAction();
},
andAction();
body.onclick = andAction;

function andAction() {
		count.innerHTML = blocks;
		fill = getCol();
		while (art.hasChildNodes()) {
				art.removeChild(art.lastChild);
		};
		for (var i = 0; i < blocks; i++) {
				addPath(x1, y1, x2, y2, i)
				x1 = x2;
				y1 = y2;
				if (dx > 0) {
						stepseed = (xmax - x1 > xmaxstep) ? xmaxstep : xmax - x1;
						stepx = Math.random() * stepseed;
						x2 = stepx + x1;
				} else {
						x2 = Math.random() * x1;
				}
				if (dx < mx || dx > (maxx - mx)) {
						dx = -dx;
						//fill = getCol();
				}
				if (dy > 0) {
						stepseed = (ymax - y1 > ymaxstep) ? ymaxstep : ymax - y1;
						stepy = Math.random() * stepseed;
						y2 = stepy + y1;
				} else {
						y2 = Math.random() * y1;
				}
				if (dy < my || dy > (maxy - my)) {
						dy = -dy;
						//fill = getCol();
				};
		}

}

function getCol() {
		var c = "rgba(rr,gg,bb,aa)",
				pars = ["rr", "gg", "bb"];
		pars.map(function(e) {
				c = c.replace(e, parseInt(Math.random() * 255));
		});
		c = c.replace("aa", Math.random() +.145);
		return c;
}

function addPath(x1, y1, x2, y2, i) {
		var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		// animation
		var animation = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
		var animPath = "M x1 y1 Q 100 100 x2 y1 10 10 x1 y1 C x2 y2 x2 y2 x1 y1 L x1 y1 Z";
		animPath = animPath.replace(/x1/ig, x1);
		animPath = animPath.replace(/y1/ig, y1);
		animPath = animPath.replace(/x2/ig, x2 );
		animPath = animPath.replace(/y2/ig, parseInt(y2 + Math.random()*100));
		animation.setAttribute("path", animPath);
		animation.setAttribute("dur", "15s");
		animation.setAttribute("repeatCount", "indefinite");
		animation.setAttribute("rotate", "none");

		var d = "M x1 y1 Q x1 y1 x2 y1 L x2 y1 x2 y2 x2 y2 x1 y2 Z";
		d = d.replace(/x1/ig, x1);
		d = d.replace(/x2/ig, x2);
		d = d.replace(/y1/ig, y1);
		d = d.replace(/y2/ig, y2);
		path.setAttribute("d", d);
		mainCol.setAttribute("stop-color", fill);
		path.setAttribute("fill", "url(#Gradient)");
		art.appendChild(path);
		path.appendChild(animation);

}
      }
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans:400,800);

body {
  font-family: "Inconsolata", monospace;

  font-family: "Open Sans", sans-serif;
  background: #000;
  color: orange;
}
path {
  stroke: black;
  stroke-width: 0px;
}
.control {
  position: fixed;
  z-index: 10;
}
</style>
