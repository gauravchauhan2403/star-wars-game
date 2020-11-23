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
        this.load.image('darth', 'assets/darth-vader.svg');
    }

    var platforms;
    var player1 , player2;
    var score = 0;
    var scoreText1;

    function create ()
    {
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        player1 = this.physics.add.image(20,450,'yoda').setScale(.3).refreshBody();
        player1.setBounce(0.2);
        player1.setCollideWorldBounds(true);
        player1.body.setGravityY(300);
        this.physics.add.collider(player1, platforms);
        this.physics.add.collider(player1,player2);
        
        player2 = this.physics.add.image(790,450,'darth').setScale(.3).refreshBody();
        player2.setBounce(0.2);
        player2.setCollideWorldBounds(true);
        player2.body.setGravityY(300);
        this.physics.add.collider(player2, platforms);
        this.physics.add.collider(player1,player2);

        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#666666' });
    }    
    var cursors; 

    function update ()
    {
        cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown)
        {
            player1.setVelocityX(-160);
    
        }
        else if (cursors.right.isDown)
        {
            player1.setVelocityX(160);
        
        }
        else
        {
            player1.setVelocityX(0);
        
        }
        
        if (cursors.up.isDown && player1.body.touching.down)
        {
            player1.setVelocityY(-330);
        }

        

    }
