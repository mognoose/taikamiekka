import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
  }

  create() {
    this.add.image(400, 300, 'sky')

    this.hero = this.physics.add.sprite(400, 200, 'hero')
    this.physics.add.collider(this.hero, platforms);

    this.hero.setBounce(0.2)
    this.hero.setCollideWorldBounds(true)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('hero', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 6 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 9, end: 11 }),
      frameRate: 10,
      repeat: -1
    });
    
    this.anims.create({
      key: 'stopped',
      frames: [{ key: 'hero', frame: 4 }],
      frameRate: 20
    });

    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.25 })
    })

    this.cursors = this.input.keyboard.addKey();
    // this.key = this.input.keyboard.on('keydown', listener)
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


  }

  update() {
    let player = this.game.scene.scenes[1].hero

    if(this.keyA.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    } else if(this.keyS.isDown) {
      player.setVelocityY(160);
      player.anims.play('down', true);
    } else if(this.keyD.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    } else if(this.keyW.isDown) {
      player.setVelocityY(-160);
      player.anims.play('up', true);
    }
    else if(this.cursors.isUp){
      player.setVelocityX(0)
      player.setVelocityY(0)
      player.anims.play('stopped', true);
   }
  }
}