from django.shortcuts import render,redirect
import mysql.connector as sql
from django.contrib.auth.forms import UserCreationForm , AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login , logout
from django.contrib import messages
from .models import Loginfo

#Base URL
def main(request):
    context={}
    return render(request , 'store/main.html' , context)

#Store and its products
#view of store (front-main)
def store(request):
    context={}
    return render(request , 'store/store.html' , context)

#Sign up , Log in and Sign out
#view of the sign out page
def loggedout(request):
    context={}
    return render(request , 'store/out.html' , context)

#sign up and store in database
n=''
em=''
pwd=''
def signaction(request):
    global n,em,pwd
    if request.method=="POST":
        mydb = sql.connect(
        host="127.0.0.1",
        user="root",
        password="Fufu$2005" ,
        database="Accounts"
        )
        cursor=mydb.cursor()
        d=request.POST
        for key,value in d.items():
            if key=="nameuser":
                n=value
            if key=="email":
                em=value
            if key=="passterm":
                pwd=value
        
        c="insert into loginfo Values('{}','{}','{}')".format(n,em,pwd)
        cursor.execute(c)
        mydb.commit()
    return render(request,"store/signup.html")

#log in allow
n=''
pwd=''
def loginaction(request):
    global n,pwd
    if request.method=="POST":
        mydb = sql.connect(
        host="127.0.0.1",
        user="root",
        password="Fufu$2005" ,
        database="Accounts")
        cursor=mydb.cursor()
        d=request.POST
        for key,value in d.items():
            if key=="username":
                n=value
            if key=="password":
                pwd=value
        
        c="select * from loginfo where UserName='{}' and PassTerm='{}'".format(n,pwd)
        cursor.execute(c)
        t=tuple(cursor.fetchall())
        if t==():

            return render(request, 'store/login.html')
            
        else:
            return redirect('/main')
    else:
        return render(request,'store/login.html')



    
