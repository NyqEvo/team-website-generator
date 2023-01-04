module.exports = team => {
    const createManagerHtml = manager => {
        return `<div class='manager'>
        <h2>${manager.getName()}</h2>
        <p> Role: ${manager.getRole()}</p>
        <p> ID: ${manager.getId()}</p>
        <p> Email: <a href='${manager.getEmail()}>${manager.getEmail()}</a></p>
        <p> Office Number: ${manager.getOffice()}</p>
        </div>`
    }

    const createEngineerHtml = engineer => {
        return `<div class='engineer'>
        <h2>${engineer.getName()}</h2>
        <p> Role: ${engineer.getRole()}</p>
        <p> ID: ${engineer.getId()}</p>
        <p> Email: <a href='${engineer.getEmail()}>${engineer.getEmail()}</a></p>
        <p> Github: <a href='${engineer.getGithub()}</a>${engineer.getGithub()}</p>
        </div>`
    }

    const createInternHtml = intern => {
        return `<div class='intern'>
        <h2>${intern.getName()}</h2>
        <p> Role: ${intern.getRole()}</p>
        <p> ID: ${intern.getId()}</p>
        <p> Email: <a href='${intern.getEmail()}>${intern.getEmail()}</a></p>
        <p> School: ${intern.getSchool()}</p>
        </div>`
    
    }
    
    const html = []

    team.forEach(item => {
        if (item.getRole() === 'Manager') {
            let managerObject = item
            html.push(createManagerHtml(managerObject))
        } else if (item.getRole() === 'Engineer') {
            let engineerArray = []
            engineerArray.push(item)
            let finalArray = engineerArray.map(createEngineerHtml(item))
            html.push(finalArray.join('\n'))
        } else {
            let internArray = []
            internArray.push(item)
            let finalArray = internArray.map(createInternHtml(item))
            html.push(finalArray.join('\n'))
        }
    })

    return html.join('')
}