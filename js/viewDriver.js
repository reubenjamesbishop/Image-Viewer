	
	/* To make a simple multi-res image viewer using three.js.
	   Look around with the mouse, zoom using W/A/S/D/down/up. */

	//Create a scene with a camera and basic controls 
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	var controls = new THREE.OrbitControls( camera );

	//Camera starts at origin (not exactly, else can't look around) 
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 0.0001;

	//Create a cube 
	var geometry = new THREE.BoxGeometry( 100, 100, 100 );

	//Distances to faces from origin (will be used to decide which resolution to load)
	var leftDistance = 50;
	var rightDistance = 50;
	var upDistance = 50;
	var downDistance = 50;
	var frontDistance = 50;
	var backDistance = 50;

	//Create new level of detail
	var lod = new THREE.LOD();

	//Create a basic texture loader 
	var textureLoader = new THREE.TextureLoader();
	
	//Load low definition ito start 
	
		//Load each picture to a variable 
		var far_texturel = textureLoader.load( 'pictureFolder/1/l0_0.jpg' );
		var far_texturer = textureLoader.load( 'pictureFolder/1/r0_0.jpg' );
		var far_textured = textureLoader.load( 'pictureFolder/1/d0_0.jpg' );
		var far_textureu = textureLoader.load( 'pictureFolder/1/u0_0.jpg' );
		var far_texturef = textureLoader.load( 'pictureFolder/1/f0_0.jpg' );
		var far_textureb = textureLoader.load( 'pictureFolder/1/b0_0.jpg' );

		//Create an array of materials 
		var far_materials = 
		[
			new THREE.MeshBasicMaterial( { map: far_texturer, side: THREE.BackSide } ),
		    new THREE.MeshBasicMaterial( { map: far_texturel, side: THREE.BackSide } ),
		    new THREE.MeshBasicMaterial( { map: far_textureu, side: THREE.BackSide } ),
		    new THREE.MeshBasicMaterial( { map: far_textured, side: THREE.BackSide } ),
		    new THREE.MeshBasicMaterial( { map: far_texturef, side: THREE.BackSide } ),
		    new THREE.MeshBasicMaterial( { map: far_textureb, side: THREE.BackSide } )
		]
	
	//Create a cube object using box geometry 
	//and inside lined with loaded pictures 	
	var cube = new THREE.Mesh( geometry, far_materials );

	//Place the cube in the scene
	scene.add( cube );
	
	//Add some ambient light (soft white)
	var ambient = new THREE.AmbientLight( 0x404040 );
	scene.add( ambient );

	//Make a renderer and render the scene 
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	//Function for zoom controls 
	//NOTE: Zoom is achieved via. movement of the cube around the camera
	function moveCube()
	{

		//Movement jump 
		var jump = 0.001;

		document.addEventListener("keydown", onDocumentKeyDown, false);
		
		//Function to handle user input
		function onDocumentKeyDown(event) 
		{
		    var keyCode = event.which;

		    if( cube.position.x + jump < 49 && cube.position.y + jump < 49 && cube.position.z + jump < 49 )
		    {
			    //D
			    if (keyCode == 68) 
			    {
			        cube.position.x -= jump;
			    } 

			    //A
			    if (keyCode == 65) 
			    {
			        cube.position.x += jump;
			    } 
		    	//W
			    if (keyCode == 87) 
			    {
			        cube.position.z += jump;
			    } 

			    //S
			    if (keyCode == 83) 
			    {
			        cube.position.z -= jump;
			    } 

			    //U
			    if (keyCode == 38) 
			    {
			        cube.position.y -= jump;
			    } 

			    //D
			    if (keyCode == 40) 
			    {
			        cube.position.y += jump;
			    } 

			}
		};

		//To check cube positions in console 
		console.log(cube.position.x, cube.position.y, cube.position.z);

	}

	//To decide which resolution to load 
	var loadLoop = function()
	{

		//If very close
		if(cube.position.z	> 25)
		{
			//Load the super high resolution panels
		} 


		//If medium distance 
		if(cube.position.z > 8)
		{
			console.log("Load a higher resolution now...");
			
			//Load medium resolution panels (fix this)

			var med_texturel = textureLoader.load('pictureFolder/1/l0_0.jpg');
			var med_texturer = textureLoader.load('pictureFolder/1/r0_0.jpg');
			var med_textured = textureLoader.load('pictureFolder/1/d0_0.jpg');
			var med_textureu = textureLoader.load('pictureFolder/1/u0_0.jpg');
			var med_texturef = textureLoader.load('pictureFolder/1/f0_0.jpg');
			var med_textureb = textureLoader.load('pictureFolder/1/b0_0.jpg');

			var far_materials = 
			[
				new THREE.MeshBasicMaterial( { map: med_texturer, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: med_texturel, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: med_textureu, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: med_textured, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: med_texturef, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: med_textureb, side: THREE.BackSide } )
			]

		}
		else
		{
			//Load low definition panels if far away
	
			var far_texturel = textureLoader.load( 'pictureFolder/1/l0_0.jpg' );
			var far_texturer = textureLoader.load( 'pictureFolder/1/r0_0.jpg' );
			var far_textured = textureLoader.load( 'pictureFolder/1/d0_0.jpg' );
			var far_textureu = textureLoader.load( 'pictureFolder/1/u0_0.jpg' );
			var far_texturef = textureLoader.load( 'pictureFolder/1/f0_0.jpg' );
			var far_textureb = textureLoader.load( 'pictureFolder/1/b0_0.jpg' );

			var far_materials = 
			[
				new THREE.MeshBasicMaterial( { map: far_texturer, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: far_texturel, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: far_textureu, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: far_textured, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: far_texturef, side: THREE.BackSide } ),
			    new THREE.MeshBasicMaterial( { map: far_textureb, side: THREE.BackSide } )
			]

		}
	};


	//Update function for other components 
	var update = function()
	{
		
	};

	//Draw/render the scene on the canvas 
	var render = function()
	{
		renderer.render( scene, camera );
		update( camera );
		lod.update( camera );
	};

	//Primary loop to call other functions 
	var MainLoop = function()
	{
		requestAnimationFrame(MainLoop);
		update();
		render();
		moveCube();
		loadLoop();

		var cube = new THREE.Mesh( geometry, far_materials );

	};

	MainLoop();
