class GeneratePage {
    constructor(data = '') {
        this.data = data;
    }
    createPage() {
        console.log(this.data);
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                crossorigin="anonymous"
                />
                <script src="https://kit.fontawesome.com/c7e6266a9c.js" crossorigin="anonymous"></script>
                <link
                href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
                rel="stylesheet"
                />
                <link rel="stylesheet" href="./style.css" />
                <title>Team Building Generator</title>
            </head>
        
            <body>
                <header>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm bg-danger text-center">
                                <div class="header-text d-flex flex-row justify-content-center align-items-center">
                                    <h1 class="text-white">My Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
          
        
                <main>
                    <div class="card-container container mt-5">
                        <div class="row d-flex justify-content-center align-items-center gy-4">
                            ${this.data.map((employeeData) => {
                                return `
                                <div class="col-1" style="width: 19rem;">
                                    <div class="card bg-secondary">
                                        <div class="card-body bg-primary text-white">
                                            <h2>${employeeData.getName()}</h2>
                                            <p class="h4"><span>${employeeData.getOfficeNumber ? `<i class="fas fa-chess-king"></i>` : employeeData.getGitHub ? `<i class="fas fa-cogs"></i>` : `<i class="fas fa-user-graduate"></i>`}</span>${employeeData.getRole()}</p> 
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush my-4">
                                                <li class="list-group-item" >ID: ${employeeData.getId()}</li>
                                                <li class="list-group-item"><a href= "mailto:${employeeData.getEmail()}">Email:<br> ${employeeData.getEmail()}</a></li>
                                                <li class="list-group-item">${employeeData.getOfficeNumber ? `Office Number: ${employeeData.getOfficeNumber()}` : employeeData.getGitHub ? `<a href = "https://github.com/${employeeData.getGitHub()}" target="_blank">GitHub: ${employeeData.getGitHub()} </a>` : `School: ${employeeData.getSchool()}`}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                    `
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </main>
          </body>
        </html>
        `
    }
}

module.exports = GeneratePage;