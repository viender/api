<?php

namespace Viender\Mytutor\Models;

use Viender\Dealer\Auctionable;
use Illuminate\Database\Eloquent\Model;

class Tutoring extends Model
{
    use Auctionable;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['number_of_week', 'slug'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viender_mytutor_tutorings';
    
    public function tutor() 
    {
        return $this->belongsTo('App\User', 'tutor_id');
    }

    public function student()
    {
        return $this->belongsTo('App\User', 'student_id');
    }

    public function schedules()
    {
        return $this->hasMany('Viender\Mytutor\Models\Schedule');
    }
}
