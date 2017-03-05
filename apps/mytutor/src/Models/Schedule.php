<?php

namespace Viender\Mytutor\Models;

use Viender\Dealer\Auctionable;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use Auctionable;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['day', 'from', 'to'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viender_mytutor_schedules';
    
    public function tutoring() 
    {
        return $this->belongsTo('Viender\Mytutor\Models\Tutoring');
    }
}
