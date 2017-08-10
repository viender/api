<?php

namespace App\Admin\Controllers;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Viender\Topic\Models\Topic;
use Encore\Admin\Layout\Content;
use App\Http\Controllers\Controller;
use Viender\Socialite\Models\Question;
use Encore\Admin\Controllers\ModelForm;

class QuestionsController extends Controller
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

            $content->header('Question');
            $content->description('All Questions');

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

            $content->header('Question');
            $content->description('Edit Question');

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

            $content->header('Question');
            $content->description('Create Question');

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
        return Admin::grid(Question::class, function (Grid $grid) {

            $grid->id('ID')->sortable();

            $grid->user_id();
            $grid->title();
            $grid->body();

            $grid->created_at();
            $grid->updated_at();

            // $grid->topics()->pluck('name')->label();
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Admin::form(Question::class, function (Form $form) {

            $form->display('id', 'ID');

            $form->display('user_id', 'User ID');
            $form->text('title', 'Question');
            $form->textarea('body', 'Question Detail');
            $form->multipleSelect('topics')->options(Topic::all()->pluck('name', 'id'));

            $form->display('created_at', 'Created At');
            $form->display('updated_at', 'Updated At');
        });
    }
}
