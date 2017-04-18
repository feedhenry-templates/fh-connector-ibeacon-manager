# FeedHenry iBeacon Manager

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-ibeacon-manager.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-ibeacon-manager)

Management API for iBeacons within the platform.

## Group iBeacon Manager API

### Retrieve Entry Point

|              |                | 
|--------------|----------------|
| Endpoint     | /cloud/beacons |
| HTTP Method  | GET            |


#### Response 200 (application/json)

##### Body

```json
{
    "1234": {
        "major" : 1,
        "minor" : 1,
        "label": "Some Label Title",
        "sublabel": "Some Label Description"
    }
}
```

### Create iBeacon

Create an iBeacon to manage within the platform. Fill in a major and minor ID below to setup your iBeacon

|              |                | 
|--------------|----------------|
| Endpoint     | /cloud/beacons |
| HTTP Method  | POST           |

#### Request (application/json)
    
##### Body

```json
{
  "major" : 1,
  "minor" : 1,
  "label": "Some Label Title",
  "sublabel": "Some Label Description"
}
```

#### Response 200 (application/json)

##### Body

```json
{
  "ok": "true"
}
```

## Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

### Pre-requisite

* [Redis](https://redis.io/)
* [MongoDB](https://www.mongodb.com/)

### Unit tests

```shell
npm run serve
npm run unit
```

### Unit coverage

```shell
npm run serve
npm run coverage-unit
```

### Accept unit tests

```shell
npm run serve  
npm run accept
```

### Accept coverage 

```shell
npm run serve
npm run coverage-accept
```
