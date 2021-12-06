const middleware = (req, res, next) => {
    const date = new Date();
    let Day = date.getDay();
    let weekDays = false;
    switch (Day) {
        case 1: weekDays = true;
        case 2: weekDays = true;
        case 3: weekDays = true;
        case 4: weekDays = true;
        case 5: weekDays = true;
        default: weekDays = false;
    };
    let Hour = date.getHours();
    if (Hour >= 9 && Hour <= 17 && weekDays === true)
        next();
    else res.render('public/error.html')
}

module.exports = middleware