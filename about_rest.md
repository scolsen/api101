# About REST

Representational State Transfer (REST) is an architectural style that was first
defined in Roy Fielding's PHD dissertation, *Architectural Styles and the Design
of Network-based Software Architectures*. Fielding derived REST by utilizing the
features of many other architectural features utilized in the development of web
based applications.

## Properties of the REST Architectural Style

REST has the following important properties:
* **Stateless:** REST demands that communication between clients and servers
* remain stateless. Software adhering to the REST architectural style cannot
* take advantage of state-based on contextual information stored on the
* server--only clients are allowed to have state. This ensures that requests
* from clients will always be serviced in a particular manner, and do not rely
* on the current state of the server, which may be obscure or unknown, upon
* receiving the request. The import of this design decision is to limit the
* scope of information needed to services request to the request only. So long
* as servers can parse the full contents of a request, they have done all the
* work necessary to determine how to respond--there is no need for them to go
* and fetch additional data such as the server state. This aspect of the REST
* style guarantees that, given two clients and requests are identical, a server
* implementing a REST style architecture will always respond to these clients in
* the same manner.


## Limitations of REST 

