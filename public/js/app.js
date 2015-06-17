var question = {
  questions : null,
  init: function(){
    this.eventhandlers();

    this.loadQuestions();
  },
  eventhandlers: function(){

  },
  loadQuestions: function(){
    var _this = this;
    $.ajax({
      url : "/question/questions",
    }).done(function(data){
      //console.log(data);
      _this.questions = data;
      _this.showQuestions();
      //console.log('test');
    });
  },
  showQuestions: function(){
    $("#question").html(this.questions[0].question);
    $("#question-container").fadeIn('slow');
  }
};

question.init();
