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
    body: '{"email": "test@test.hu", "password": "test789"}',
}).then(r => r.json())
    .then( d => console.log(d) );
```

## TESZT FELHASZNÁLÓ REGISZTRÁCIÓJA böngészőből:
(router-ben kommentelt rész)

```
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(r => r.json())
    .then( d => console.log(d) );
```