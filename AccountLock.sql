create database Accounts;
use Accounts;
drop database Accounts ;

create table loginfo
(UserName char(50) not null,
Email  varchar(50) not null,
PassTerm varchar(20) not null 
);
insert into loginfo values
("Susan" , "susanheist@gmail.com" , "SusanHeist@123"),
("Mike" , "monstermike@gmail.com" , "MikeKills.456"),
("Nonan" , "nonanhey34@gmail.com" , "Nomanan87$");

select * from loginfo;

create table products
(Category char(50),
P_Name char(50),
Price  int,
Image varchar(20) 
);

select * from products;

create table orders
(Customer char(50),
Date_Ordered datetime,
complete  bool,
totalprice int
);

select * from orders;


