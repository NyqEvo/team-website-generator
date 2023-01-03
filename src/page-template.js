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
        return `<div class='engineer'>
        <h2>${getName()}</h2>
        <p> Role: ${getRole()}</p>
        <p> ID: ${getId()}</p>
        <p> Email: <a href='${getEmail()}>${getEmail()}</a></p>
        <p> Github: <a href='${getGithub()}</a>${getGithub()}</p>
        </div>`
    }

    const createInternHtml = intern => {
        return `<div class='intern'>
        <h2>${getName()}</h2>
        <p> Role: ${getRole()}</p>
        <p> ID: ${getId()}</p>
        <p> Email: <a href='${getEmail()}>${getEmail()}</a></p>
        <p> School: ${getSchool()}</p>
        </div>`
    
    }
    
    const html = []

    const filterManager = team => {
        team.forEach(item => {
            if (getRole() === 'Manager') {
                let managerObject = item
                html.push(createManagerHtml(managerObject))
            }
        })
    }

    const filterEngineer = team => {
        team.forEach(item => {
            if (getRole() === 'Engineer') {
                let engineerArray = []
                engineerArray.push(item)
            }
        })
        let finalArray = engineerArray.map(createEngineerHtml(item))
        html.push(finalArray.join('\n'))
    }
    const filterIntern = team => {
        team.forEach(item => {
            if (getRole() === 'Intern') {
                let engineerArray = []
                engineerArray.push(item)
            }
        })
        let finalArray = engineerArray.map(createEngineerHtml(item))
        html.push(finalArray.join('\n'))
    }
}