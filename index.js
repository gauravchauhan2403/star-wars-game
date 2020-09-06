var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

    function preload ()
    {

        this.load.image('sky', 'assets/skies.jpg');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('yoda', 'assets/yoda.svg');
        // this.load.spritesheet('dude', 
        //     'assets/dude.png',
        //     { frameWidth: 32, frameHeight: 48 }
        // );
    }

    var platforms;
    var player;

    function create ()
    {
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    
        player = this.physics.add.image(100,450,'yoda');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.body.setGravityY(300);
        this.physics.add.collider(player, platforms);
    }    
    var cursors; 

    function update ()
    {
        cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
    
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
        
        }
        else
        {
            player.setVelocityX(0);
        
        }
        
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }

        

    }