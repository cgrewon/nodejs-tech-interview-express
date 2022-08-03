# Nodejs Technical Interview

### Using express , javascript

#### Candidate: Chi (zhengyunxm@gmail.com)

## Package install

```shell
yarn
```

or

```shell
npm install --save
```

## Server run

```shell
yarn start
```

or

```shell
yarn dev // (in watch mode)
```

Server provides 3 end points

## 1. Health checking

http://localhost:3000/

## 2. GET Request

http://localhost:3000/test

### Sample requests

http://localhost:3000/test?words=I&words=like&words=bananas

http://localhost:3000/test?words=I like bananas // (Space will be replaced with %20 when it is called.)

http://localhost:3000/test?words=I%20like%20bananas

Response

```json
{ "status": "success", "result": "I ekil b*n*n*s" }
```

## 3. POST Request

http://localhost:3000/test

### Sample Requests (JSON)

```json
{
  "words": ["I", "like", "bananas"]
}
```

OR

```json
{
  "words": "I like bananas"
}
```

Response

```json
{ "status": "success", "result": "I ekil b*n*n*s" }
```
