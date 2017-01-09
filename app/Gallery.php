<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;


class Gallery extends Model
{   protected $table = 'galleries';
    protected $fillable = ['name', 'user_id'];

   public function getCreatedAtAttribute($value) {
   	return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();

   }

  public function user() {
  	return $this->belongsTo('App\User');
  }

}
