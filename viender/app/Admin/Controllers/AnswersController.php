<?php

namespace App\Admin\Controllers;

use Viender\Socialite\Models\Answer;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\ModelForm;

class AnswersController extends Controller
{
    use ModelForm;

    /**
     * Index interface.
     *
     * @return Content
     */
    public function index()
    {
        return Admin::content(function (Content $content) {

            $content->header('Answer');
            $content->description('All Answers');

            $content->body($this->grid());
        });
    }

    /**
     * Edit interface.
     *
     * @param $id
     * @return Content
     */
    public function edit($id)
    {
        return Admin::content(function (Content $content) use ($id) {
            $question = Answer::find($id)->question;

            $content->header('Edit Answer of');
            $content->description($question->title);

            $content->body($this->form()->edit($id));
        });
    }

    /**
     * Create interface.
     *
     * @return Content
     */
    public function create()
    {
        return Admin::content(function (Content $content) {

            $content->header('Answer');
            $content->description('Create Answer');

            $content->body($this->form());
        });
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Admin::grid(Answer::class, function (Grid $grid) {

            $grid->id('ID')->sortable();

            $grid->user_id();
            $grid->question()->title('Question');
            $grid->body('Answer');

            $grid->created_at();
            $grid->updated_at();
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Admin::form(Answer::class, function (Form $form) {

            $form->display('id', 'ID');

            $form->display('user_id', 'User ID');
            $form->belongsTo('question', function () {
                $form->display('title');
            });
            $form->textarea('body', 'Answer');

            $form->display('created_at', 'Created At');
            $form->display('updated_at', 'Updated At');
        });
    }
}
