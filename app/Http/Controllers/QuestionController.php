<?php namespace App\Http\Controllers;

class QuestionController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//$this->middleware('auth');
	}


	public function getQuestions()
	{
    $questions = \App\Models\Question::all();
		return response()->json($questions->toArray());
	}

}
