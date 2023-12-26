-- ----------------------------------------------------------------------------
-- Put here INSERT statements for inserting data required by the application
-- in the "asiproject" database.
-------------------------------------------------------------------------------

INSERT INTO Draft (shipping_details, invoicing_details, providers, state) VALUES ('Shipping details 1', 'Invoicing details 1', 'Providers 1', 'RECEIVED');
INSERT INTO Draft (shipping_details, invoicing_details, providers, state) VALUES ('Shipping details 2', 'Invoicing details 2', 'Providers 2', 'IN_PROCESS');

INSERT INTO Part (reference, name, amount, price, photo_url, description, last_purchase_price, provider) VALUES ('Reference 1', 'Name 1', 5, 1.1, '1.png', 'Description 1', 1.1, 'Provider 1');