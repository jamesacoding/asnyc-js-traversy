document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);



function getText() {
    fetch('test.txt')
    .then(res => res.text()
    )
    .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data
    })
    .catch(function(err){
        console.log(err)
    })
}

function getJSON() {
    
    fetch('post.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // document.getElementById('output').innerHTML = data
        let output = '';
        data.forEach(post => {
            output += `<li>${post.title}</li>`

        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    })
}

function getExternal(){

    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data)
        // document.getElementById('output').innerHTML = data
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`

        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    })
}