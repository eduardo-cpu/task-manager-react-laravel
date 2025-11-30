<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = $request->user()->categories()->withCount('tasks')->get();
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'nullable|string|max:7',
        ]);

        $category = $request->user()->categories()->create($validated);

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Category $category)
    {
        if ($category->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Não autorizado'], 403);
        }

        return response()->json($category->loadCount('tasks'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        if ($category->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Não autorizado'], 403);
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'color' => 'nullable|string|max:7',
        ]);

        $category->update($validated);

        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Category $category)
    {
        if ($category->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Não autorizado'], 403);
        }

        $category->delete();

        return response()->json(['message' => 'Categoria excluída com sucesso']);
    }
}
