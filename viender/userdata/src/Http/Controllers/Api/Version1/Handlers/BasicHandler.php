<?php

namespace Viender\Userdata\Http\Controllers\Api\Version1\Handlers;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;

class BasicHandler extends Handler
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginator = $this->model::orderBy('created_at', 'desc')->paginate();
        return $this->controller->respondWithPagination($paginator, new $this->transformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->model::create($request->all());
        return $this->controller->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($model)
    {
        return $this->controller->respond(new Item($model, new $this->transformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $model)
    {
        $model->update($request->all());
        return $this->controller->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($model)
    {
        $model->delete();
        return $this->controller->respondDeleted();
    }
}