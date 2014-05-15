'use strict';

angular.module('realtimeStoryApp',["firebase"])
.filter('formatSentence', function() {
    return function(input) {
        if(!input) return;
    	var newText = input;
    	if(['.','!','?',','].indexOf(newText.substr(-1)) == -1){
    		newText += '.';
    	}
    	newText += ' ';
    	newText = newText.substr(0,1).toUpperCase() + newText.substr(1);
    	return newText;
    };
})
.controller('StoryController', function ($scope,$firebase) {

 var ref = new Firebase("https://burning-fire-5298.firebaseio.com/");
 $scope.sentences = $firebase(ref);
 $scope.addSentence = function(e) {

    if(this.sentence_text.trim().length > 10){
        $scope.sentences.$add({author: this.sentence_author, text: this.sentence_text.trim() });
        this.sentence_text= "";
    }else{
        alert('Please write a correct sentence');
    }    
}
});
