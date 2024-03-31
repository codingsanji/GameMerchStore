from django.urls import path
from store import views
from store.views import signaction , loginaction


urlpatterns = [
    #Empty string for base url
	path('', views.signaction, name="signup"),

    #Store and its products
    path('main/' , views.main , name="main"),
    path('store/' , views.store , name="store"),

    #Sign up , Log in and Sign out
    path('signin/', views.loginaction, name="signin"),
    path('loggedout/' , views.loggedout , name="loggedout"),

    #Phasmophobia


    #Valorant
]