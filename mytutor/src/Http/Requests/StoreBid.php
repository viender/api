<?php

namespace Viender\Mytutor\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBid extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'offered_price' => 'required',
            'proposal' => 'required',
        ];
    }
}
