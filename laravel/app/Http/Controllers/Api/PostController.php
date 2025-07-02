<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Validation\ValidationException;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('per_page', 10);
        $posts = Post::paginate($perPage);

        return response()->json($posts);
    }

    public function show($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }
        return response()->json($post);
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]);

            $post = Post::create($validated);

            return response()->json($post, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Title dan content tidak boleh kosong.',
                'errors' => $e->errors(),
            ], 422);
        }
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]);

            $post->update($validated);

            return response()->json($post);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Title dan content tidak boleh kosong.',
                'errors' => $e->errors(),
            ], 422);
        }
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted']);
    }
}
