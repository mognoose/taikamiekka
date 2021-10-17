import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    console.log("created");
    this.add.image(400, 300, 'sky')

    this.hero = this.physics.add.sprite(400, 200, 'hero')
    this.hero.body.setGravityY(0)

    this.physics.add.collider(this.hero, platforms);

    // let cursors = this.input.keyboard.createCursorKeys();


    this.hero.setBounce(0.2)
    this.hero.setCollideWorldBounds(true)

    // this.anims.create({
    //   key: 'left',
    //   frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
    //   frameRate: 10,
    //   repeat: -1
    // });
    
    // this.anims.create({
    //     key: 'turn',
    //     frames: [ { key: 'hero', frame: 4 } ],
    //     frameRate: 20
    // });
    
    // this.anims.create({
    //     key: 'right',
    //     frames: this.anims.generateFrameNumbers('hero', { start: 10, frameHeight: 12 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    
    const platforms = this.physics.add.staticGroup();
    
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.25 })
    })
  }

  update () {
    this.input.keyboard.on('keydown', listener)
    function listener(e){
      console.log(e);
      console.log("HERO",this.hero);
      this.hero.setVelocityX(-160);

    }
  }
}
