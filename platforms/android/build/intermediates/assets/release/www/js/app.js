var app = angular.module('soundboard', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

app.controller('SoundBoardCtrl', function ($scope,$log,$window) {

	$scope.media = null;

	$scope.model = {
		showDelete: false,
		showMove: false,
		sounds: [
			{
				'title': 'Skyway Avenue',
				'image': 'img/album/wtk1.jpg',
				'desc': 'We the Kings',
				'file': '/sounds/wtk1.mp3'
			},
            
			{
				'title': 'Say you like me',
				'image': 'img/album/wtk2.jpg',
				'desc': 'We the Kings',
				'file': '/sounds/wtk2.mp3'
			},

            {
				'title': 'Secret Valentine',
				'image': 'img/album/wtk3.jpg',
				'desc': 'We the Kings',
				'file': '/sounds/wtk3.mp3'
			}
,

            {
				'title': 'Heave can Wait',
				'image': 'img/album/wtk4.jpg',
				'desc': 'We the Kings',
				'file': '/sounds/wtk4.mp3'
			}
            
,

            {
				'title': 'Queen of Hearts',
				'image': 'img/album/wtk5.png',
				'desc': 'We the Kings',
				'file': '/sounds/wtk5.mp3'
			},
            
            {
				'title': 'Stone Walls',
				'image': 'img/album/wtk6.png',
				'desc': 'We the Kings',
				'file': '/sounds/wtk6.mp3'
			}
,
            
            {
				'title': 'Find You There',
				'image': 'img/album/wtk7.jpg',
				'desc': 'We the Kings',
				'file': '/sounds/wtk7.mp3'
			}
            
            
            
            
            
            
            
            
            
		]
	};
    
    
    
    // Delete audio
    $scope.deleteAudio=function($index){
          
        $scope.model.sounds.splice($index,1);
        
    };
    
    //Move Audio
    $scope.moveAudio=function(chael,fromIndex,toIndex){
        $scope.model.sounds.splice(fromIndex,1);
        $scope.model.sounds.splice(toIndex, 0 ,chael);
        
        
    };
    
    

	$scope.play = function (chael) {
        

        // code for pausing the audio
        if($scope.media){
            $scope.media.pause();
        }
        

        

        //cordova
        if($window.cordova){
            
            var src= chael.file;
            if(ionic.Platform.is('android')){
                src='/android_asset/wwww'+src;
            }
            
            $log.debug("Device Play Sound"); 
            ionic.Platform.ready(function(){
                $scope.media= new $window.Media(chael.file);
                $scope.media.play();
                
                
            });
        }
        else{
        //intitializing the audio
            $scope.media=new Audio();
            $scope.media.src=chael.file;
            $scope.media.load();
            $scope.media.play();

        
            
        }
        

  
	};
});

