class Map {
    constructor(scene, key, tileSetName, bcName, blockedLayerName) {
        this.scene = scene;
        this.key = key;
        this.tileSetName = tileSetName;
        this.bcName = bcName;
        this.blockedLayer = blockedLayerName;
        this.createMap()
    }


    createMap() {
        this.map = this.scene.make.tilemap({key: this.key});
        this.tiles = this.map.addTilesetImage(this.tileSetName, this.bcName, 32, 32, 1, 2);
        this.backgroundLayer = this.map.createStaticLayer(this.bcName, this.tiles, 0, 0);
        this.backgroundLayer.setScale(2);

        this.blockedLayer = this.map.createStaticLayer(this.blockedLayer, this.tiles, 0, 0);
        this.blockedLayer.setScale(2);
        this.blockedLayer.setCollisionByExclusion([-1]);


        this.scene.physics.world.bounds.width = this.map.widthInPixels * 2;
        this.scene.physics.world.bounds.height = this.map.heightInPixels * 2;

        this.scene.cameras.main.setBounds(0,0, this.map.widthInPixels * 2, this.map.heightInPixels * 2)
        this.scene.cameras.main.zoom = 1
    }
}