# About GraphQL

GraphQL is a query language developed at Facebook and built to support flexible
web APIs. GraphQL attempts to provide significant advantages over traditional
REST architectures, particularly in the realm of API scalability and
maintenance.

## Differences from Resource Based REST APIs

Unlike REST, graphql provides a query language servers can use to expose API
components, and clients can use to access server resources. REST avoids
specifying any such language, and as such it is common in REST to handle
anticipated queries using multiple URL patterns. While this enables REST to
avoid being dogmatic and enforcing the client and server both to implement a
particular technology in their requests, it can lead to a rapid proliferation of
'endpoints' or URLs as an API scales and grows to meet the needs of its
consumers. GraphQL, contrarily, by enforcing the server and client use a
particular language for the specification of requests and responses, ensures
that any query for a particular set of data can be handled from a single
endpoint or URL, no matter how minuscule or massive the API in question. For
example, Github's REST API implements 31 base endpoints to service requests for
data of varying types. Github's GraphQL API exposes the same amount of data with
a single endpoint.

  
