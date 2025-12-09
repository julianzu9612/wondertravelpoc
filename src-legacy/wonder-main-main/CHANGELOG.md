# CHANGELOG


Use the following format to release versions

## [Unreleased] - yyyy-mm-dd
 
(Description Example) Here we write upgrading notes for brands. It's a team effort to make them as
straightforward as possible.
 
### Added
- [PROJECTNAME-XXXX](http://tickets.projectname.com/browse/PROJECTNAME-XXXX)
  MINOR Description.
- [PROJECTNAME-YYYY](http://tickets.projectname.com/browse/PROJECTNAME-YYYY)
  PATCH Description.
 
### Changed
 
### Fixed

--

## [v3.0.0] - 2023-09-28

Liberamos la primera version para que los clientes puedan hacer los pre-bookings usando el sistema de alojamiento, fechas, cantidad de personas y ver el resumen de compra.

### WonderWeb

### Changed
- [ProductItinerary v2](https://wondertravel.co/es/trips/cano-cristales-27) Vista con campos soportados para Roundtrips
- [ProductItinerary Dates] Mostar las fechas en el detalle del producto itinerario
- [ProductItinerary news Pricing Card] Nuevo funcionamiento para dispositivos desktop y mobile

### Added
- [Wonder's Bookings] Flujos para reservar usando la pagina web y los servicios del backoffice(Se necesita configurar un producto para habilitar el boton desde la tarjeta de precio)
- [Profile Account](https://wondertravel.co/es/profile) Cuenta para que los clientes de wonder gestiones sus reservas e información
- [Auth flows](https://wondertravel.co/es/auth) Registro para usuarios nuevos y accesso para clientes de Wonder

### Fixed
- [General UI improvements] Ajustes generales en la interfaz


### Backoffice

### Changed
- [ProductItinerary v2](https://op.wondertravel.co/admin/trip/trip/) (Entrar a un producto) Ajuste de modulos para poder configurar, personas, alojamiento y precios


### Added
- [ProductItinerary Persons](https://op.wondertravel.co/admin/trip/trip/72/change/#individuos-tab) Agregar tipo de personas que son aptas para hacer una reservación
- [ProductItinerary Accomodations](https://op.wondertravel.co/admin/trip/tripaccommodation/) Agregar alojamientos tales como cabañas y habitaiones individuales
- [ProductItinerary Pricing] Sistema avanzado de precios para configurar los destinos
- [Wonder's Bookings](https://op.wondertravel.co/admin/booking/booking/) Modulo para manejo y gestion de bookings
- [Users Directory](https://op.wondertravel.co/admin/auth/user/) Directorio de usuarios (Customer, host, WonderOps)
- [Authentication System](https://wondertravel.co/es/auth) Servicio de autenticacion para Clientes