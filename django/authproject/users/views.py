from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'users/home.html')

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        User.objects.create_user(username=username, password=password)
        return redirect('login')
    return render(request, 'users/signup.html')

def login_view(request):
    error = None
    if request.method == 'POST':
        user = authenticate(
            request,
            username=request.POST['username'],
            password=request.POST['password']
        )
        if user:
            login(request, user)
            return redirect('user_list')
        else:
            error = "Username atau password salah"
    return render(request, 'users/login.html', {'error': error})

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def user_list(request):
    users = User.objects.all()
    return render(request, 'users/user_list.html', {'users': users})

@login_required
def user_edit(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        user.username = request.POST['username']
        user.save()
        return redirect('user_list')
    return render(request, 'users/user_edit.html', {'user': user})

@login_required
def user_delete(request, user_id):
    user = get_object_or_404(User, id=user_id)
    user.delete()
    return redirect('user_list')
