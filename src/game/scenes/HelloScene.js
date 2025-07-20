import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class HelloScene extends Scene {
    constructor(){
        super('HelloScene');
    }

    create() {
      // 화면 중앙에 텍스트 배치
        this.add.text(512, 384, '야겜 만들기..', {
            fontFamily: 'Arial Black', 
            fontSize: 64, 
            color: '#000',
            align: 'center'
        }).setOrigin(0.5); // 텍스트의 중심점을 기준으로 정렬

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('Boot');
    }
}