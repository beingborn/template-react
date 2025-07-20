import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { HelloScene } from './scenes/HelloScene';
import Phaser from 'phaser';
import { Preloader } from './scenes/Preloader';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#f5f5f5',

    // Scene 추가
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver,
        HelloScene
    ]
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
