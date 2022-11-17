<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LinkResource;
use App\Models\Link;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    public static function getLinkInfo($linkId)
    {
        /*
         * От этого ресурса работают методы. Не вырезать ресурс!
         */
        return new LinkResource(Link::query()->find($linkId));
    }
}
