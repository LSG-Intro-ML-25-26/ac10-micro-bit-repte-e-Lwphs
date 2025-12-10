gota = False
temperatura = False
x = 2
y = 2

def dibuixarGrafic():
    led.plot_bar_graph(input.temperature(), 50)

def dibuixarGota():
    global x
    global y
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    led.plot(x, y)
    basic.pause(50)
    basic.clear_screen()
    if accX <= 150 and x > 0:
        x = x - 1
    if accX > 150 and x < 4:
        x = x + 1
    if accY <= 150 and y > 0:
        y = y - 1
    if accY > 150 and y < 4:
        y = y + 1

    led.plot(x, y)

def bucle():
    global temperatura 
    global gota
    if input.button_is_pressed(Button.A):
        temperatura = True
        gota = False
    elif input.button_is_pressed(Button.B):
        temperatura = False
        gota = True
    
    if temperatura:
        dibuixarGrafic()
    elif gota:
        dibuixarGota()

while True:
    bucle()
