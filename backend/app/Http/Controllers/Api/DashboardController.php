<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        
        $totalTasks = $user->tasks()->count();
        $pendingTasks = $user->tasks()->where('status', 'pending')->count();
        $inProgressTasks = $user->tasks()->where('status', 'in_progress')->count();
        $completedTasks = $user->tasks()->where('status', 'completed')->count();
        
        $tasksByPriority = [
            'low' => $user->tasks()->where('priority', 'low')->count(),
            'medium' => $user->tasks()->where('priority', 'medium')->count(),
            'high' => $user->tasks()->where('priority', 'high')->count(),
        ];

        $overdueTasks = $user->tasks()
            ->where('due_date', '<', now())
            ->where('status', '!=', 'completed')
            ->count();

        $upcomingTasks = $user->tasks()
            ->where('due_date', '>=', now())
            ->where('due_date', '<=', now()->addDays(7))
            ->where('status', '!=', 'completed')
            ->orderBy('due_date')
            ->limit(5)
            ->get();

        $recentTasks = $user->tasks()
            ->with('category')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return response()->json([
            'total_tasks' => $totalTasks,
            'pending_tasks' => $pendingTasks,
            'in_progress_tasks' => $inProgressTasks,
            'completed_tasks' => $completedTasks,
            'tasks_by_priority' => $tasksByPriority,
            'overdue_tasks' => $overdueTasks,
            'upcoming_tasks' => $upcomingTasks,
            'recent_tasks' => $recentTasks,
            'completion_rate' => $totalTasks > 0 ? round(($completedTasks / $totalTasks) * 100, 1) : 0,
        ]);
    }
}
