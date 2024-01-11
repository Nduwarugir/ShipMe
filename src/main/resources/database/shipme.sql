create table if not exists produits (
                                        id int(8) auto_increment primary key,
                                        label varchar(50) not null ,
                                        tag varchar(50),
                                        picture longblob,
                                        quantity int default 1,
                                        prix_euro decimal(10, 2) not null ,
                                        prix_euro_total decimal as (prix_euro * quantity) stored,
                                        prix_fcfa decimal(10, 2) as (prix_euro * 700) stored,
                                        prix_fcfa_total decimal(10, 2) as (prix_euro_total * 700) stored,
                                        poids decimal(10, 2) not null,
                                        poids_total decimal(10, 2) as (poids * quantity) stored,
                                        description varchar(10000)
);

create table if not exists commande (
                                        id int(8) auto_increment primary key,
                                        date timestamp default current_timestamp,
                                        total_article decimal(10, 2) not null,
                                        total_kg decimal(10, 2) not null,
                                        frais decimal(10, 2) as (total_article * 0.02) stored,
                                        commission decimal(10, 2) default 10000,
                                        reception decimal(10, 2) default 10000,
                                        total decimal(10, 2) as (total_article+commission+frais+reception) stored
);

create table if not exists features (
                                        id int(8) auto_increment primary key,
                                        value_fcfa decimal(10, 2) not null,
                                        frais decimal(10, 2) default 0.02,
                                        commission decimal(10, 2) default 10000,
                                        expedition decimal(10, 2) default 50
);

insert into produits(label, tag, quantity, prix_euro, poids)
VALUES ('iphone 64', 'iphone', 1, 687.99, 150),
       ('iphone 65', 'iphone', 2, 687.99, 150),
       ('iphone 66', 'iphone', 3, 687.99, 150);

insert into commande(total_article, total_kg, commission, reception)
VALUES ((select sum(prix_fcfa_total) from produits), (select sum(poids_total) from produits), 10000, 10000),
       (1205000, 150, 30000, 4000),
       (10, 20, 30, 40);

insert into features(value_fcfa, frais, commission, expedition)
VALUES (700, 0.05, 5000, 4000);

select *
from produits;

select *
from commande;

select *
from features;

select *
from commande;

select *
from produits
where id = 4;

insert into produits(label, tag, picture, quantity, prix_euro, poids, description)
VALUES ();