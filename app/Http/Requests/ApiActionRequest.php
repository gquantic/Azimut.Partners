<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiActionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'action' => 'required|string',
            'offer_id' => 'required|int',
            'token' => 'required|string',
            'agent' => 'required|int',
        ];
    }
}
