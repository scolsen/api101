# About REST

Representational State Transfer (REST) is an architectural style that was first
defined in Roy Fielding's PHD dissertation, *Architectural Styles and the Design
of Network-based Software Architectures*. Fielding derived REST by utilizing the
features of many other architectural features utilized in the development of web
based applications.

## Key Properties of the REST Architectural Style

REST has the following important properties:
* **Client-Server:** REST applications follow the client-server model of communication. Application concerns are separated into two primary components, clients, who make requests to servers to read, create, update or perform other actions on data, and servers, that are responsbile for performing some work on information at the request of the client. After server's service client requests, a result is returned, which clients are responsible for rendering in a human-readable format to application users.

* **Stateless:** REST demands that communication between clients and servers remain stateless. Software adhering to the REST architectural style cannot take advantage of state-based on contextual information stored on the server--only clients are allowed to have state. This ensures that requests from clients will always be serviced in a particular manner, and do not rely on the current state of the server, which may be obscure or unknown, upon receiving the request. The import of this design decision is to limit the scope of information needed to services request to the request only. So long as servers can parse the full contents of a request, they have done all the work necessary to determine how to respond--there is no need for them to go and fetch additional data such as the server state. This aspect of the REST style guarantees that, given two clients and requests are identical, a server implementing a REST style architecture will always respond to these clients in the same manner.

* **Uniform:** REST requires applications utilize a uniform interface for communication between components. Data sent and retrieved by REST style applications must follow a limited set of constraints to ensure information remains portable and scalable, yet remains rich enough to remain useful to clients. HTTP messages and other meta and control data are used to capture the intent of clients as well as the current state of an intended resource, which is identifiable by a uniform resource identifier (URI). Uniformity enables clients and servers to rely on consistent communication structures while remaning flexible as to how to implement this data. For instance, a server may run particular functionality upon recieving a GET request, and respond with data detailing the contents of an image. A client communicating with this server does not need to know anything about the server's backend processes, nor does it even have to render the recieved image data in a particular way--it has no contract with the server beyond the communication format. 

## Limitations of REST 


