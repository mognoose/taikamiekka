import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import hero from '@/game/assets/hoody2.png'
import ground from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('ground', ground)
    this.load.spritesheet('hero', hero, { frameWidth: 48, frameHeight: 50, endFrame: 11 })
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
