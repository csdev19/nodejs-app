#  Entidades de una base de datos

## Agent

Es aquella aplicacion de monitoreo, que va a conectarse al servidor de tiempo real y que va a reportar unas metricas que van a estar asociadas a ese agente.

- id
- uuid: id aleatorio
- name
- username
- hostname
- pid 
- connected
- createdAt
- updateAt

## Metric

Puede ser cualquier valor que tiene un tipo, que va a hacer almacenada a una bd y va a estar asociada a un agente que es el que esta reportando estas metricas.

- id
- agentId
- type
- valuee
- createdAt
- updatedAt

### Utilizaremos sequelize