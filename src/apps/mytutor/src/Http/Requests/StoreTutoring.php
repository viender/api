<?php

namespace Viender\Mytutor\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTutoring extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return \Auth::user()->can('create', \Viender\Mytutor\Models\Tutoring::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'number_of_week' => 'required',
            'title' => 'required',
            'body' => 'required',
            'price' => 'required',
        ];
    }
}
