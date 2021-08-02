let particles = {
  Particle: function (x, y) {
    this.x = x;
    this.y = y;
    this.radius = particles.Radius;
    this.draw = function (ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);

      ctx.fillStyle = "black";

      ctx.fillRect(0, 0, this.radius, this.radius);
      ctx.restore();
    };
  },
  init: function (width, height, radius, speed) {
    particles.canvas = document.querySelector("canvas");
    particles.ctx = particles.canvas.getContext("2d");
    particles.Width = width;
    particles.Height = height;
    particles.Radius = radius;
    particles.Diameter = radius * 2;
    particles.Speed = speed;
    particles.expectedParticles = [];
    particles.randomParticles = [];
    particles.tmpCanvas = document.createElement("canvas");
    particles.tmpCtx = particles.tmpCanvas.getContext("2d");

    particles.canvas.width = particles.Width;
    particles.canvas.height = particles.Height;

    //particles.animate();
    const { Diameter, Height, Width } = particles;
    particles.makeParticles(((Height / Diameter) * (Width / Diameter)) / 5);

    return () =>
      function setKeyword(keyword = "Dummy") {
        particles.keyword = keyword;
        particles.getPixels(particles.tmpCanvas, particles.tmpCtx);
        particles.animate();
      };
  },
  currentPos: 0,
  makeParticles: function (num) {
    let randomParticles = [];
    const { Width, Height } = particles;
    for (let i = 0; i <= num; i++) {
      randomParticles.push(
        new particles.Particle(
          Width / 2 + Math.random() * Width - Width / 2,
          Height / 2 + Math.random() * Height - Height / 2
        )
      );
    }
    particles.randomParticles = randomParticles;
  },
  getPixels: function (canvas, ctx) {
    const { Radius, Diameter, Width, Height, keyword } = particles;
    const gridX = Diameter;
    const gridY = Diameter;
    canvas.width = Width;
    canvas.height = Height;

    ctx.fillStyle = "red";
    ctx.font = `bold ${Height / 1.7}px Lato`;
    //- ctx.measureText(keyword).height
    ctx.fillText(keyword, 0, canvas.height / 2);
    let idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let buffer32 = new Uint32Array(idata.data.buffer);

    let expectedParticles = [];
    for (let y = Radius; y < canvas.height; y += gridY) {
      for (let x = Radius; x < canvas.width; x += gridX) {
        if (buffer32[y * canvas.width + x]) {
          expectedParticles.push({ x: x, y: y });
        }
      }
    }
    particles.expectedParticles = expectedParticles;
  },
  animateParticles: function () {
    let p, pPos, speed;
    for (let i = 0, num = particles.randomParticles.length; i < num; i++) {
      p = particles.randomParticles[i];
      pPos = particles.expectedParticles[i];
      speed = particles.Speed;
      if (
        particles.randomParticles.indexOf(p) ===
        particles.expectedParticles.indexOf(pPos)
      ) {
        let difX = pPos.x - p.x;
        let difY = pPos.y - p.y;
        // let ease =
        //   Math.sqrt(Math.pow(difX, 2) * Math.pow(difY, 2)) < 200
        //     ? (speed += 0.1)
        //     : (speed += 0.01);
        speed *= 5;
        p.x += difX * speed;
        p.y += difY * speed;
        p.draw(particles.ctx);
      }
    }
  },
  animate: function () {
    const { Width, Height } = particles;
    requestAnimationFrame(particles.animate);
    particles.ctx.fillStyle = "white";
    particles.ctx.fillRect(0, 0, Width, Height);
    particles.animateParticles();
  },
};

export default particles;
