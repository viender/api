<?php

namespace Viender\Campaign\Models;

use Viender\Campaign\Models\Campaign;
use Illuminate\Database\Eloquent\Model;

class CampaignHit extends Model
{
/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

    ];

    public function campaign()
    {
        $this->belongsTo(Campaign::class);
    }
}
