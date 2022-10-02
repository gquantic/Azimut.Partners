<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\PlayerController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ActionController extends ApiController
{
    /**
     * @return array
     */
    public function getData()
    {
        return $this->data;
    }

    public function init(Request $request)
    {
        return $this->actionHandler();
    }

    private function actionHandler()
    {
        $playerController = new PlayerController($this->data);

        if ($this->data['action'] == 'register')
            return $playerController->savePlayer($this->data);

        return [
            'status' => 'error',
            'message' => 'Bad method call.',
        ];
    }
}
