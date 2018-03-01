<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mews\Purifier\Facades\Purifier;

class Event extends Model
{
    //

    protected $fillable = ["title","short_description","description","register_link","location","time","from","to"];

    function setDescriptionAttribute($value){
        $this->attributes['description'] = Purifier::clean($value);
    }

    public function getTimeAttribute($value){

        $return["gregorian"] = date("Y/m/d",intval($value));
        $return["jalali"] = \Morilog\Jalali\jDateTime::strftime('Y/m/d', intval($value));
        $return["nameGregorian"] = date("M d",intval($value));
        $return["nameJalali"] = $this->toPenglish(\Morilog\Jalali\jDateTime::strftime('M', intval($value)))." ".\Morilog\Jalali\jDateTime::strftime('d', intval($value));
        $return["timestamp"] = intval($value)*1000;
        return $return;
    }

    public function setTimeAttribute($value){

        $value = explode("/",$value);

        $data = \Morilog\Jalali\jDateTime::toGregorian($value[0],$value[1],$value[2]);

        $this->attributes['time'] = strtotime($data[0].'/'.$data[1].'/'.$data[2]);;

    }

    //

    private function toPenglish($month){
        switch ($month){
            case "فرو":
                return "Farvardin";
            case "ارد":
                return "Ordibehesht";
            case "خرد":
                return "Khordad";
            case "تیر":
                return "Tir";
            case "مرد":
                return "Mordad";
            case "شهر":
                return "Shahriar";
            case "مهر":
                return "Mehr";
            case "آبا":
                return "Aban";
            case "آذر":
                return "Azar";
            case "دی":
                return "Day";
            case "بهم":
                return "Bahman";
            case "اسف":
                return "Esfand";
        }
    }

}
