<?php

namespace App\Admin\Controllers;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use App\Http\Controllers\Controller;
use Encore\Admin\Auth\Database\Role;
use Viender\Socialite\Models\Question;
use Encore\Admin\Controllers\ModelForm;
use Encore\Admin\Auth\Database\Permission;
use Encore\Admin\Controllers\AuthController as BaseAuthController;
use Encore\Admin\Controllers\UserController;
use Encore\Admin\Auth\Database\Administrator;

class AuthController extends BaseAuthController
{
    /**
     * User setting page.
     *
     * @return mixed
     */
    public function getSetting()
    {
        return Admin::content(function (Content $content) {
            $content->header(trans('admin::lang.user_setting'));
            $content->body($this->settingForm()->edit(Admin::user()->id));
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    public function settingForm()
    {
        return Administrator::form(function (Form $form) {
            $form->display('username', trans('admin::lang.username'))->rules('required');
            $form->text('first_name', 'First Name')->rules('required');
            $form->text('last_name', 'Last Name')->rules('required');
            $form->image('avatar_url', 'Avatar Small (48 x 48)');
            $form->image('avatar_medium_url', 'Avatar Medium (96 x 96)');
            $form->image('avatar_large_url', 'Avatar Large (192 x 192)');
            $form->password('password', trans('admin::lang.password'))->rules('required|confirmed');
            $form->password('password_confirmation', trans('admin::lang.password_confirmation'))->rules('required')
                ->default(function ($form) {
                    return $form->model()->password;
                });

            $form->ignore(['password_confirmation']);

            $form->multipleSelect('roles', trans('admin::lang.roles'))->options(Role::all()->pluck('name', 'id'));
            $form->multipleSelect('permissions', trans('admin::lang.permissions'))->options(Permission::all()->pluck('name', 'id'));

            $form->display('created_at', trans('admin::lang.created_at'));
            $form->display('updated_at', trans('admin::lang.updated_at'));

            $form->saving(function (Form $form) {
                if ($form->password && $form->model()->password != $form->password) {
                    $form->password = bcrypt($form->password);
                }
            });

            $form->saved(function () {
                admin_toastr(trans('admin::lang.update_succeeded'));

                return redirect(admin_url('auth/setting'));
            });
        });
    }
}
