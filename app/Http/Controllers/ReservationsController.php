<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationsController extends Controller
{
    /*
    * Create a session
    * Parameters:
    * - date: date (YYYY-MM-DD)
    * - start_time: time (HH:MM:SS)
    * - end_time: time (HH:MM:SS)
    * - max_allowed_reserves: integer (default 1)
    * - status: string (default 'free')
    * - created_by: integer (id of the user who created the session)
    * - type: string (one of 'psychology', 'nutrition', 'yoga', 'aesthetics', 'osteopathy', 'pilates')
    */
    public function createSession(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
            'name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required',
            'end_time' => 'required',
            'max_allowed_reserves' => 'nullable|integer|min:1',
            'status' => 'nullable|string',
            'created_by' => 'required|exists:users,id',
            'type' => 'required|in:psychology,nutrition,yoga,aesthetics,osteopathy,pilates',
        ]);

        // Dynamically determine the model based on the type
        switch ($request->type) {
            case 'psychology':
                $modelClass = \App\Models\PsychologySession::class;
                break;
            case 'nutrition':
                $modelClass = \App\Models\NutritionSession::class;
                break;
            case 'yoga':
                $modelClass = \App\Models\YogaSession::class;
                break;
            case 'aesthetics':
                $modelClass = \App\Models\AestheticsSession::class;
                break;
            case 'osteopathy':
                $modelClass = \App\Models\OsteopathySession::class;
                break;
            case 'pilates':
                $modelClass = \App\Models\PilatesSession::class;
                break;
            default:
                return response()->json(['message' => 'Invalid session type'], 400);
        }

        $session = $modelClass::create([
            'name' => $request->name ?? ucfirst($request->type),
            'description' => $request->description ?? '',
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'max_allowed_reserves' => $request->max_allowed_reserves ?? 1,
            'status' => $request->status ?? 'free',
            'created_by' => $request->created_by,
            'current_reserves' => 0,
        ]);

        return response()->json(['message' => "$modelClass".' session created successfully', 'session' => $session], 201);
    }

    /*
    * Reserve a session
    * Parameters:
    * - user_id: integer (id of the user)
    * - type: string (one of 'psychology', 'nutrition', 'yoga', 'aesthetics', 'osteopathy', 'pilates')
    * - session_id: integer (id of the session)
    */
    public function reserveSession(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'type' => 'required|in:psychology,nutrition,yoga,aesthetics,osteopathy,pilates',
            'session_id' => 'required|exists:'.($request->type == 'psychology' ? 'psychology_sessions' : ($request->type == 'nutrition' ? 'nutrition_sessions' : ($request->type == 'yoga' ? 'yoga_sessions' : ($request->type == 'aesthetics' ? 'aesthetics_sessions' : ($request->type == 'osteopathy' ? 'osteopathy_sessions' : 'pilates_sessions'))))).',id',
        ]);

        // Dynamically determine the model based on the type
        switch ($request->type) {
            case 'psychology':
                $modelClass = \App\Models\PsychologySession::class;
                break;
            case 'nutrition':
                $modelClass = \App\Models\NutritionSession::class;
                break;
            case 'yoga':
                $modelClass = \App\Models\YogaSession::class;
                break;
            case 'aesthetics':
                $modelClass = \App\Models\AestheticsSession::class;
                break;
            case 'osteopathy':
                $modelClass = \App\Models\OsteopathySession::class;
                break;
            case 'pilates':
                $modelClass = \App\Models\PilatesSession::class;
                break;
            default:
                return response()->json(['message' => 'Invalid session type'], 400);
        }
        
        $session = $modelClass::findOrFail($request->session_id);
        $user = \App\Models\User::findOrFail($request->user_id);
        
        //Check if session date is in the past
        if (\Carbon\Carbon::parse($session->date)->isPast()) {
            return response()->json(['message' => 'The session has already finished'], 400);
        }

        //Check if session is full
        if ($session->status == 'full' || $session->current_reserves >= $session->max_allowed_reserves) {
            return response()->json(['message' => 'Session is full'], 400);
        }

        //Check if user already has a reservation for this session
        $user_reservations = $user->activeReserves()->get();
        foreach ($user_reservations as $reservation) {
            if ($reservation->reservable_id == $session->id && $reservation->reservable_type == get_class($session)) {
                return response()->json(['message' => 'User already has a reservation for this session'], 400);
            }
        }
        
        //Parsing fields and making reservation
        $session->date = \Carbon\Carbon::parse($session->date);
        $user->reserve($session, $session->date, $session->start_time, $session->date, $session->end_time);

        //Update session's current reserves and status
        $session->current_reserves += 1;

        if ($session->current_reserves >= $session->max_allowed_reserves) {
            $session->status = 'full';
        } elseif ($session->current_reserves > 0) {
            $session->status = 'half';
        } else {
            $session->status = 'free';
        }

        $session->save();

        return response()->json(['message' => 'Session reserved successfully', 'reservation' => $session], 201);
    }

    /*
    * Cancel a reservation
    * Parameters:
    * - user_id: integer (id of the user)
    * - type: string (one of 'psychology', 'nutrition', 'yoga', 'aesthetics', 'osteopathy', 'pilates')
    * - session_id: integer (id of the session)
    */
    public function cancelReservation(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'type' => 'required|in:psychology,nutrition,yoga,aesthetics,osteopathy,pilates',
            'session_id' => 'required|exists:'.($request->type == 'psychology' ? 'psychology_sessions' : ($request->type == 'nutrition' ? 'nutrition_sessions' : ($request->type == 'yoga' ? 'yoga_sessions' : ($request->type == 'aesthetics' ? 'aesthetics_sessions' : ($request->type == 'osteopathy' ? 'osteopathy_sessions' : 'pilates_sessions'))))).',id',
        ]);

        $reservation = \DB::table('reserves')
            ->where('customer_id', $request->user_id)
            ->where('reservable_id', $request->session_id)
            ->where('reservable_type', $request->type == 'psychology' ? \App\Models\PsychologySession::class : ($request->type == 'nutrition' ? \App\Models\NutritionSession::class : ($request->type == 'yoga' ? \App\Models\YogaSession::class : ($request->type == 'aesthetics' ? \App\Models\AestheticsSession::class : ($request->type == 'osteopathy' ? \App\Models\OsteopathySession::class : \App\Models\PilatesSession::class)))))
            ->where('canceled', false)
            ->first();

        if (!$reservation) {
            return response()->json(['message' => 'No active reservation found for this user and session'], 404);
        }
            
        //Mark the reservation as canceled
        DB::table('reserves')
            ->where('id', $reservation->id)
            ->update(['canceled' => true]);

        //Update session's current reserves and status
        switch ($request->type) {
            case 'psychology':
                $modelClass = \App\Models\PsychologySession::class;
                break;
            case 'nutrition':
                $modelClass = \App\Models\NutritionSession::class;
                break;
            case 'yoga':
                $modelClass = \App\Models\YogaSession::class;
                break;
            case 'aesthetics':
                $modelClass = \App\Models\AestheticsSession::class;
                break;
            case 'osteopathy':
                $modelClass = \App\Models\OsteopathySession::class;
                break;
            case 'pilates':
                $modelClass = \App\Models\PilatesSession::class;
                break;
            default:
                return response()->json(['message' => 'Invalid session type'], 400);
        }

        $session = $modelClass::findOrFail($request->session_id);
        $session->current_reserves -= 1;

        if ($session->current_reserves < 0) {
            $session->current_reserves = 0;
        }

        if ($session->current_reserves == 0) {
            $session->status = 'free';
        } elseif ($session->current_reserves < $session->max_allowed_reserves && $session->current_reserves > 0) {
            $session->status = 'half';
        } else {
            $session->status = 'full';
        }

        $session->save();

        return response()->json(['message' => 'Reservation canceled successfully'], 200);
    }

    /*
    * View all sessions with optional filters
    * Parameters (all optional):
    * - type: string (one of 'psychology', 'nutrition', 'yoga', 'aesthetics', 'osteopathy', 'pilates')
    * - datefrom: date (YYYY-MM-DD)
    * - dateto: date (YYYY-MM-DD)
    */
    public function viewSessions(Request $request)
    {
        $type = $request->type;
        $datefrom = $request->datefrom;
        $dateto = $request->dateto;
        $user_id = $request->user_id;

        // Dynamically determine the model based on the type
        switch ($type) {
            case 'psychology':
                $modelClass = \App\Models\PsychologySession::class;
                break;
            case 'nutrition':
                $modelClass = \App\Models\NutritionSession::class;
                break;
            case 'yoga':
                $modelClass = \App\Models\YogaSession::class;
                break;
            case 'aesthetics':
                $modelClass = \App\Models\AestheticsSession::class;
                break;
            case 'osteopathy':
                $modelClass = \App\Models\OsteopathySession::class;
                break;
            case 'pilates':
                $modelClass = \App\Models\PilatesSession::class;
                break;
            default:
                $modelClass = null;    
                break;
        }

        //If type is not null, get sessions of that type between datefrom and dateto
        if ($modelClass) {
            $sessions = $modelClass::where(function ($query) use ($datefrom, $dateto) {
                if ($datefrom) {
                    $query->where('date', '>=', $datefrom);
                }
                if ($dateto) {
                    $query->where('date', '<=', $dateto);
                }
            })->get();
            //Add a field "type" to each session with the type of the session. Also add a field to indicate if the user has reserved and cancelled it
            foreach ($sessions as $session) {
                $session->type = $type;

                if ($user_id) {
                    $user = \App\Models\User::find($user_id);
                    
                    if (!$user) {
                        return response()->json(['message' => 'User not found'], 404);
                    }

                    $session->reserved_by_user = $user ? $user->activeReserves()->where('reservable_id', $session->id)->where('reservable_type', $modelClass)->exists() : false;
                    $session->cancelled = $user ? \DB::table('reserves')->where('customer_id', $user_id)->where('reservable_id', $session->id)->where('reservable_type', $modelClass)->where('canceled', true)->exists() : false;
                } else {
                    $session->reserved_by_user = false;
                }
            }
        } else {
            //Collect sessions from all types between datefrom and dateto
            $sessions = collect();
            $types = [
                \App\Models\PsychologySession::class,
                \App\Models\NutritionSession::class,
                \App\Models\YogaSession::class,
                \App\Models\AestheticsSession::class,
                \App\Models\OsteopathySession::class,
                \App\Models\PilatesSession::class,
            ];
            foreach ($types as $type) {
                $type_sessions = $type::where(function ($query) use ($datefrom, $dateto) {
                    if ($datefrom) {
                        $query->where('date', '>=', $datefrom);
                    }
                    if ($dateto) {
                        $query->where('date', '<=', $dateto);
                    }
                })->get();
                
                //Transform type to string and add a field "type" to each session with the type of the session. Also add a field to indicate if the user has reserved and cancelled it
                foreach ($type_sessions as $session) {
                    switch ($type) {
                        case \App\Models\PsychologySession::class:
                            $modelClass = \App\Models\PsychologySession::class;
                            $type = 'psychology';
                            break;
                        case \App\Models\NutritionSession::class:
                            $modelClass = \App\Models\NutritionSession::class;
                            $type = 'nutrition';
                            break;
                        case \App\Models\YogaSession::class:
                            $modelClass = \App\Models\YogaSession::class;
                            $type = 'yoga';
                            break;
                        case \App\Models\AestheticsSession::class:
                            $modelClass = \App\Models\AestheticsSession::class;
                            $type = 'aesthetics';
                            break;
                        case \App\Models\OsteopathySession::class:
                            $modelClass = \App\Models\OsteopathySession::class;
                            $type = 'osteopathy';
                            break;
                        case \App\Models\PilatesSession::class:
                            $modelClass = \App\Models\PilatesSession::class;
                            $type = 'pilates';
                            break;
                    }
                    
                    $session->type = $type;

                    if ($user_id) {
                        $user = \App\Models\User::find($user_id);

                        if (!$user) {
                            return response()->json(['message' => 'User not found'], 404);
                        }

                        $session->reserved_by_user = $user ? $user->activeReserves()->where('reservable_id', $session->id)->where('reservable_type', $modelClass)->exists() : false;
                        $session->cancelled = $user ? \DB::table('reserves')->where('customer_id', $user_id)->where('reservable_id', $session->id)->where('reservable_type', $modelClass)->where('canceled', true)->exists() : false;
                    } else {
                        $session->reserved_by_user = false;
                    }
                }
                $sessions = $sessions->merge($type_sessions);
            }
        }
        
        return response()->json(['sessions' => $sessions], 200);
    }
}