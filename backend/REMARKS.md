## category GET request végpontteszt böngészőből, access_token-nel:

```
fetch('http://localhost:3000/category', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    },
}).then(r => r.json())
    .then( d => console.log(d) );
```

## LOGIN tesztelése böngészőből:

```
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"email": "t@t.hu", "password": "012"}',
}).then(r => r.json())
    .then( d => console.log(d) );
```

## TESZT FELHASZNÁLÓ REGISZTRÁCIÓJA böngészőből:
(router-ben kommentelt résszel együtt)

```
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(r => r.json())
    .then( d => console.log(d) );
```