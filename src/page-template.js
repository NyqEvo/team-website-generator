const createTeamHtml = team => {
    const createManagerHtml = manager => {
        return `<div class='manager'>
        <h2>${getName()}</h2>
        <p> Role: ${getRole()}</p>
        <p> ID: ${getId()}</p>
        <p> Email: <a href='${getEmail()}>${getEmail()}</a></p>
        <p> Office Number: ${getOffice()}</p>
        </div>`
    }

    const createEngineerHtml = engineer => {
        return `<div class='manager'>
        <h2>${getName()}</h2>
        <p> Role: ${getRole()}</p>
        <p> ID: ${getId()}</p>
        <p> Email: <a href='${getEmail()}>${getEmail()}</a></p>
        <p> Github: <a href='${getGithub()}</a>${getGithub()}</p>
        </div>`
    }

    const createInternHtml = intern => {
        return `<div class='manager'>
        <h2>${getName()}</h2>
        <p> Role: ${getRole()}</p>
        <p> ID: ${getId()}</p>
        <p> Email: <a href='${getEmail()}>${getEmail()}</a></p>
        <p> School: ${getSchool()}</p>
        </div>`
    
    }
    
    const html = []

    const filterManager = list => {
        list.forEach(item => {
            if (item.role === 'Manager') {

            }
        })
    }
}