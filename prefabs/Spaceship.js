class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.points = pointValue;
    }

    update()
    {
        this.x -= game.settings.spaceshipSpeed;

        if(this.x <= 0 - this.width)
        {
            this.x = game.config.width;
        }
    }

    reset() 
    {
        this.x = game.config.width;
    }
}