let gota = false
let temperatura = false
let x = 2
let y = 2
function dibuixarGrafic() {
    led.plotBarGraph(input.temperature(), 50)
}

function dibuixarGota() {
    
    
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    led.plot(x, y)
    basic.pause(50)
    basic.clearScreen()
    if (accX <= 150 && x > 0) {
        x = x - 1
    }
    
    if (accX > 150 && x < 4) {
        x = x + 1
    }
    
    if (accY <= 150 && y > 0) {
        y = y - 1
    }
    
    if (accY > 150 && y < 4) {
        y = y + 1
    }
    
    led.plot(x, y)
}

function bucle() {
    
    
    if (input.buttonIsPressed(Button.A)) {
        temperatura = true
        gota = false
    } else if (input.buttonIsPressed(Button.B)) {
        temperatura = false
        gota = true
    }
    
    if (temperatura) {
        dibuixarGrafic()
    } else if (gota) {
        dibuixarGota()
    }
    
}

while (true) {
    bucle()
}
