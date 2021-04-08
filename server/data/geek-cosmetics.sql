-- --------- SEQUENCES ----------------
-- ------------------------------------
-- Sequence structure for orders table
-- ------------------------------------
DROP SEQUENCE IF EXISTS "orders_seq" CASCADE;
CREATE SEQUENCE "orders_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
-- ------------------------------------
-- Sequence structure for products table
-- ------------------------------------
DROP SEQUENCE IF EXISTS "products_seq" CASCADE;
CREATE SEQUENCE "products_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
-- --------- SEQUENCES ----------------

-- ----------- TABLES -----------------
-- ------------------------------------
-- Table structure for orders
-- ------------------------------------
DROP TABLE IF EXISTS "public"."orders" CASCADE;
CREATE TABLE "public"."orders" (
  "id_order" int4 NOT NULL DEFAULT nextval('orders_seq'::regclass),
  "order_date" date NOT NULL,
  "order_products" jsonb NOT NULL,
  PRIMARY KEY ("id_order")
);
-- ------------------------------------
-- Table structure for products
-- ------------------------------------
DROP TABLE IF EXISTS "public"."products" CASCADE;
CREATE TABLE "public"."products" (
  "id_product" int4 NOT NULL DEFAULT nextval('products_seq'::regclass),
  "product_description" varchar(100) NOT NULL,
  "product_price" numeric(15) NOT NULL,
  "product_stocks" numeric(8) NOT NULL,
  PRIMARY KEY ("id_product")
);
-- ----------- TABLES -----------------

-- ----------- INSERTIONS -----------------
-- ------------------------------------
-- Record insertion for orders
-- ------------------------------------
INSERT INTO "public"."orders" (order_date, order_products) VALUES ('2021-04-07',
'[{
  "productid": 0,
  "descripcion": "Foam",
  "precio": 25000,
  "existencia": 523
},
 {
  "productid": 1,
  "descripcion": "Carbón Activado WIKI",
  "precio": 18000,
  "existencia": 300
}
]');
-- ------------------------------------
-- Record insertion for products
-- ------------------------------------
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Foam', '25000', '523');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Carbón Activado WIKI', '18000', '300');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('DepilYA', '10000', '1000');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Mantequilla Corporal (durazno)', '25000', '523');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Bronceador', '40000', '250');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Antiestrias', '35000', '300');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Despigmentante Intimo', '40000', '500');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Despigmentante Facial', '35000', '365');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Dermatónico', '40000', '500');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Mantequilla Corporal (frutos rojos)', '25000', '2000');
INSERT INTO "public"."products" (product_description, product_price, product_stocks) VALUES ('Mantequilla Corporal (naranja)', '25000', '700');

-- ----------- INSERTIONS -----------------