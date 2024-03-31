from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Loginfo(models.Model):
    p_name = models.CharField(db_column='P_Name', max_length=50, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=50, blank=True, null=True)  # Field name made lowercase.
    passterm = models.CharField(db_column='PassTerm', max_length=20, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'loginfo'


class Orders(models.Model):
    customer = models.CharField(db_column='Customer', max_length=50, blank=True, null=True)  # Field name made lowercase.
    date_ordered = models.DateTimeField(db_column='Date_Ordered', blank=True, null=True)  # Field name made lowercase.
    complete = models.IntegerField(blank=True, null=True)
    totalprice = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orders'


class Products(models.Model):
    category = models.CharField(db_column='Category', max_length=50, blank=True, null=True)  # Field name made lowercase.
    p_name = models.CharField(db_column='P_Name', max_length=50, blank=True, null=True)  # Field name made lowercase.
    price = models.IntegerField(db_column='Price', blank=True, null=True)  # Field name made lowercase.
    image = models.CharField(db_column='Image', max_length=20, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'products'